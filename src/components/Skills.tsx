import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

interface InventoryItem {
  name: string;
  cat: string;
  rar: string;
  lvl: string;
}

const INVENTORY: InventoryItem[] = [
  { name: "React", cat: "FRONTEND", rar: "var(--chip)", lvl: "93" },
  { name: "Next.js", cat: "FRONTEND", rar: "var(--chip)", lvl: "92" },
  { name: "TypeScript", cat: "FRONTEND", rar: "var(--chip)", lvl: "94" },
  { name: "Tailwind", cat: "FRONTEND", rar: "var(--chip)", lvl: "96" },
  { name: "HTML/CSS", cat: "FRONTEND", rar: "var(--chip)", lvl: "90" },
  { name: "Python", cat: "BACKEND", rar: "var(--xp)", lvl: "95" },
  { name: "Node.js", cat: "BACKEND", rar: "var(--xp)", lvl: "85" },
  { name: "SQL", cat: "BACKEND", rar: "var(--xp)", lvl: "80" },
  { name: "PyTorch", cat: "AI / ML", rar: "var(--coin)", lvl: "75" },
  { name: "scikit-learn", cat: "AI / ML", rar: "var(--coin)", lvl: "85" },
  { name: "OpenAI API", cat: "AI / ML", rar: "var(--coin)", lvl: "82" },
  { name: "Vercel", cat: "TOOLING", rar: "var(--ink-2)", lvl: "92" },
  { name: "Vite", cat: "TOOLING", rar: "var(--ink-2)", lvl: "90" },
];

function InvSlot({ it }: { it: InventoryItem }) {
  return (
    <div
      className="pcard lift"
      style={{ padding: 14, display: "flex", flexDirection: "column", gap: 10, cursor: "default" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          style={{
            width: 16,
            height: 16,
            background: it.rar,
            boxShadow: "2px 2px 0 var(--shadow-ink)",
            display: "inline-block",
          }}
        />
        <span className="hud" style={{ fontSize: 8, color: "var(--ink-3)" }}>
          {it.cat}
        </span>
      </div>
      <div className="pixel-body" style={{ fontSize: 21, color: "var(--ink)", lineHeight: 1.1 }}>
        {it.name}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span className="hud" style={{ fontSize: 8, color: it.rar }}>
          LV {it.lvl}
        </span>
        <div className="meter" style={{ color: it.rar, flex: 1 }}>
          <span style={{ width: `${it.lvl}%` }} />
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.18))" }}
    >
      <div className="wrap">
        <SectionHead
          tag="Inventory"
          title="LOADOUT"
          accent="var(--chip)"
          sub=""
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))",
            gap: 16,
          }}
        >
          {INVENTORY.map((it, i) => (
            <Reveal key={it.name} delay={(i % 4) * 0.05}>
              <InvSlot it={it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
