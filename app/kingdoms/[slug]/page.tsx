import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { KeyPoints } from "@/components/KeyPoints";
import { KindBadge } from "@/components/KindBadge";
import { More } from "@/components/More";
import { Pager } from "@/components/Pager";
import { RelatedFilms } from "@/components/FilmCard";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Rich } from "@/components/Rich";
import { SourceList } from "@/components/SourceList";
import { VikingBridge } from "@/components/VikingBridge";
import { kingdomBySlug, kingdoms } from "@/data/kingdoms";
import { articleLd, breadcrumbLd, jsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return kingdoms.map((kingdom) => ({ slug: kingdom.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kingdom = kingdomBySlug(slug);
  if (!kingdom) return {};
  return pageMetadata({
    title: `${kingdom.title} (${kingdom.en})`,
    description: `${kingdom.title}(${kingdom.years}). ${kingdom.summary}`,
    path: `/kingdoms/${kingdom.slug}`,
    type: "article",
  });
}

export default async function KingdomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kingdom = kingdomBySlug(slug);
  if (!kingdom) notFound();
  const index = kingdoms.findIndex((item) => item.slug === kingdom.slug);
  const prev = kingdoms[index - 1];
  const next = kingdoms[index + 1];
  const path = `/kingdoms/${kingdom.slug}`;
  const showBridge = kingdom.slug === "franks" || kingdom.slug === "anglo-saxons";

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd
        data={jsonLd([
          breadcrumbLd([
            { name: "홈", path: "/" },
            { name: "왕국", path: "/kingdoms" },
            { name: kingdom.title, path },
          ]),
          articleLd({ headline: kingdom.title, description: kingdom.summary, path, about: [kingdom.en] }),
        ])}
      />
      <Breadcrumbs items={[{ href: "/", label: "홈" }, { href: "/kingdoms", label: "왕국" }, { label: kingdom.title }]} />
      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs tracking-[0.2em] text-terra">{kingdom.en}</p>
          <KindBadge kind={kingdom.kind} />
        </div>
        <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{kingdom.title}</h1>
        <p className="mt-2 text-sm text-muted">{kingdom.years}</p>
        <p className="mt-3 text-base leading-8">
          <Rich text={kingdom.summary} />
        </p>
      </header>
      <KeyPoints items={kingdom.points} />
      {kingdom.more?.length ? (
        <More>
          {kingdom.more.map((paragraph) => (
            <p key={paragraph}>
              <Rich text={paragraph} />
            </p>
          ))}
        </More>
      ) : null}
      <RelatedLinks links={kingdom.related} />
      {kingdom.filmSlugs.length ? (
        <RelatedFilms slugs={kingdom.filmSlugs} />
      ) : (
        <p className="mt-8 text-sm leading-7 text-muted">
          이 왕국을 사건 그대로 다룬 극은 목록의 중심에 두지 않았습니다.{" "}
          <Link href="/films" className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
            영화·드라마
          </Link>
          에서 시대가 가까운 작품만 골랐습니다.
        </p>
      )}
      {showBridge ? (
        <div className="mt-10">
          <VikingBridge />
        </div>
      ) : null}
      <SourceList sources={kingdom.sources} />
      <Pager
        prev={prev ? { href: `/kingdoms/${prev.slug}`, label: prev.title } : undefined}
        next={next ? { href: `/kingdoms/${next.slug}`, label: next.title } : undefined}
      />
    </article>
  );
}
