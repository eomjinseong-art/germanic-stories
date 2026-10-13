import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PageHead } from "@/components/PageHead";
import { RelatedLinks } from "@/components/RelatedLinks";
import { EPISODES, SEASONS, episodePath, seasonPath } from "@/data/barbarians";
import { breadcrumbLd, itemListLd, jsonLd, pageMetadata } from "@/lib/seo";
import { CoupangCard } from "@/components/CoupangCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return SEASONS.map((s) => ({ season: `s${s.season}` }));
}

function find(param: string) {
  return SEASONS.find((s) => `s${s.season}` === param);
}

export async function generateMetadata({ params }: { params: Promise<{ season: string }> }) {
  const s = find((await params).season);
  if (!s) return {};
  return pageMetadata({
    title: `바바리안 시즌 ${s.season} 회차별 줄거리`,
    description: `넷플릭스 바바리안(Barbaren) 시즌 ${s.season}(${s.year}) 6편의 줄거리와 결말, 역사와 다른 점. ${s.lead}`,
    path: seasonPath(s.season),
  });
}

export default async function SeasonPage({ params }: { params: Promise<{ season: string }> }) {
  const s = find((await params).season);
  if (!s) notFound();
  const eps = EPISODES.filter((e) => e.season === s.season);
  const other = SEASONS.find((x) => x.season !== s.season)!;
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "바바리안", path: "/barbarians" },
            { name: `시즌 ${s.season}`, path: seasonPath(s.season) },
          ]),
          itemListLd(
            `바바리안 시즌 ${s.season}`,
            seasonPath(s.season),
            eps.map((e) => ({ name: `${e.ep}화 ${e.ko}`, path: episodePath(e) })),
          ),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/barbarians", label: "바바리안" }, { label: `시즌 ${s.season}` }]} />
      <PageHead kicker={`BARBARIANS · SEASON ${s.season} · ${s.year}`} title={s.title} lead={`${s.premiere} 공개 · 6편. ${s.lead} 이 페이지는 결말까지 모두 적습니다.`} />

      <section className="mt-8" aria-labelledby="arc">
        <h2 id="arc" className="font-serif text-2xl text-ink">큰 흐름</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7">
          {s.arc.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="eps">
        <h2 id="eps" className="font-serif text-2xl text-ink">회차</h2>
        <ol className="mt-3 space-y-3">
          {eps.map((e) => (
            <li key={e.ep} className="rounded-lg border border-line bg-card p-4">
              <Link href={episodePath(e)} className="group block">
                <p className="text-xs text-muted">
                  {e.ep}화 · 전체 {e.overall}화
                </p>
                <p className="font-serif text-lg text-ink group-hover:text-terra">{e.ko}</p>
                <p className="text-xs text-muted" lang="de">
                  {e.de} · <span lang="en">{e.en}</span>
                </p>
                <p className="mt-2 text-sm leading-7">{e.ending}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <CoupangCard />
      <section className="mt-10" aria-labelledby="after">
        <h2 id="after" className="font-serif text-2xl text-ink">{s.after.title}</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
          {s.after.items.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <RelatedLinks
        links={[
          ...s.links,
          { href: seasonPath(other.season), label: `시즌 ${other.season}` },
          { href: "/barbarians#relations", label: "1–12화 관계 변화" },
        ]}
      />
    </div>
  );
}
