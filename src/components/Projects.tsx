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
  href: string;
}


const CARTRIDGES: Cartridge[] = [
  {
    title: "The Society",
    genre: "Fullstack Development",
    emblem: "book",
    year: "2026",
    color: "var(--chip)",
    body: "Book Club Dashboard with auth, book search, and book club management.",
    stack: ["React", "Next.js", "Neon", "Clerk"],
    status: "SHIPPED",
    href: "https://society.oliver-howard.com",
  },
    {
    title: "Commonplace",
    genre: "Fullstack Development",
    emblem: "commonplace",
    year: "2026",
    color: "var(--xp)",
    body: "Social Blog Platform",
    stack: ["React", "Next.js", "Sanity", "Resend"],
    status: "LIVE",
    href: "https://commonplace.oliver-howard.com",
  },
  {
    title: "invrse",
    genre: "Web Development Agency",
    emblem: "laptop",
    year: "2025 - Present",
    color: "var(--chip)",
    body: "Fully custom coded, modern websites",
    stack: ["React", "Next.js", "Tailwind"],
    status: "LIVE",
    href: "https://invrse.dev",
  },
    {
    title: "pitch",
    genre: "Fullstack Development",
    emblem: "guitar",
    year: "2026",
    color: "var(--coin)",
    body: "Minimal guitar tuner web app using Pitchy for pitch detection + Web Audio API for mic access",
    stack: ["React", "Next.js", "Vite"],
    status: "SHIPPED",
    href: "https://tuner.oliver-howard.com",
  },
  {
    title: "Tresaire Ann",
    genre: "Fullstack Development",
    emblem: "shirt",
    year: "2026",
    color: "#a855f7",
    body: "Visual identity and digital storefront for a contemporary clothing label — using React + Shopify Headless",
    stack: ["React", "Shopify Headless", "Instagram API"],
    status: "SHIPPED",
    href: "https://tresaireann.com",
  },
  {
    title: "Oliver Howard",
    genre: "Frontend Development",
    emblem: "camera",
    year: "2025",
    color: "var(--chip)",
    body: "Editorial monochrome portfolio for an amateur photographer.",
    stack: ["HTML", "CSS", "Javascript"],
    status: "LIVE",
    href: "https://photos.oliver-howard.com",
  },
  {
    title: "Bookrex",
    genre: "Fullstack Development",
    emblem: "book",
    year: "2025",
    color: "var(--xp)",
    body: "AI book recommendation platform. Custom recommendation engine and data pipeline. Uses Goodreads, Hardcover, etc.",
    stack: ["React", "Node.js", "OpenAI"],
    status: "SHIPPED",
    href: "https://bookrex.fiosa.us",
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
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "9px 13px", fontSize: 9 }}
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
          title="PROJECTS"
          accent="var(--coin)"
          sub="A selection of engineering-focused projects. Built 100% by me."
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
                Niche projects &amp; open source contributions can be found on my GitHub.
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
