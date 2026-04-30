"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setLight(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    document.body.classList.toggle("light", light);
    localStorage.setItem("theme", light ? "light" : "dark");
  }, [light]);

  return (
    <button
      type="button"
      aria-label="Toggle light mode"
      onClick={() => setLight((value) => !value)}
      className="grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 text-silver transition hover:border-cyan/35 hover:text-white light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-700"
    >
      {light ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
