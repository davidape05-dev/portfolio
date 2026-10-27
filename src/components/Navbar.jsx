import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { nav } from "../data.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-ink-900 text-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-3xl font-bold tracking-tight">
          <span className="text-brand-light">D</span>avid <span className="text-brand-light">N</span>diga
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              className="border-b-2 border-transparent py-1 font-semibold text-indigo-100 transition hover:border-brand hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-6 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 font-semibold text-indigo-100 hover:bg-white/5 hover:text-white">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
