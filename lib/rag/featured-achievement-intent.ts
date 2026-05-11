import {
  FEATURED_ACHIEVEMENTS,
  FEATURED_ACHIEVEMENTS_SOURCE_DOCUMENT,
  FEATURED_ACHIEVEMENT_STAGES,
  type FeaturedAchievement,
  type FeaturedAchievementStageKey,
} from "@/lib/rag/featured-achievements";
import { normalizeForSearch } from "@/lib/rag/text";

export type FeaturedAchievementSpecialAnswer = {
  answer: string;
  intent: "featured_achievements_list" | "featured_achievements_stage" | "featured_achievement_number";
  itemCount: number;
  sourceDocument: string;
};

type DetectedIntent =
  | {
      type: "list";
    }
  | {
      type: "stage";
      stageKey: FeaturedAchievementStageKey;
    }
  | {
      type: "single";
      achievementNumber: number;
    };

export function buildFeaturedAchievementSpecialAnswer(
  question: string
): FeaturedAchievementSpecialAnswer | null {
  const intent = detectFeaturedAchievementIntent(question);

  if (!intent) {
    return null;
  }

  if (intent.type === "single") {
    const achievement = FEATURED_ACHIEVEMENTS.find(
      (item) => item.number === intent.achievementNumber
    );

    if (!achievement) {
      return null;
    }

    return {
      answer: buildSingleAchievementAnswer(achievement),
      intent: "featured_achievement_number",
      itemCount: 1,
      sourceDocument: FEATURED_ACHIEVEMENTS_SOURCE_DOCUMENT,
    };
  }

  if (intent.type === "stage") {
    const achievements = FEATURED_ACHIEVEMENTS.filter(
      (item) => item.stageKey === intent.stageKey
    );

    return {
      answer: buildAchievementTableAnswer(
        achievements,
        `Dưới đây là bảng thống kê ${achievements.length} chiến công nổi bật của lực lượng An ninh nhân dân trong ${FEATURED_ACHIEVEMENT_STAGES[intent.stageKey]}.`
      ),
      intent: "featured_achievements_stage",
      itemCount: achievements.length,
      sourceDocument: FEATURED_ACHIEVEMENTS_SOURCE_DOCUMENT,
    };
  }

  return {
    answer: buildAchievementTableAnswer(
      FEATURED_ACHIEVEMENTS,
      "Dưới đây là bảng thống kê 80 chiến công nổi bật của lực lượng An ninh nhân dân, được hệ thống hóa theo các giai đoạn lịch sử."
    ),
    intent: "featured_achievements_list",
    itemCount: FEATURED_ACHIEVEMENTS.length,
    sourceDocument: FEATURED_ACHIEVEMENTS_SOURCE_DOCUMENT,
  };
}

function detectFeaturedAchievementIntent(question: string): DetectedIntent | null {
  const normalizedQuestion = normalizeForSearch(question);

  if (!normalizedQuestion.includes("chien cong")) {
    return null;
  }

  const achievementNumber = detectAchievementNumber(normalizedQuestion);

  if (achievementNumber !== null) {
    return {
      type: "single",
      achievementNumber,
    };
  }

  const stageKey = detectStageKey(normalizedQuestion);
  const isListIntent = hasFeaturedAchievementListIntent(normalizedQuestion);

  if (stageKey && isListIntent) {
    return {
      type: "stage",
      stageKey,
    };
  }

  if (isListIntent) {
    return {
      type: "list",
    };
  }

  return null;
}

function detectAchievementNumber(normalizedQuestion: string) {
  const match = normalizedQuestion.match(/\bchien cong\s+(?:so\s+|thu\s+)?(\d{1,2})\b/);

  if (!match) {
    return null;
  }

  const number = Number(match[1]);

  if (!Number.isInteger(number) || number < 1 || number > 80) {
    return null;
  }

  return number;
}

function detectStageKey(
  normalizedQuestion: string
): FeaturedAchievementStageKey | null {
  if (
    includesAny(normalizedQuestion, [
      "1954 1975",
      "mien bac xa hoi chu nghia",
      "giai phong mien nam",
      "thong nhat dat nuoc",
      "chong my",
      "khang chien chong my",
    ])
  ) {
    return "1954-1975";
  }

  if (
    includesAny(normalizedQuestion, [
      "1945 1954",
      "khang chien chong thuc dan phap",
      "chong thuc dan phap",
      "chong phap",
      "bao ve chinh quyen cach mang",
    ])
  ) {
    return "1945-1954";
  }

  if (
    includesAny(normalizedQuestion, [
      "1975 den nay",
      "sau 1975",
      "tu 1975",
      "bao ve to quoc",
      "viet nam xa hoi chu nghia",
      "thoi ky doi moi",
      "hien nay",
    ])
  ) {
    return "1975-nay";
  }

  return null;
}

function hasFeaturedAchievementListIntent(normalizedQuestion: string) {
  if (normalizedQuestion.includes("80 chien cong")) {
    return true;
  }

  if (
    includesAny(normalizedQuestion, [
      "liet ke",
      "thong ke",
      "danh sach",
      "co nhung chien cong nao",
      "nhung chien cong nao",
      "gom nhung gi",
      "gom nhung",
      "theo tung giai doan",
      "qua cac giai doan",
      "trong 80 nam",
      "noi bat",
      "tieu bieu",
    ])
  ) {
    return true;
  }

  return (
    normalizedQuestion.startsWith("cac chien cong") &&
    includesAny(normalizedQuestion, ["la gi", "gom", "giai doan"])
  );
}

function buildSingleAchievementAnswer(achievement: FeaturedAchievement) {
  return [
    `Chiến công số ${achievement.number} trong danh sách 80 chiến công nổi bật của lực lượng An ninh nhân dân là:`,
    "",
    buildAchievementTable([achievement]),
    "",
    "Bạn có thể hỏi tiếp về ý nghĩa, bối cảnh hoặc nội dung chi tiết của chiến công này.",
  ].join("\n");
}

function buildAchievementTableAnswer(
  achievements: readonly FeaturedAchievement[],
  openingSentence: string
) {
  return [
    openingSentence,
    "",
    buildAchievementTable(achievements),
    "",
    "Bạn có thể hỏi tiếp về ý nghĩa, bối cảnh hoặc nội dung chi tiết của từng chiến công.",
  ].join("\n");
}

function buildAchievementTable(achievements: readonly FeaturedAchievement[]) {
  const rows = achievements.map(
    (achievement) =>
      `| ${achievement.number} | ${escapeMarkdownTableCell(
        achievement.stage
      )} | ${escapeMarkdownTableCell(achievement.title)} |`
  );

  return [
    "| STT | Giai đoạn | Tên chiến công |",
    "| ---: | --- | --- |",
    ...rows,
  ].join("\n");
}

function escapeMarkdownTableCell(value: string) {
  return value.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();
}

function includesAny(value: string, candidates: readonly string[]) {
  return candidates.some((candidate) => value.includes(candidate));
}
