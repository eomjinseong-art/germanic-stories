import Link from "next/link";
import { CoupangBanner } from "@/components/CoupangBanner";
import { JsonLd } from "@/components/JsonLd";
import { SisterSites } from "@/components/SisterSites";
import { VikingBridge } from "@/components/VikingBridge";
import { chapters } from "@/data/chapters";
import { people } from "@/data/people";
import { tribes } from "@/data/tribes";
import { jsonLd, pageMetadata, websiteLd } from "@/lib/seo";
import { BRAND_LINE, HOME_SECTIONS, ROME_URL, SITE_SUB, SITE_TAGLINE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "홈",
  description: `${SITE_TAGLINE}. ${SITE_SUB}`,
  path: "/",
});

const PATH = [
  { href: "/who", label: "게르만족이라는 이름이 무엇을 묶는지" },
  { href: "/tribes", label: "부족 도감과 도식 지도" },
  { href: "/chronicle/teutoburg", label: "서기 9년 토이토부르크 숲" },
  { href: "/people/arminius", label: "아르미니우스와 헤르만이라는 후대 이름" },
  { href: "/chronicle/sack-410", label: "410년 로마, 멸망과는 다른 해" },
  { href: "/kingdoms/franks", label: "클로비스에서 카롤루스 대제까지" },
  { href: "/barbarians", label: "드라마 바바리안에서 사료와 다른 점" },
  { href: "/kingdoms#next-viking", label: "793년 린디스판, 다음 이야기 바이킹" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8">
      <JsonLd data={jsonLd([websiteLd(`${SITE_TAGLINE}. ${SITE_SUB}`)])} />
      <section className="py-12 text-center sm:py-16">
        <p className="text-xs tracking-[0.3em] text-terra">GERMANIC STORIES</p>
        <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">게르만이야기</h1>
        <p className="mt-4 text-lg text-muted">{SITE_TAGLINE}</p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{SITE_SUB}</p>
        <p className="mt-3 text-xs text-terra">{BRAND_LINE}</p>
        <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-muted">
          부족 {tribes.length}개, 연대기 {chapters.length}장, 인물 {people.length}명. 전설은 전설이라고 적고, 훈족 아틸라는 게르만족으로 세지 않습니다.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <Link href="/chronicle/teutoburg" className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep">
            토이토부르크부터 보기
          </Link>
          <a href={`${ROME_URL}/rulers/augustus`} className="rounded-full border border-line bg-card px-4 py-2 hover:border-terra" target="_blank" rel="noopener noreferrer">
            로마이야기에서 아우구스투스
          </a>
        </div>
      </section>

      <div className="dentil opacity-50" aria-hidden />

      <section className="mt-10" aria-labelledby="door-heading">
        <h2 id="door-heading" className="font-serif text-2xl text-ink">
          세 개의 문
        </h2>
        <p className="mt-1 text-sm text-muted">게르만 역사를 한 나라의 통사로 외우면 어렵습니다. 먼저 이 세 칸만 나누세요.</p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <Link href="/who" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">WHO</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">이름과 시선</h3>
            <p className="mt-1 text-xs text-muted">게르만 · 바바리안</p>
            <p className="mt-3 text-sm leading-6 text-muted">로마가 묶어서 부른 여러 부족입니다. 바바리안은 그들의 자칭이 아닙니다.</p>
          </Link>
          <Link href="/chronicle/teutoburg" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">9 CE</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">숲의 매복</h3>
            <p className="mt-1 text-xs text-muted">토이토부르크</p>
            <p className="mt-3 text-sm leading-6 text-muted">아르미니우스와 바루스. 엘베까지의 정복이 멈춘 해입니다. 날짜의 일은 알지 못합니다.</p>
          </Link>
          <Link href="/kingdoms" className="rounded-lg border border-line bg-card p-5 hover:border-terra">
            <p className="text-[11px] tracking-[0.16em] text-terra">AFTER ROME</p>
            <h3 className="mt-1 font-serif text-2xl text-ink">왕국들</h3>
            <p className="mt-1 text-xs text-muted">5–9세기</p>
            <p className="mt-3 text-sm leading-6 text-muted">고트, 반달, 프랑크, 앵글로색슨, 랑고바르드. 끝은 793년 린디스판으로 잇습니다.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="font-serif text-2xl text-ink">
          모든 길
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {HOME_SECTIONS.map((section, index) => (
            <Link key={section.href} href={section.href} className="group rounded-lg border border-line bg-card p-5 transition hover:border-terra hover:shadow-sm">
              <p className="font-serif text-xs text-terra">
                {String(index + 1).padStart(2, "0")} · {section.en}
              </p>
              <h3 className="mt-1 font-serif text-xl text-ink group-hover:text-terra">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{section.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl text-ink">처음 읽는 순서</h2>
          <ol className="mt-4 space-y-2 text-sm">
            {PATH.map((item, index) => (
              <li key={item.href}>
                <Link href={item.href} className="text-laurel underline decoration-line underline-offset-4 hover:text-terra">
                  {index + 1}. {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <SisterSites variant="home" />
      </section>

      <div className="mt-12">
        <VikingBridge />
      </div>
      <CoupangBanner />
    </div>
  );
}
