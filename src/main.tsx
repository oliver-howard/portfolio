import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./pixel.css";
import App from "./App";

const chevron = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#0d1117"/><rect x="3" y="1" width="2" height="2" fill="#4fa3e0"/><rect x="5" y="3" width="2" height="2" fill="#4fa3e0"/><rect x="7" y="5" width="2" height="2" fill="#4fa3e0"/><rect x="5" y="7" width="2" height="2" fill="#4fa3e0"/><rect x="3" y="9" width="2" height="2" fill="#4fa3e0"/></svg>`;
const blank = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="16" height="16" fill="#0d1117"/></svg>`;
const frames = [chevron, blank];
const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
let i = 0;
let prevUrl: string | null = null;
setInterval(() => {
  const url = URL.createObjectURL(new Blob([frames[i++ % 2]], { type: "image/svg+xml" }));
  favicon.href = url;
  if (prevUrl) URL.revokeObjectURL(prevUrl);
  prevUrl = url;
}, 500);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
