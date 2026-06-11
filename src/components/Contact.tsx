import { Reveal } from "./Reveal";
import { Sprite } from "./Sprite";

const SOCIALS = [
  { name: "GitHub", icon: "github" as const, href: "https://github.com/oliver-howard" },
  { name: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/in/oliverhoward7/" },
  { name: "Email", icon: "mail" as const, href: "mailto:oliver.t.howard@icloud.com" },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="pcard" style={{ padding: 0, overflow: "hidden", position: "relative" }}>
          <div className="grid-bg" style={{ opacity: 0.4 }} />
          <div style={{ position: "relative", padding: "48px 32px", textAlign: "center" }}>
            {/* co-op visual */}
            <Reveal>
              <div
                className="bob"
                style={{
                  display: "inline-flex",
                  gap: 14,
                  alignItems: "center",
                  padding: "16px 22px",
                  border: "3px solid var(--line-bright)",
                  borderRadius: 10,
                  background: "var(--bg-0)",
                  boxShadow: "0 0 28px rgba(52,211,153,.30), 6px 6px 0 var(--shadow-ink)",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Sprite name="controller" px={6} />
                  <div className="hud" style={{ fontSize: 8, color: "var(--chip)", marginTop: 8 }}>
                    P1
                  </div>
                </div>
                <span className="hud" style={{ fontSize: 14, color: "var(--xp)" }}>
                  +
                </span>
                <div style={{ textAlign: "center", opacity: 0.6 }}>
                  <Sprite name="controller" px={6} />
                  <div
                    className="hud blink"
                    style={{ fontSize: 8, color: "var(--coin)", marginTop: 8 }}
                  >
                    P2?
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="eyebrow" style={{ color: "var(--xp)", marginTop: 24 }}>
                PLAYER 2 WANTED
              </div>
              <h2
                className="hud"
                style={{
                  fontSize: "clamp(22px,4vw,40px)",
                  margin: "16px 0 0",
                  lineHeight: 1.3,
                  textShadow: "4px 4px 0 var(--shadow-ink)",
                }}
              >
                START <span className="grad">CO-OP?</span>
              </h2>
              <p
                className="pixel-body"
                style={{ fontSize: 22, maxWidth: 520, margin: "16px auto 0" }}
              >
                Got a project worth building right? Let's create something extraordinary — I reply
                within one business day.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: 30,
                }}
              >
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    className="btn"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 10 }}
                  >
                    <Sprite name={s.icon} px={3} /> {s.name}
                  </a>
                ))}
              </div>
            </Reveal>

            {/* resume row */}
            <Reveal delay={0.18}>
              <div
                id="resume"
                style={{
                  marginTop: 36,
                  paddingTop: 28,
                  borderTop: "3px solid var(--line)",
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  className="btn btn-gold"
                  href="/oliver_howard_resume.pdf"
                  download="oliver_howard_resume.pdf"
                >
                  <Sprite name="disk" px={3} /> Save File · Resume.pdf
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
