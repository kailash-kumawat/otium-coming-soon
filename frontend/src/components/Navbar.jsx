// import { useState } from "react";
import Logo from "./Logo";

// const links = [
//   { label: "About", href: "#" },
//   { label: "Updates", href: "#" },
//   { label: "Contact", href: "#" },
// ];

export default function Navbar() {
  // const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex h-[92px] items-center justify-between px-[34px] max-[900px]:h-[82px] max-[900px]:px-6">
      <Logo />

      {/* <nav
        className="flex items-center gap-[42px] text-[12px] text-[#d4d8e7] max-[900px]:hidden"
        aria-label="Primary navigation"
      >
        {links.map((link) => (
          <a
            key={link.label}
            className="opacity-90 transition-opacity hover:opacity-100"
            href={link.href}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="rounded-full border border-[rgba(220,225,244,.6)] px-[25px] py-[11px]"
        >
          Notify Me
        </a>
      </nav> */}

      {/* <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="hidden h-[42px] w-[42px] place-content-center gap-[5px] border-0 bg-transparent max-[900px]:grid"
      >
        <span className="block h-px w-5 bg-[#eef0f6]" />
        <span className="block h-px w-5 bg-[#eef0f6]" />
        <span className="block h-px w-5 bg-[#eef0f6]" />
      </button>

      {open && (
        <nav className="absolute right-[18px] top-[72px] z-30 flex w-[180px] flex-col gap-1 rounded-[14px] border border-[rgba(147,159,208,.28)] bg-[rgba(3,7,18,.95)] p-3 shadow-2xl backdrop-blur-2xl min-[901px]:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-[9px] px-3 py-[11px] text-[12px] text-[#d7dbea] hover:bg-white/[.06]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#notify"
            onClick={() => setOpen(false)}
            className="rounded-[9px] px-3 py-[11px] text-[12px] text-[#d7dbea] hover:bg-white/[.06]"
          >
            Notify Me
          </a>
        </nav>
      )} */}
    </header>
  );
}
