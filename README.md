# 게르만이야기 (Germanic Stories)

로마와 맞선 게르만족이 어렵게 느껴지는 어른을 위해, 한국어로 짧게 정리한 정적 사이트입니다. 영어 제목은 짧게 두고, 설명은 한국어로 씁니다.

나두 — 나의 모든 일상을 AI와 함께

나두 역사·신화로 이어지는 자매 사이트는 나두신화, 일리아스이야기, 그리스이야기, 로마이야기, 이집트이야기, 페르시아이야기, 더 초즌 · 성경, 철학이야기, 대한민국이야기, 나두연표, 나두 허브입니다. 게르만이야기는 라인 강 동쪽의 부족과 서로마 뒤의 왕국을 다룹니다. 다음 이야기의 바이킹은 [viking-stories.vercel.app](https://viking-stories.vercel.app)에서 잇습니다.

## 메뉴

- **홈** `/`
- **게르만족** `/who` — 이름, 언어, 생활, 민회, 신앙, 바바리안이라는 말
- **부족·지도** `/tribes` — 도감과 도식 지도
- **연대기** `/chronicle`, `/chronicle/[slug]` — 킴브리 전쟁부터 476년까지
- **왕국** `/kingdoms`, `/kingdoms/[slug]` — 동고트, 서고트, 반달, 프랑크, 앵글로색슨, 랑고바르드
- **인물** `/people`, `/people/[slug]`
- **관계도** `/family-tree` — 아르미니우스 가문, 로마 쪽, 메로빙에서 카롤링
- **바바리안** `/barbarians` — 넷플릭스 드라마와 사료의 차이
- **영화** `/films` — 실제 작품만. 불법 영상 링크 없음
- **출처** `/sources`

글의 꼴은 한 줄 요약, 핵심 세 가지, 펼치는 「조금만 더」입니다. 전설과 역사는 배지로 나눕니다.

## 개발

```bash
npm ci
npm run dev
npm run typecheck
npm run build
```

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · TypeScript. 페이지는 빌드 때 정적으로 생성됩니다.

콘텐츠는 `data/`에 있습니다. `NEXT_PUBLIC_SITE_URL`의 기본값은 `https://germanic-stories.vercel.app`입니다.

## 적는 기준

고대 기록의 이름과 위치만 밝히고, 없는 인용문을 만들지 않습니다. 현대 책의 문장을 번역해 붙이지 않습니다. 영화 제목은 실제 공개 제목을 쓰고, 작품을 볼 수 있는 불법 사이트는 안내하지 않습니다.
