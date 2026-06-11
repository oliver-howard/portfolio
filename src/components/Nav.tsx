import { useState, useEffect } from "react";
import { Sprite } from "./Sprite";

const NAV_LINKS = [
  ["about", "About"],
  ["skills", "Loadout"],
  ["projects", "Works"],
  ["now", "Now"],
  ["contact", "Contact"],
] as const;

interface NavProps {
  theme: string;
  toggleTheme: () => void;
  scrollTo: (id: string) => void;
}

export function Nav({ theme, toggleTheme, scrollTo }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 8000,
        borderBottom: "3px solid var(--line-bright)",
        background: scrolled ? "color-mix(in srgb, var(--bg-0) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background .2s ease",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              background: "var(--chip)",
              boxShadow: "2px 2px 0 var(--shadow-ink)",
              display: "inline-block",
            }}
          />
          <span
            className="grad"
            style={{ fontFamily: "var(--font-hud)", fontSize: 16, letterSpacing: "-1px" }}
          >
            oliver
          </span>
        </a>

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {NAV_LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(id);
              }}
              className="hud nav-link"
              style={{
                fontSize: 9,
                color: "var(--ink-2)",
                textDecoration: "none",
                padding: "10px 10px",
                borderRadius: 4,
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          className="btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={{ padding: "8px 12px", fontSize: 9 }}
        >
          <span
            style={{
              color: theme === "dark" ? "var(--coin)" : "var(--chip)",
              display: "inline-flex",
            }}
          >
            <Sprite name="power" px={3} />
          </span>
          {theme === "dark" ? "DARK" : "LIGHT"}
        </button>
      </div>
    </nav>
  );
}
