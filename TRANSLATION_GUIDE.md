# Translation & SEO guide (Korean post → English post)

The goal is not a literal translation. It is an English article that a US/global investor would **search for, click, and finish reading**.

## 1. Pick the English keyword first
Before translating, decide the one phrase an English speaker would type into Google. Put it in `keyword:`.

| Korean post topic | Bad (literal) | Good (searched) |
|---|---|---|
| SCHD 배당 분석 | "SCHD dividend analysis of 작은 직딩" | `SCHD dividend growth` / `is SCHD a good investment` |
| 엔비디아 3분기 실적 | "Nvidia's third quarter performance review" | `NVDA Q3 2026 earnings` |
| 배당주 vs 성장주 | "Dividend stocks and growth stocks comparison" | `dividend stocks vs growth stocks` |

Rules: use tickers (NVDA, SCHD), "vs", "is X a good buy", "X dividend", "X earnings Q3 2026", "best X ETF". These are how English investors search.

## 2. Front matter checklist
- `title`: ≤ 60 characters, keyword near the start, one hook. e.g. `SCHD vs JEPI: Which Dividend ETF Pays You More?`
- `description`: 120–155 characters, contains the keyword, says what the reader gets.
- **File name = URL**: short, lowercase, keyword words only. `schd-vs-jepi.md` (not `2026-11-22-my-schd-post-translated.md`).
- `strategy`: `[dividend]`, `[growth]` or both — puts the post on the Dividend / Growth hub pages.
- `tickers`, `tags`: 1–3 tags, reuse existing tag names.
- `faq`: 2–4 real questions people ask (check Google's "People also ask"). Answers 1–3 sentences. Can appear as a rich result.
- `youtubeId` / `relatedVideos`: paste the related video URLs (adds VideoObject data → video results).
- `originalUrl`: the Naver post.
- `updatedDate`: set when numbers are refreshed — Google favors fresh financial content.

## 3. Body structure
1. **Quick answer** (2–4 sentences) right under the title — the direct answer to the keyword. This is what Google snippets and AI answers quote.
2. H2 headings phrased the way people search: "What is SCHD's dividend yield?", "Is NVDA overvalued?"
3. Numbers in a table where possible (yield, growth, P/E). Always state "as of <date>".
4. **Key takeaways** bullet list at the end.
5. 600–1,500 words. One idea per paragraph, short sentences.

## 4. Localize, don't translate
- Convert ₩ amounts to $ or drop them; remove Korea-only details (Korean brokers, Korean tax, 환율 discussion) unless the post is about them.
- Use US terms: "brokerage account", "IRA/401(k)" only if relevant, "dividend yield", "payout ratio", "forward P/E".
- Keep the personal voice: "I", "my portfolio", "after work". The ordinary-investor angle is the brand.
- Never invent numbers. Keep figures from the original; if they are stale, mark the date or refresh them.

## 5. Internal links
Link to 1–3 other posts on the site in the body (e.g. "I compared SCHD with VYM [here](/posts/schd-vs-vym/)"). The site also adds "Keep reading" automatically.

## 6. After publishing
- Search Console → URL Inspection → "Request indexing" for the new URL (speeds up the first crawl).
- Share the URL in the YouTube video description and pinned comment — that link also helps ranking.

## 7. Images (IR slides, charts)
- Save to `public/images/posts/<post-slug>/<descriptive-name>.webp` (crop out Korean captions/UI, convert to WebP).
- Insert where the text discusses it, using a `<figure>` with English `alt` text (describe what the chart shows, include the company name and key numbers — Google Images reads this) and a `<figcaption>` that ends with "Source: <Company> <quarter> investor presentation."
- If a slide's numbers differ from the text (e.g. yield at a different date), say so in the caption.
- Set the best image as `cover:` when the post has no video — it becomes the card thumbnail and share preview.
