import { ScoreSummary } from "../types/dbTypes";

export function extractScoreSummary(body: any): ScoreSummary | null {
  // 1) Responses API: body.output[].content[].text
  const texts1 = collectTextsFromOutput(body);
  for (const t of texts1) {
    const parsed = parseJsonObjectWithScoreSummary(t);
    if (parsed) return parsed;
  }
  return null;
}

function collectTextsFromOutput(body: any): string[] {
  const out = body?.output;
  if (!Array.isArray(out)) return [];
  const texts: string[] = [];
  for (const block of out) {
    const content = block?.content;
    if (!Array.isArray(content)) continue;
    for (const c of content) {
      const text = c?.text;
      if (typeof text === "string") texts.push(text);
    }
  }
  return texts;
}

/**
 * 문자열 안에서 {"score":..., "summary":...} 형태의 JSON 오브젝트를 파싱
 * - 순수 JSON 문자열이든
 * - 문장 속에 JSON이 섞여 있든 둘 다 시도
 */
function parseJsonObjectWithScoreSummary(s: string): ScoreSummary | null {
  // 1) 먼저 전체를 JSON으로 시도
  const direct = safeParseJson(s);
  const candidate = pickScoreSummary(direct);
  if (candidate) return candidate;

  // 2) 문자열 안에서 { ... } JSON object를 찾는 정규식 (가장 첫 매치만)
  //    - 중첩 중괄호에 완벽하진 않지만, 일반 응답(JSON block) 추출용으로 충분
  const match = s.match(/\{[^]*\}/);
  if (match) {
    const obj = safeParseJson(match[0]);
    const candidate2 = pickScoreSummary(obj);
    if (candidate2) return candidate2;
  }
  return null;
}

function safeParseJson(s: unknown): any {
  if (typeof s !== "string") return null;
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

function pickScoreSummary(obj: any): ScoreSummary | null {
  if (!obj || typeof obj !== "object") return null;
  const score = obj.score;
  const summary = obj.summary;
  if (typeof score === "number" && typeof summary === "string") {
    return { score, summary };
  }
  return null;
}
