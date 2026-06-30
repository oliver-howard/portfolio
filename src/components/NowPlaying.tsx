import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

interface Quest {
  t: string;
  d: string;
  pct: number;
  c: string;
}

// TODO: update current projects
const QUESTS: Quest[] = [
  { t: "Commonplace (Social Blog)", d: "Main quest", pct: 90, c: "var(--chip)" },
  { t: "Pitch - adding custom tuning features (expanding beyond EADGBE)", d: "Main quest", pct: 10, c: "var(--xp)" },
];

export function NowPlaying() {
  return (
    <section
      id="now"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.18))" }}
    >
      <div className="wrap">
        <SectionHead
          tag="Now Playing"
          title="CURRENT PROJECTS"
          accent="var(--xp)"
          sub="What I'm building now."
        />
        <div className="pcard" style={{ padding: "10px 8px" }}>
          {QUESTS.map((q, i) => (
            <Reveal key={q.t} delay={i * 0.06}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: 18,
                  borderBottom:
                    i < QUESTS.length - 1 ? "3px solid var(--line)" : "none",
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    background: q.c,
                    boxShadow: "2px 2px 0 var(--shadow-ink)",
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 14,
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      className="pixel-body"
                      style={{ fontSize: 21, color: "var(--ink)", minWidth: 0 }}
                    >
                      {q.t}
                    </span>
                    <span
                      className="hud"
                      style={{
                        fontSize: 8,
                        color: "var(--ink-3)",
                        flexShrink: 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {q.d}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}
                  >
                    <div className="meter" style={{ color: q.c, flex: 1 }}>
                      <span style={{ width: `${q.pct}%` }} />
                    </div>
                    <span
                      className="hud"
                      style={{
                        fontSize: 9,
                        color: q.c,
                        flexShrink: 0,
                        width: 40,
                        textAlign: "right",
                      }}
                    >
                      {q.pct}%
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
