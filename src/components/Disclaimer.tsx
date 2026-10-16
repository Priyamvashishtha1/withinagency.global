"use client";
import { useState } from "react";

export default function Disclaimer({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[var(--glass-border)] pt-6">
      <h3 className="text-label text-fg">Legal disclaimer</h3>
      <p className={`mt-3 text-sm leading-relaxed text-muted ${open ? "" : "line-clamp-2"}`}>
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-2 text-sm text-[var(--capital-gold)]"
      >
        {open ? "Read less" : "Read more"}
      </button>
    </div>
  );
}