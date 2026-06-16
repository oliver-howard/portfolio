import { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { NowPlaying } from "./components/NowPlaying";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GithubCalendar } from './components/GithubCalendar';

type Theme = "light" | "dark";
type BootStyle = "A" | "B" | "C";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [boot, setBoot] = useState<BootStyle>("B");
  const [scanlines] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.getElementById("root");
    if (root) root.classList.toggle("crt-off", !scanlines);
  }, [scanlines]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} scrollTo={scrollToId} />
      <Hero boot={boot} setBoot={setBoot} scrollTo={scrollToId} />
      <div className="section-divider" />
      <About />
      <GithubCalendar />
      <Skills />
      <Projects />
      <NowPlaying />
      <Contact />
      <Footer />
      <div className="crt-overlay" />
    </>
  );
}
