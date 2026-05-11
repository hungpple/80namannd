#!/usr/bin/env python3
"""HTTP FAISS search service for the Next.js RAG runtime.

The Next.js API embeds the user query with Ollama, then POSTs that vector to
this service. This service searches .rag-index/faiss.index and returns chunk
indexes that Next.js can fuse with BM25 results.

Run:
  py -3 scripts/faiss-search-service.py --host 127.0.0.1 --port 8001
"""

from __future__ import annotations

import argparse
import json
import os
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any

import numpy as np
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

try:
    import faiss
except ImportError as exc:  # pragma: no cover - environment guard
    raise SystemExit(
        "Missing dependency: faiss. Install with `pip install -r requirements-rag.txt` "
        "or use a Conda environment with faiss-cpu."
    ) from exc


class SearchRequest(BaseModel):
    embedding: list[float] = Field(min_length=1)
    topK: int = Field(default=40, ge=1, le=200)
    model: str | None = None


class SearchResult(BaseModel):
    chunkIndex: int
    chunkId: str
    score: float


class ServiceState:
    def __init__(self, index_dir: Path):
        self.index_dir = index_dir
        self.faiss_index_path = index_dir / "faiss.index"
        self.vectors_path = index_dir / "vectors.json"
        self.chunks_path = index_dir / "chunks.json"
        self.index: Any | None = None
        self.chunk_ids: list[str] = []
        self.dimension = 0
        self.model: str | None = None
        self.manifest_hash: str | None = None

    def load(self) -> None:
        if not self.faiss_index_path.exists():
            raise RuntimeError(
                f"FAISS index not found: {self.faiss_index_path}. "
                "Run `npm.cmd run rag:build-faiss` after vectors.json is created."
            )

        if not self.vectors_path.exists():
            raise RuntimeError(f"Vector metadata not found: {self.vectors_path}")

        payload = json.loads(self.vectors_path.read_text(encoding="utf-8"))
        chunk_ids = payload.get("chunkIds")

        if not isinstance(chunk_ids, list) or not chunk_ids:
            raise RuntimeError("vectors.json is missing chunkIds metadata.")

        index = faiss.read_index(str(self.faiss_index_path))

        if index.ntotal != len(chunk_ids):
            raise RuntimeError(
                f"FAISS index contains {index.ntotal} vectors, "
                f"but vectors.json has {len(chunk_ids)} chunk ids."
            )

        self.index = index
        self.chunk_ids = [str(chunk_id) for chunk_id in chunk_ids]
        self.dimension = int(index.d)
        self.model = payload.get("model")
        self.manifest_hash = payload.get("manifestHash")

    def search(self, embedding: list[float], top_k: int) -> list[SearchResult]:
        if self.index is None:
            raise RuntimeError("FAISS index is not loaded.")

        query = np.asarray([embedding], dtype="float32")

        if query.ndim != 2 or query.shape[1] != self.dimension:
            raise ValueError(
                f"Embedding dimension mismatch. Expected {self.dimension}, got {query.shape[1]}"
            )

        faiss.normalize_L2(query)
        scores, indexes = self.index.search(query, min(top_k, self.index.ntotal))
        results: list[SearchResult] = []

        for score, index in zip(scores[0], indexes[0]):
            chunk_index = int(index)

            if chunk_index < 0 or chunk_index >= len(self.chunk_ids):
                continue

            results.append(
                SearchResult(
                    chunkIndex=chunk_index,
                    chunkId=self.chunk_ids[chunk_index],
                    score=float(score),
                )
            )

        return results


def create_app(index_dir: Path) -> FastAPI:
    state = ServiceState(index_dir)

    @asynccontextmanager
    async def lifespan(_: FastAPI):
        state.load()
        yield

    app = FastAPI(title="80 Nam ANND FAISS Search Service", lifespan=lifespan)

    @app.get("/health")
    def health() -> dict[str, Any]:
        return {
            "ok": state.index is not None,
            "indexDir": str(state.index_dir),
            "faissIndexPath": str(state.faiss_index_path),
            "vectors": len(state.chunk_ids),
            "dimension": state.dimension,
            "model": state.model,
            "manifestHash": state.manifest_hash,
        }

    @app.post("/reload")
    def reload_index() -> dict[str, Any]:
        state.load()
        return health()

    @app.post("/search")
    def search(request: SearchRequest) -> dict[str, Any]:
        try:
            results = state.search(request.embedding, request.topK)
        except ValueError as exc:
            raise HTTPException(status_code=400, detail=str(exc)) from exc
        except RuntimeError as exc:
            raise HTTPException(status_code=503, detail=str(exc)) from exc

        return {
            "results": [result.model_dump() for result in results],
            "model": state.model,
            "dimension": state.dimension,
            "requestedTopK": request.topK,
        }

    return app


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the FAISS search service.")
    parser.add_argument(
        "--index-dir",
        default=os.environ.get("RAG_INDEX_DIR", ".rag-index"),
        help="Directory containing faiss.index and vectors.json.",
    )
    parser.add_argument(
        "--host",
        default=os.environ.get("RAG_FAISS_HOST", "127.0.0.1"),
        help="Host to bind.",
    )
    parser.add_argument(
        "--port",
        type=int,
        default=int(os.environ.get("RAG_FAISS_PORT", "8001")),
        help="Port to bind.",
    )
    return parser.parse_args()


def main() -> None:
    import uvicorn

    args = parse_args()
    app = create_app(Path(args.index_dir))
    uvicorn.run(app, host=args.host, port=args.port)


if __name__ == "__main__":
    main()
