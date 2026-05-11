#!/usr/bin/env python3
"""Build a FAISS index from the persisted RAG vector artifact.

This script is optional for the Next.js app. The app can search vectors from
.rag-index/vectors.json directly, and production deployments can run this script
to create .rag-index/faiss.index for a dedicated FAISS search service.

Install requirements in the FAISS service environment:
  py -3 -m pip install -r requirements-rag.txt

Then run:
  py -3 scripts/build-faiss-index.py
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np

try:
    import faiss
except ImportError as exc:  # pragma: no cover - environment guard
    raise SystemExit(
        "Missing dependency: faiss. Install with `pip install -r requirements-rag.txt`."
    ) from exc


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build a FAISS index for RAG vectors.")
    parser.add_argument(
        "--index-dir",
        default=".rag-index",
        help="Directory containing vectors.json and chunks.json.",
    )
    parser.add_argument(
        "--output",
        default=None,
        help="Output FAISS index path. Defaults to <index-dir>/faiss.index.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    index_dir = Path(args.index_dir)
    vectors_path = index_dir / "vectors.json"
    output_path = Path(args.output) if args.output else index_dir / "faiss.index"

    if not vectors_path.exists():
        raise SystemExit(f"Vector artifact not found: {vectors_path}")

    payload = json.loads(vectors_path.read_text(encoding="utf-8"))
    vectors = np.asarray(payload["vectors"], dtype="float32")

    if vectors.ndim != 2 or vectors.shape[0] == 0:
        raise SystemExit("vectors.json does not contain a valid 2D vector matrix.")

    faiss.normalize_L2(vectors)
    index = faiss.IndexFlatIP(vectors.shape[1])
    index.add(vectors)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    faiss.write_index(index, str(output_path))

    print(
        json.dumps(
            {
                "ok": True,
                "indexPath": str(output_path),
                "vectors": int(vectors.shape[0]),
                "dimension": int(vectors.shape[1]),
                "metric": "inner_product_on_l2_normalized_vectors",
                "embeddingModel": payload.get("model"),
                "manifestHash": payload.get("manifestHash"),
            },
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
