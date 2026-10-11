const early = [
  { id: "batavi", label: "바타비", x: 168, y: 168 },
  { id: "bructeri", label: "브룩테리", x: 250, y: 150 },
  { id: "cherusci", label: "케루스키", x: 330, y: 188 },
  { id: "chatti", label: "카티", x: 230, y: 230 },
  { id: "suebi", label: "수에비", x: 300, y: 250 },
  { id: "alemanni", label: "알라만니", x: 210, y: 300 },
  { id: "marcomanni", label: "마르코만니", x: 400, y: 268 },
  { id: "quadi", label: "콰디", x: 455, y: 318 },
  { id: "angles", label: "앵글", x: 300, y: 78 },
  { id: "saxons", label: "색슨", x: 360, y: 118 },
  { id: "cimbri", label: "킴브리·튜톤?", x: 250, y: 48 },
];

const later = [
  { id: "franks", label: "프랑크", x: 150, y: 620 },
  { id: "burgundians", label: "부르군트", x: 250, y: 690 },
  { id: "visigoths", label: "서고트", x: 90, y: 760 },
  { id: "ostrogoths", label: "동고트", x: 310, y: 760 },
  { id: "lombards", label: "랑고바르드", x: 300, y: 820 },
  { id: "vandals", label: "반달", x: 250, y: 900 },
  { id: "angles", label: "앵글·색슨", x: 145, y: 560 },
  { id: "goths", label: "고트, 흑해 쪽", x: 500, y: 640 },
];

function Dots({ items }: { items: { id: string; label: string; x: number; y: number }[] }) {
  return (
    <>
      {items.map((item) => (
        <a key={`${item.id}-${item.x}`} href={`#${item.id}`}>
          <circle cx={item.x} cy={item.y} r="5" fill="#a34732" />
          <text x={item.x + 10} y={item.y + 4} fill="#241c16" fontSize="13">
            {item.label}
          </text>
        </a>
      ))}
    </>
  );
}

export function TribeMap() {
  return (
    <figure className="mt-8">
      <svg viewBox="0 0 640 980" role="img" aria-labelledby="tribe-map-title tribe-map-desc" className="h-auto w-full rounded-lg border border-line bg-[#e7efe6]">
        <title id="tribe-map-title">게르만 세계 도식 지도</title>
        <desc id="tribe-map-desc">
          위는 1–2세기에 라인 강과 다뉴브 강 근처에서 자주 이야기되는 자리, 아래는 5–6세기 왕국이 자리 잡은 서쪽 지중해의 도식입니다. 한 해의 국경이 아니고, 거리와 면적은 실제 지도가 아닙니다.
        </desc>
        <rect width="640" height="980" fill="#e7efe6" />
        <text x="24" y="32" fill="#a34732" fontSize="13" letterSpacing="1.5">
          1–2세기 · 라인 동쪽
        </text>
        <ellipse cx="150" cy="210" rx="78" ry="120" fill="#d5e2d4" stroke="#2f4a3c" />
        <text x="112" y="200" fill="#2f4a3c" fontSize="13">
          갈리아
        </text>
        <text x="118" y="218" fill="#6e6258" fontSize="11">
          로마 쪽
        </text>
        <path d="M250 70 V390" stroke="#3d6f8a" strokeWidth="4" fill="none" />
        <text x="256" y="92" fill="#3d6f8a" fontSize="12">
          라인
        </text>
        <path d="M250 330 C340 350 430 390 560 400" stroke="#3d6f8a" strokeWidth="3" fill="none" />
        <text x="500" y="392" fill="#3d6f8a" fontSize="12">
          다뉴브
        </text>
        <path d="M430 70 V300" stroke="#7f93a0" strokeWidth="2" strokeDasharray="5 4" fill="none" />
        <text x="438" y="130" fill="#6e6258" fontSize="11">
          베저·엘베 쪽
        </text>
        <rect x="70" y="70" width="36" height="52" rx="8" fill="#d7e3ea" stroke="#3d6f8a" />
        <text x="74" y="140" fill="#6e6258" fontSize="11">
          브리타니아
        </text>
        <Dots items={early} />
        <text x="24" y="450" fill="#6e6258" fontSize="12">
          물음표는 유틀란트 근처라는 옛 추측이 불확실하다는 표시입니다.
        </text>

        <text x="24" y="510" fill="#a34732" fontSize="13" letterSpacing="1.5">
          5–6세기 · 왕국의 자리 (도식)
        </text>
        <rect x="40" y="540" width="560" height="400" rx="16" fill="#fbf7f2" stroke="#e4d9cb" />
        <path d="M70 700 H250" stroke="#3d6f8a" strokeWidth="2" />
        <text x="70" y="692" fill="#3d6f8a" fontSize="11">
          갈리아·라인
        </text>
        <ellipse cx="120" cy="780" rx="70" ry="46" fill="#efe4d4" stroke="#a6843d" />
        <text x="96" y="784" fill="#6e6258" fontSize="11">
          히스파니아
        </text>
        <path d="M300 740 C330 790 300 840 340 860" stroke="#c4b39a" strokeWidth="8" fill="none" strokeLinecap="round" />
        <text x="350" y="800" fill="#6e6258" fontSize="11">
          이탈리아
        </text>
        <rect x="160" y="880" width="220" height="36" rx="8" fill="#efe4d4" stroke="#a6843d" />
        <text x="230" y="902" fill="#6e6258" fontSize="11">
          아프리카
        </text>
        <ellipse cx="520" cy="650" rx="48" ry="28" fill="#d7e3ea" stroke="#3d6f8a" />
        <text x="498" y="654" fill="#3d6f8a" fontSize="11">
          흑해
        </text>
        <Dots items={later} />
      </svg>
      <figcaption className="mt-2 text-xs leading-5 text-muted">
        손으로 그린 도식입니다. 외부 지도 이미지는 쓰지 않았습니다. 점을 누르면 아래 도감으로 내려갑니다. 고트는 흑해 북쪽에서 갈라진 뒤 서고트·동고트가 되고, 반달은 아프리카에, 랑고바르드는 동고트보다 늦은 세기에 이탈리아에 들어옵니다. 한 그림에 그린 것은 자리를 기억하라는 뜻이지, 그들이 동시에 그 땅을 나누어 가졌다는 뜻이 아닙니다.
      </figcaption>
    </figure>
  );
}
