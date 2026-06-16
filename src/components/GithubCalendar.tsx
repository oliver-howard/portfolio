import { useState, useEffect } from 'react';
import { GitHubCalendar } from 'react-github-calendar'; 
import { SectionHead } from "./SectionHead";

export function GithubCalendar() { // Renamed slightly to match your import convention
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // 1. Initial check
    const currentTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark" || "light";
    setTheme(currentTheme);

    // 2. Listen for changes (MutationObserver watches for the data-theme attribute update)
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark" || "light";
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="github-contributions"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.18))" }}
    >
      <div className="wrap">
        <SectionHead
          tag="Log"
          title="CODE ACTIVITY"
          accent="var(--chip)"
        />

        <div 
          className="pcard" 
          style={{ 
            padding: "24px 16px", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden"
          }}
        >
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="responsive-calendar-container">
            <style>{`
              .responsive-calendar-container svg {
                width: 100% !important;
                height: auto !important;
                max-width: 850px;
              }
            `}</style>

            <GitHubCalendar 
              username="oliver-howard" 
              blockSize={13} 
              blockMargin={4}
              colorScheme={theme} // This will now update automatically
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubCalendar;