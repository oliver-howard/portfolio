import { Reveal } from "./Reveal";

interface SectionHeadProps {
  tag: string;
  title: string;
  sub?: string;
  accent?: string;
}

export function SectionHead({ tag, title, sub, accent = "var(--chip)" }: SectionHeadProps) {
  return (
    <div style={{ marginBottom: 40 }}>
      <Reveal>
        <div
          className="eyebrow"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, color: accent }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              background: accent,
              display: "inline-block",
              boxShadow: "3px 3px 0 var(--shadow-ink)",
            }}
          />
          {tag}
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className="hud"
          style={{
            fontSize: "clamp(22px, 3.4vw, 38px)",
            margin: "16px 0 0",
            lineHeight: 1.3,
            color: "var(--ink)",
            textShadow: "4px 4px 0 var(--shadow-ink)",
          }}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className="pixel-body" style={{ maxWidth: 560, marginTop: 14 }}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
