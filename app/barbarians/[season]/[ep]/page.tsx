import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SmartLink } from "@/components/SmartLink";
import { CHARACTERS, EPISODES, PLACES, TRUTH_LABEL, episodePath, seasonPath } from "@/data/barbarians";
import { breadcrumbLd, canonicalUrl, clip, jsonLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return EPISODES.map((e) => ({ season: `s${e.season}`, ep: `e${e.ep}` }));
}

function find(season: string, ep: string) {
  const i = EPISODES.findIndex((e) => `s${e.season}` === season && `e${e.ep}` === ep);
  return i < 0 ? null : { e: EPISODES[i], prev: EPISODES[i - 1], next: EPISODES[i + 1] };
}

export async function generateMetadata({ params }: { params: Promise<{ season: string; ep: string }> }) {
  const p = await params;
  const f = find(p.season, p.ep);
  if (!f) return {};
  const { e } = f;
  return pageMetadata({
    title: `바바리안 시즌 ${e.season} ${e.ep}화 ${e.ko} 줄거리·결말`,
    description: clip(`넷플릭스 바바리안 시즌 ${e.season} ${e.ep}화 '${e.ko}'(${e.de} / ${e.en}) 줄거리와 결말, 역사와 다른 점. ${e.plot[0]}`),
    path: episodePath(e),
  });
}

const truthClass = { real: "border-[#2f4a3c] text-[#2f4a3c]", dramatized: "border-[#a6843d] text-[#8a6a2a]", fictional: "border-[#a34732] text-[#a34732]" } as const;

export default async function EpisodePage({ params }: { params: Promise<{ season: string; ep: string }> }) {
  const p = await params;
  const f = find(p.season, p.ep);
  if (!f) notFound();
  const { e, prev, next } = f;
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "바바리안", path: "/barbarians" },
            { name: `시즌 ${e.season}`, path: seasonPath(e.season) },
            { name: `${e.ep}화`, path: episodePath(e) },
          ]),
          {
            "@type": "TVEpisode",
            name: e.en,
            alternateName: [e.de, e.ko],
            episodeNumber: e.ep,
            url: canonicalUrl(episodePath(e)),
            partOfSeason: { "@type": "TVSeason", seasonNumber: e.season },
            partOfSeries: { "@type": "TVSeries", name: "Barbarians", alternateName: ["Barbaren", "바바리안"] },
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { href: "/", label: "홈" },
          { href: "/barbarians", label: "바바리안" },
          { href: seasonPath(e.season), label: `시즌 ${e.season}` },
          { label: `${e.ep}화` },
        ]}
      />
      <PageHead kicker={`SEASON ${e.season} · EPISODE ${e.ep} · 전체 ${e.overall}화`} title={e.ko} />
      <p className="mt-2 text-sm text-muted">
        <span lang="de">{e.de}</span> (독일어 원제) · <span lang="en">{e.en}</span> (영어) · {e.ko} (넷플릭스 한국어)
      </p>
      <p className="mt-2 text-xs text-muted">결말까지 모두 적었습니다.</p>

      <section className="mt-8" aria-labelledby="plot">
        <h2 id="plot" className="font-serif text-2xl text-ink">줄거리</h2>
        <div className="mt-3 space-y-3 text-sm leading-7">
          {e.plot.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <h3 className="mt-5 font-serif text-lg text-ink">결말</h3>
        <p className="mt-1 text-sm leading-7">{e.ending}</p>
      </section>

      <section className="mt-10" aria-labelledby="hist">
        <h2 id="hist" className="font-serif text-2xl text-ink">역사 vs 드라마</h2>
        <div className="mt-3 space-y-3">
          {e.history.map((h) => (
            <div key={h.drama} className="grid gap-2 rounded-lg border border-line bg-card p-4 text-sm leading-7 sm:grid-cols-2">
              <p>
                <span className="block text-xs text-terra">드라마</span>
                {h.drama}
              </p>
              <p>
                <span className="block text-xs text-[#2f4a3c]">역사</span>
                {h.real}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="cast">
        <h2 id="cast" className="font-serif text-2xl text-ink">이 화의 인물</h2>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {e.cast.map((k) => {
            const c = CHARACTERS[k];
            return (
              <li key={k} className="rounded-lg border border-line bg-card p-4 text-sm leading-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-serif text-base text-ink">{c.ko}</p>
                  <span className={`rounded-full border px-2 py-0.5 text-xs ${truthClass[c.truth]}`}>{TRUTH_LABEL[c.truth]}</span>
                </div>
                <p className="text-xs text-muted" lang="en">{c.en}</p>
                <p className="mt-1">{c.note}</p>
                <p className="mt-2 flex flex-wrap gap-3 text-xs">
                  <Link href={c.tree} className="text-terra hover:underline">
                    가계도
                  </Link>
                  {"page" in c && c.page ? (
                    <Link href={c.page} className="text-terra hover:underline">
                      인물 페이지
                    </Link>
                  ) : null}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="places">
        <h2 id="places" className="font-serif text-2xl text-ink">장소</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7">
          {e.places.map((k) => {
            const pl = PLACES[k];
            return (
              <li key={k}>
                {"href" in pl && pl.href ? (
                  <SmartLink href={pl.href} className="font-serif text-ink hover:text-terra">
                    {pl.ko}
                  </SmartLink>
                ) : (
                  <span className="font-serif text-ink">{pl.ko}</span>
                )}
                <span className="text-muted"> — {pl.note}</span>
              </li>
            );
          })}
        </ul>
        <p className="mt-2 text-xs text-muted">
          부족 위치는 <Link href="/tribes" className="text-terra hover:underline">부족 지도</Link>에서 볼 수 있습니다.
        </p>
      </section>

      <section className="mt-10" aria-labelledby="gear">
        <h2 id="gear" className="font-serif text-2xl text-ink">로마 vs 게르만 장비</h2>
        <dl className="mt-3 grid gap-3 text-sm leading-7 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-card p-4">
            <dt className="text-xs text-terra">로마</dt>
            <dd>{e.gear.rome}</dd>
          </div>
          <div className="rounded-lg border border-line bg-card p-4">
            <dt className="text-xs text-[#2f4a3c]">게르만</dt>
            <dd>{e.gear.germanic}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-10" aria-labelledby="scene">
        <h2 id="scene" className="font-serif text-2xl text-ink">기억할 장면</h2>
        <p className="mt-3 rounded-lg border-l-4 border-terra bg-card p-4 text-sm leading-7">{e.scene}</p>
      </section>

      <nav aria-label="이전 다음 화" className="mt-10 flex justify-between gap-3 text-sm">
        {prev ? (
          <Link href={episodePath(prev)} className="rounded-full border border-line px-3 py-1.5 hover:border-terra hover:text-terra">
            ← S{prev.season} {prev.ep}화 {prev.ko}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={episodePath(next)} className="rounded-full border border-line px-3 py-1.5 hover:border-terra hover:text-terra">
            S{next.season} {next.ep}화 {next.ko} →
          </Link>
        ) : null}
      </nav>

      <RelatedLinks
        links={[
          { href: seasonPath(e.season), label: `시즌 ${e.season} 목록` },
          { href: "/barbarians#relations", label: "1–12화 관계 변화" },
          e.season === 1 ? { href: "/chronicle/teutoburg", label: "토이토부르크 사료" } : { href: "/chronicle/germanicus", label: "게르마니쿠스 원정" },
          { href: "/family-tree?tree=teutoburg&focus=arminius", label: "가계도" },
        ]}
      />
    </div>
  );
}
