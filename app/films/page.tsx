import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FilmCard } from "@/components/FilmCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { SisterStrip } from "@/components/SisterSites";
import { films } from "@/data/films";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CHECKLIST_URL, OTHER_FILM_PAGES, TIMELINE_URL } from "@/lib/site";
import { NadooHubFilmsLink } from "@/components/NadooHubLink";

export const metadata = pageMetadata({
  title: "영화·드라마",
  description: "바바리안, 글래디에이터, 로마제국의 멸망, 나 클라우디우스, 아틸라, 라스트 리전, 킹 아더, 라스트 킹덤. 실존 제목만 적고, 역사와 창작을 나눕니다.",
  path: "/films",
});

export default function FilmsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "영화·드라마", path: "/films" },
          ]),
          itemListLd(
            "게르만 관련 영화",
            "/films",
            films.map((film) => ({ name: film.titleKo, path: `/films#${film.slug}` })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { label: "영화·드라마" }]} />
      <PageHead
        kicker="FILMS"
        title="영화·드라마"
        lead="제목은 실제로 공개된 작품만 적었습니다. 나두연표의 영화 목록에 있는 작품은 그 목록과 같은 앵커를 씁니다. 각 카드는 줄거리와, 역사와 다른 점을 나눕니다. 스트리밍 링크와 불법 영상은 없습니다."
      />
      <p className="mt-4 text-sm">
        <a href={CHECKLIST_URL} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel="noopener noreferrer">
          본 영화 체크하기
        </a>
        <span className="ml-2 text-xs text-muted">역사 목록 · movie checklist</span>
      </p>
      <p className="mt-2 text-xs leading-5 text-muted">
        앵커가 겹치는 작품의 원 목록은{" "}
        <a href={`${TIMELINE_URL}/films.json`} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra" target="_blank" rel="noopener noreferrer">
          나두연표 films.json
        </a>
        입니다. 바바리안과 2001년 아틸라는 그 목록에 아직 없습니다.
      </p>
      <ul className="mt-8 space-y-3">
        {films.map((film) => (
          <FilmCard key={film.slug} film={film} />
        ))}
      </ul>
      <SisterStrip title="다른 사이트의 영화" en="Films on sister sites" links={OTHER_FILM_PAGES} />
      <NadooHubFilmsLink />
    </div>
  );
}
