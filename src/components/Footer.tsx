export function Footer() {
  return (
    <footer style={{ borderTop: "4px solid var(--line-bright)", padding: "40px 0 56px" }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            className="grad"
            style={{ fontFamily: "var(--font-hud)", fontSize: 22 }}
          >
            oliver
          </span>
          <span className="hud" style={{ fontSize: 14, color: "var(--chip)" }}>
            .
          </span>
          <div
            className="pixel-body"
            style={{ fontSize: 17, color: "var(--ink-3)", marginTop: 8 }}
          >
            © {new Date().getFullYear()} Oliver Howard · Built with{" "}
            <span style={{ color: "var(--heart)" }}>♥</span> in California
          </div>
        </div>
        <div className="hud blink" style={{ fontSize: 9, color: "var(--ink-3)" }}>
          INSERT COIN TO CONTINUE
        </div>
      </div>
    </footer>
  );
}
