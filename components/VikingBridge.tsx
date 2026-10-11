import Link from "next/link";
import { TIMELINE_URL, VIKING_URL } from "@/lib/site";

export function VikingBridge({ id = "next-viking" }: { id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-40 rounded-lg border border-line bg-card p-5 sm:p-6">
      <p className="text-[11px] tracking-[0.16em] text-terra">NEXT · 다음 이야기</p>
      <h2 id={`${id}-heading`} className="mt-1 font-serif text-2xl text-ink">
        다음 이야기: 바이킹
      </h2>
      <p className="mt-2 text-sm leading-7 text-ink">
        카롤루스 대제가 서기 800년 황제가 된 세대 다음, 북해 연대기에서 자주 그 뒤를 잇는 칸이 793년 린디스판 습격입니다. 앵글로색슨 연대기는 그 해 노섬브리아의 수도원 습격을 적습니다. 바이킹 시대의 항해, 약탈, 정착은 이어지는 사이트에 둡니다.
      </p>
      <p className="mt-2 text-sm leading-7 text-muted">
        카롤루스가 린디스판을 일으킨 것은 아닙니다. 시간표가 이어질 뿐입니다. 사이트가 막 열리는 중이면 링크가 잠시 비어 있을 수 있습니다.
      </p>
      <ul className="mt-4 flex flex-wrap gap-3 text-sm">
        <li>
          <a href={VIKING_URL} className="rounded-full bg-terra px-4 py-2 text-white hover:bg-terra-deep" target="_blank" rel="noopener noreferrer">
            바이킹이야기 열기
          </a>
        </li>
        <li>
          <a
            href={`${TIMELINE_URL}/events/lindisfarne`}
            className="inline-block rounded-full border border-line bg-bg px-4 py-2 hover:border-terra"
            target="_blank"
            rel="noopener noreferrer"
          >
            나두연표에서 린디스판 보기
          </a>
        </li>
        <li>
          <Link href="/people/charlemagne" className="inline-block rounded-full border border-line bg-bg px-4 py-2 hover:border-terra">
            카롤루스 대제
          </Link>
        </li>
      </ul>
    </section>
  );
}
