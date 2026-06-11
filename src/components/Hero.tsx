import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { Sprite } from "./Sprite";

type BootStyle = "A" | "B" | "C";

const BOOTS: { id: BootStyle; label: string }[] = [
  { id: "A", label: "Handheld" },
  { id: "B", label: "BIOS" },
  { id: "C", label: "Cards" },
];

function HandheldBoot() {
  return (
    <div className="bob" style={{ width: "min(380px, 86vw)", margin: "0 auto" }}>
      <div
        className="pcard"
        style={{
          background: "linear-gradient(160deg, var(--panel-2), var(--panel))",
          borderColor: "var(--line-bright)",
          borderRadius: 14,
          padding: 20,
          boxShadow: "10px 12px 0 var(--shadow-ink)",
        }}
      >
        <div
          className="screen"
          style={{
            aspectRatio: "16/11",
            borderRadius: 8,
            position: "relative",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,.25) 0 1px, transparent 1px 3px)",
              pointerEvents: "none",
            }}
          />
          <div style={{ textAlign: "center" }}>
            <div
              className="grad"
              style={{ fontFamily: "var(--font-hud)", fontSize: 30, letterSpacing: "-1px" }}
            >
              oliver
            </div>
            <div className="eyebrow" style={{ marginTop: 8, color: "var(--ink-3)" }}>
              oliverOS v2.6
            </div>
            <div className="hud blink" style={{ fontSize: 9, marginTop: 18, color: "var(--xp)" }}>
              ▶ PRESS START
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          {/* d-pad */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,16px)",
              gridTemplateRows: "repeat(3,16px)",
              gap: 2,
            }}
          >
            {["", "u", "", "l", "c", "r", "", "d", ""].map((k, i) => (
              <div
                key={i}
                style={{
                  background: k ? "var(--ink-3)" : "transparent",
                  borderRadius: 2,
                  boxShadow: k ? "2px 2px 0 var(--shadow-ink)" : "none",
                }}
              />
            ))}
          </div>

          {/* SELECT/START */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              <span
                style={{
                  width: 26,
                  height: 7,
                  background: "var(--ink-3)",
                  borderRadius: 9,
                  transform: "rotate(-20deg)",
                }}
              />
              <span
                style={{
                  width: 26,
                  height: 7,
                  background: "var(--ink-3)",
                  borderRadius: 9,
                  transform: "rotate(-20deg)",
                }}
              />
            </div>
            <div className="hud" style={{ fontSize: 7, color: "var(--ink-3)" }}>
              SELECT START
            </div>
          </div>

          {/* A/B buttons */}
          <div style={{ display: "flex", gap: 8, transform: "rotate(-20deg)" }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "var(--chip)",
                boxShadow: "3px 3px 0 var(--shadow-ink)",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-hud)",
                fontSize: 9,
                color: "#07060f",
              }}
            >
              B
            </div>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "var(--heart)",
                boxShadow: "3px 3px 0 var(--shadow-ink)",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--font-hud)",
                fontSize: 9,
                color: "#fff",
              }}
            >
              A
            </div>
          </div>
        </div>

        {/* power + label + speaker */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--xp)",
                boxShadow: "0 0 8px var(--xp)",
              }}
            />
            <span className="hud" style={{ fontSize: 7, color: "var(--ink-3)" }}>
              PWR
            </span>
          </div>
          <div className="hud" style={{ fontSize: 8, color: "var(--ink-3)", letterSpacing: "1px" }}>
            oliverOS
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,4px)",
              gap: 4,
              transform: "rotate(-20deg)",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                style={{ width: 4, height: 4, background: "var(--ink-3)", borderRadius: 1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const BIOS_LINES = [
  "oliverOS v2.6   (c) oliver howard",
  "> POST .................. OK",
  "> GPU: webgl2 / 60fps .... OK",
  "> mem: 64k .............. OK",
  "> loading modules:",
  "   react · next · typescript · tailwind",
  "> mounting /projects ... 3 cartridges found",
  "> profile: oliver_howard.sav loaded",
  "> ready.",
];

function BiosBoot() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? BIOS_LINES.length : 0);

  useEffect(() => {
    if (reduce) return;
    if (n >= BIOS_LINES.length) return;
    const t = setTimeout(() => setN((x) => x + 1), n === 0 ? 250 : 360);
    return () => clearTimeout(t);
  }, [n, reduce]);

  return (
    <div style={{ width: "min(560px, 92vw)", margin: "0 auto" }}>
      <div
        className="pcard"
        style={{
          background: "var(--panel-2)",
          padding: 14,
          borderRadius: 10,
          boxShadow: "10px 12px 0 var(--shadow-ink)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 6px 12px" }}>
          <span style={{ width: 12, height: 12, background: "var(--heart)", borderRadius: 2 }} />
          <span style={{ width: 12, height: 12, background: "var(--coin)", borderRadius: 2 }} />
          <span style={{ width: 12, height: 12, background: "var(--xp)", borderRadius: 2 }} />
          <span
            className="hud"
            style={{ fontSize: 8, color: "var(--ink-3)", marginLeft: 8 }}
          >
            /dev/oliver — boot
          </span>
        </div>
        <div
          className="screen"
          style={{ borderRadius: 8, padding: "18px 18px 22px", minHeight: 280 }}
        >
          <pre
            style={{
              margin: 0,
              fontFamily: "var(--font-pixel)",
              fontSize: 20,
              lineHeight: 1.35,
              color: "var(--xp)",
              whiteSpace: "pre-wrap",
              textShadow: "0 0 6px rgba(52,211,153,.4)",
            }}
          >
            {BIOS_LINES.slice(0, n).map((line, i) => (
              <div
                key={i}
                style={{
                  color: line.startsWith("oliverOS")
                    ? "var(--chip)"
                    : line.startsWith(">")
                    ? "var(--ink)"
                    : "var(--xp)",
                }}
              >
                {line}
              </div>
            ))}
            {n >= BIOS_LINES.length && (
              <div
                style={{
                  marginTop: 14,
                  color: "var(--coin)",
                  fontFamily: "var(--font-hud)",
                  fontSize: 13,
                }}
              >
                ▶ PRESS START <span className="blink">▮</span>
              </div>
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}

function CardFace({
  emblem,
  suit,
  color,
}: {
  emblem: Parameters<typeof Sprite>[0]["name"];
  suit: string;
  color: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--panel)",
        border: "3px solid var(--line-bright)",
        borderRadius: 8,
        boxShadow: "5px 6px 0 var(--shadow-ink)",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <span className="hud" style={{ fontSize: 12, color }}>
        {suit}
      </span>
      <div style={{ display: "grid", placeItems: "center" }}>
        <Sprite name={emblem} px={7} />
      </div>
      <span
        className="hud"
        style={{ fontSize: 12, color, alignSelf: "flex-end", transform: "rotate(180deg)" }}
      >
        {suit}
      </span>
    </div>
  );
}

function CardFan() {
  const cards = [
    { emblem: "camera" as const, suit: "PH", color: "var(--chip)", rot: -16, x: -150, y: 24 },
    { emblem: "shirt" as const, suit: "UI", color: "#a855f7", rot: -6, x: -70, y: 4 },
    { emblem: "book" as const, suit: "AI", color: "var(--xp)", rot: 6, x: 70, y: 4 },
    { emblem: "controller" as const, suit: "FE", color: "var(--coin)", rot: 16, x: 150, y: 24 },
  ];

  return (
    <div style={{ position: "relative", height: 300, display: "grid", placeItems: "center" }}>
      <div style={{ position: "absolute", top: 0, left: "50%" }}>
        {cards.map((c, i) => (
          <div
            key={i}
            className="bob"
            style={{
              position: "absolute",
              width: 104,
              height: 150,
              left: c.x - 52,
              top: c.y,
              transform: `rotate(${c.rot}deg)`,
              animationDelay: `${i * 0.25}s`,
            }}
          >
            <CardFace emblem={c.emblem} suit={c.suit} color={c.color} />
          </div>
        ))}
      </div>
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", marginTop: 70 }}>
        <div
          className="grad"
          style={{
            fontFamily: "var(--font-hud)",
            fontSize: "clamp(40px,7vw,68px)",
            letterSpacing: "-2px",
            filter: "drop-shadow(5px 6px 0 var(--shadow-ink))",
          }}
        >
          oliver
        </div>
        <div
          style={{
            marginTop: 20,
            display: "inline-flex",
            flexDirection: "column",
            gap: 6,
            alignItems: "flex-start",
          }}
        >
          {["▶ NEW RUN", "  CONTINUE", "  OPTIONS"].map((m, i) => (
            <span
              key={i}
              className="hud"
              style={{ fontSize: 12, color: i === 0 ? "var(--coin)" : "var(--ink-3)" }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface HeroProps {
  boot: BootStyle;
  setBoot: (b: BootStyle) => void;
  scrollTo: (id: string) => void;
}

export function Hero({ boot, setBoot, scrollTo }: HeroProps) {
  return (
    <header
      id="home"
      className="section"
      style={{ paddingTop: 96, paddingBottom: 64, position: "relative", overflow: "hidden" }}
    >
      <div className="grid-bg" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* boot selector */}
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              marginBottom: 30,
              flexWrap: "wrap",
            }}
          >
            <span className="hud" style={{ fontSize: 8, color: "var(--ink-3)" }}>
              BOOT&nbsp;STYLE
            </span>
            {BOOTS.map((b) => (
              <button
                key={b.id}
                className="btn"
                onClick={() => setBoot(b.id)}
                style={{
                  padding: "8px 12px",
                  fontSize: 9,
                  ...(boot === b.id
                    ? { background: "var(--chip)", color: "#07060f", borderColor: "#bcd9ff" }
                    : {}),
                }}
              >
                {b.id} · {b.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* centerpiece */}
        <Reveal delay={0.08}>
          <div
            style={{ minHeight: 320, display: "grid", placeItems: "center", marginBottom: 8 }}
          >
            {boot === "A" && <HandheldBoot />}
            {boot === "B" && <BiosBoot />}
            {boot === "C" && <CardFan />}
          </div>
        </Reveal>

        {/* intro block */}
        <Reveal delay={0.16}>
          <div style={{ textAlign: "center", maxWidth: 720, margin: "28px auto 0" }}>
            <div className="eyebrow" style={{ color: "var(--coin)" }}>
              PLAYER 1 · NOW PLAYING
            </div>
            <h1
              className="hud"
              style={{
                fontSize: "clamp(26px, 5vw, 52px)",
                margin: "16px 0 0",
                lineHeight: 1.25,
                textShadow: "5px 5px 0 var(--shadow-ink)",
              }}
            >
              OLIVER
              <br />
              HOWARD
            </h1>
            <p className="pixel-body" style={{ fontSize: 23, marginTop: 18 }}>
              Software engineer &amp; designer. Founder of{" "}
              <span className="grad" style={{ fontWeight: 700 }}>
                invrse
              </span>{" "}
              — building fast, beautifully crafted websites.{" "}
              <span style={{ color: "var(--ink)" }}>No templates. Ever.</span>
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 28,
              }}
            >
              <a
                className="btn btn-grad"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("projects");
                }}
              >
                <Sprite name="controller" px={3} /> Select Cartridge
              </a>
              <a
                className="btn"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("contact");
                }}
              >
                Start Co-op
              </a>
              <a className="btn btn-gold" href="#" onClick={(e) => e.preventDefault()}>
                <Sprite name="download" px={3} /> Save File
              </a>
            </div>

            {/* HUD stats */}
            <div
              style={{
                display: "flex",
                gap: 22,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 40,
              }}
            >
              {(
                [
                  ["LVL", "Berkeley", "var(--chip)"],
                  ["CLASS", "Eng / Design", "#a855f7"],
                  ["LOC", "California", "var(--xp)"],
                ] as const
              ).map(([k, v, c]) => (
                <div key={k} style={{ textAlign: "center" }}>
                  <div className="hud" style={{ fontSize: 8, color: c }}>
                    {k}
                  </div>
                  <div
                    className="pixel-body"
                    style={{ color: "var(--ink)", fontSize: 19, marginTop: 4 }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
