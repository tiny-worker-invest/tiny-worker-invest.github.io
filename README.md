# 영어 미국주식 블로그 (Astro 스타터)

네이버 블로그·유튜브 콘텐츠를 영어로 다시 게시하기 위한 정적 웹사이트입니다. 호스팅비 0원(GitHub Pages / Cloudflare Pages / Netlify 무료), 도메인만 연 1.5~2만 원 정도입니다.

## 들어있는 것
- 글 목록 / 글 상세 / 태그 / About / RSS / sitemap / robots.txt
- SEO 기본: title·description, canonical, Open Graph, 구조화 데이터(BlogPosting, 티커 정보)
- 한국어 원문 링크(`originalUrl`) → 원문 연결 + hreflang
- 유튜브 영상 임베드(`youtubeId`) + 썸네일을 공유 이미지로 자동 사용
- 모든 글 하단 유튜브 구독·뉴스레터 CTA, 투자 면책 문구
- 다크 모드, 모바일 대응

## 처음 한 번만
1. `src/site.config.ts`에서 사이트 이름, 도메인, 유튜브·네이버 주소를 바꿉니다.
2. `src/pages/about.astro` 소개글을 본인 말로 고칩니다.
3. `src/content/posts/` 안의 샘플 글 2개는 지웁니다.

## 글 올리는 방법
`src/content/posts/`에 `.md` 파일 하나 = 글 하나. 파일 이름이 주소가 됩니다(예: `nvda-q3-earnings.md` → `/posts/nvda-q3-earnings/`).

```md
---
title: "NVIDIA Q3 Earnings: 3 Numbers That Matter"
description: "구글 검색결과에 보일 1~2문장 요약 (170자 이내)"
pubDate: 2026-11-22
tickers: [NVDA]
tags: [earnings, AI]
youtubeId: "https://youtu.be/..."   # 선택: 대표 영상, 글 맨 위에 표시 (주소 그대로 붙여넣기)
relatedVideos:                       # 선택: 관련 영상 여러 개, 글 아래 "Related videos"에 표시
  - "https://www.youtube.com/watch?v=..."
originalUrl: "https://blog.naver.com/..."   # 선택: 한국어 원문
---

본문 (마크다운)
```

## 로컬 미리보기
```
npm install
npm run dev      # http://localhost:4321
```

## 배포 (GitHub Pages)
1. GitHub에 새 저장소를 만들고 이 폴더를 올립니다.
2. 저장소 Settings → Pages → Source를 **GitHub Actions**로 바꿉니다.
3. `main`에 푸시할 때마다 자동 배포됩니다 (`.github/workflows/deploy.yml`).
   - 커스텀 도메인 없이 `https://아이디.github.io/저장소명/`을 쓰면 `site.config.ts`의 `base`를 `'/저장소명/'`으로 바꾸세요.

## 배포 후 할 일
- Google Search Console에 사이트 등록 → `sitemap-index.xml` 제출
- Bing Webmaster Tools도 등록 (가져오기 한 번이면 끝)

## 번역 워크플로 (한국어 분석글 → 영어 글)
1. 네이버 글 주소나 본문을 Claude에게 붙여넣고 "영어 글로 만들어줘"라고 요청합니다.
2. Claude가 직역이 아니라 **미국 독자용으로 다듬은** 영어 글을 위 형식의 `.md` 파일로 만들어 줍니다.
   - 원화 표기·한국 증권사/세금 이야기 → 달러 기준, 일반 투자자 관점으로 정리
   - 숫자(실적, 주가, 날짜)는 원문 그대로 유지하고, 오래된 글은 "as of 날짜"를 붙임
   - 제목·description·소제목은 영어 검색어 기준으로 다시 작성 (예: "NVDA earnings Q3 2026")
   - 맨 위에 "Quick answer" 요약, 맨 아래 "Key takeaways"를 넣어 검색·AI 답변에 잘 걸리게 함
   - 같은 주제의 유튜브 영상 주소를 함께 주면 대표 영상은 맨 위, 나머지는 글 아래에 넣어 줌. 영상 내용이 글과 다르면 영상 요약 문단도 추가
3. 파일을 `src/content/posts/`에 넣고 푸시하면 끝.

추천 순서: 조회수 높았던 글, 시간이 지나도 유효한 글(기업 분석·ETF 비교)부터 10~20개 먼저 옮기고, 이후엔 새 글을 쓸 때마다 영어판을 같이 올리세요.
