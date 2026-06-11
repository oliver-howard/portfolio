import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Sprite } from "./Sprite";
import type { SPRITES } from "./sprites";

interface Cartridge {
  title: string;
  genre: string;
  emblem: keyof typeof SPRITES;
  year: string;
  color: string;
  body: string;
  stack: string[];
  status: "SHIPPED" | "LIVE";
}

const CARTRIDGES: Cartridge[] = [
  {
    title: "Tresaire Ann",
    genre: "Clothing Design Studio",
    emblem: "shirt",
    year: "2024",
    color: "#a855f7",
    body: "Visual identity and digital storefront for a contemporary clothing label — custom commerce on Next.js.",
    stack: ["Next.js", "Sanity", "Vercel"],
    status: "SHIPPED",
  },
  {
    title: "Oliver Howard",
    genre: "Photography Portfolio",
    emblem: "camera",
    year: "2024",
    color: "var(--chip)",
    body: "Editorial monochrome portfolio for a documentary photographer. Sticky hero, custom lightbox, obsessive type.",
    stack: ["React", "Framer Motion", "Cloudinary"],
    status: "SHIPPED",
  },
  {
    title: "Bookrex",
    genre: "Fullstack Systems",
    emblem: "book",
    year: "2025",
    color: "var(--xp)",
    body: "AI-flavored book recommendation platform. Custom recommendation engine, real-time feeds, playful UI.",
    stack: ["Next.js", "PostgreSQL", "OpenAI"],
    status: "LIVE",
  },
];

function CartridgeCard({ c, i }: { c: Cartridge; i: number }) {
  return (
    <Reveal delay={i * 0.08}>
      <div
        className="pcard lift"
        style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
      >
        {/* cartridge top notch */}
        <div style={{ background: "var(--panel-2)", padding: "12px 16px 0" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 10 }}>
            {Array.from({ length: 5 }).map((_, k) => (
              <span
                key={k}
                style={{ width: 22, height: 6, background: "var(--line)", borderRadius: 1 }}
              />
            ))}
          </div>
        </div>

        {/* label sticker */}
        <div
          style={{
            margin: "0 14px",
            border: "3px solid var(--line-bright)",
            borderRadius: 6,
            background: "var(--bg-0)",
            padding: 16,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.18,
              background: `radial-gradient(circle at 80% 20%, var(--ink), transparent 60%)`,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <div>
              <div className="hud" style={{ fontSize: 8, color: c.color }}>
                {c.genre}
              </div>
              <div
                className="hud"
                style={{
                  fontSize: 16,
                  color: "var(--ink)",
                  marginTop: 10,
                  textShadow: "3px 3px 0 var(--shadow-ink)",
                }}
              >
                {c.title}
              </div>
            </div>
            <div
              style={{
                background: "var(--panel)",
                border: "3px solid var(--line-bright)",
                borderRadius: 6,
                padding: 8,
              }}
            >
              <Sprite name={c.emblem} px={5} />
            </div>
          </div>
        </div>

        {/* body */}
        <div
          style={{
            padding: "18px 18px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            flex: 1,
          }}
        >
          <p className="pixel-body" style={{ fontSize: 19, margin: 0 }}>
            {c.body}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {c.stack.map((s) => (
              <span key={s} className="tag" style={{ fontSize: 11 }}>
                {s}
              </span>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "auto",
              paddingTop: 4,
            }}
          >
            <span
              className="hud"
              style={{
                fontSize: 8,
                color: c.status === "LIVE" ? "var(--xp)" : "var(--ink-3)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  background: c.status === "LIVE" ? "var(--xp)" : "var(--ink-3)",
                  marginRight: 6,
                  borderRadius: "50%",
                }}
              />
              {c.status} · {c.year}
            </span>
            <a
              className="btn"
              href="#"
              style={{ padding: "9px 13px", fontSize: 9 }}
              onClick={(e) => e.preventDefault()}
            >
              Load ▶
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="grid-bg" />
      <div className="wrap" style={{ position: "relative" }}>
        <SectionHead
          tag="Select Cartridge"
          title="SELECTED WORKS"
          accent="var(--coin)"
          sub="A curation of engineering-focused digital experiences. Hand-coded front to back."
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: 22,
          }}
        >
          {CARTRIDGES.map((c, i) => (
            <CartridgeCard key={c.title} c={c} i={i} />
          ))}
        </div>

        {/* bonus levels strip */}
        <Reveal delay={0.1}>
          <div
            className="pcard"
            style={{
              marginTop: 24,
              padding: "22px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="hud" style={{ fontSize: 9, color: "var(--ink-3)" }}>
                BONUS LEVELS
              </div>
              <div
                className="pixel-body"
                style={{ fontSize: 22, color: "var(--ink)", marginTop: 6 }}
              >
                Internal tooling, layout experiments &amp; modular React systems.
              </div>
            </div>
            <a
              className="btn btn-blue"
              href="https://github.com/oliver-howard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Sprite name="github" px={3} /> Visit GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
