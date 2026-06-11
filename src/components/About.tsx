import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { Sprite } from "./Sprite";
import oliverImg from "../assets/oliver.jpeg";

const STATS: [string, number, string][] = [
  ["Data & Math", 99, "var(--coin)"],
  ["Frontend", 95, "var(--chip)"],
  ["Systems / Backend", 93, "var(--xp)"],
  ["Design / UI", 90, "#a855f7"],
];

function PixelImage({ src, res = 56 }: { src: string; res?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const img = new Image();
    img.onload = () => {
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      ctx.imageSmoothingEnabled = false;
      cv.width = res;
      cv.height = res;
      const s = Math.min(img.width, img.height);
      const sx = (img.width - s) / 2;
      const sy = (img.height - s) / 2;
      ctx.drawImage(img, sx, sy, s, s, 0, 0, res, res);
    };
    img.src = src;
  }, [src, res]);

  return (
    <canvas
      ref={ref}
      style={{ width: "100%", height: "100%", imageRendering: "pixelated", display: "block" }}
    />
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead
          tag="Character Sheet"
          title="PLAYER 1"
          accent="#a855f7"
          sub=""
        />
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1.4fr)",
            gap: 28,
            alignItems: "start",
          }}
        >
          {/* portrait card */}
          <Reveal>
            <div className="pcard" style={{ padding: 16 }}>
              <div className="screen" style={{ borderRadius: 6, overflow: "hidden", aspectRatio: "1/1" }}>
                <PixelImage src={oliverImg} res={120} />
              </div>
              <div style={{ marginTop: 14, textAlign: "center" }}>
                <div className="hud" style={{ fontSize: 13, color: "var(--ink)" }}>
                  OLIVER HOWARD
                </div>
                <div
                  className="pixel-body"
                  style={{ fontSize: 18, color: "var(--ink-3)", marginTop: 6 }}
                >
                  Engineer · Data Scientist · Founder
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    justifyContent: "center",
                    marginTop: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <span className="tag" style={{ color: "var(--coin)" }}>
                    <Sprite name="star" px={3} /> UC Berkeley
                  </span>
                  <span className="tag" style={{ color: "var(--xp)" }}>
                    CA, USA
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* bio + stats */}
          <Reveal delay={0.1}>
            <div className="pcard" style={{ padding: "26px 28px" }}>
              <p className="pixel-body" style={{ fontSize: 22, margin: 0 }}>
                I'm Oliver — a software engineer with a background in data science and applied math from UC Berkeley. My work spans full-stack web development at {" "}
                <span className="grad" style={{ fontWeight: 700 }}>
                  invrse
                </span>
                , software engineering internships in SF and London, and machine learning from my time at Cal.
              </p>
              <div
                style={{
                  height: 3,
                  background:
                    "repeating-linear-gradient(90deg,var(--line-bright) 0 10px,transparent 10px 20px)",
                  margin: "24px 0",
                  opacity: 0.6,
                }}
              />
              <div
                className="hud"
                style={{ fontSize: 9, color: "var(--ink-3)", marginBottom: 16 }}
              >
                ▸ STAT ALLOCATION
              </div>
              <div style={{ display: "grid", gap: 14 }}>
                {STATS.map(([label, val, color]) => (
                  <div key={label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span className="pixel-body" style={{ fontSize: 18, color: "var(--ink)" }}>
                        {label}
                      </span>
                      <span className="hud" style={{ fontSize: 9, color }}>
                        {val}
                      </span>
                    </div>
                    <div className="meter" style={{ color }}>
                      <span style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
