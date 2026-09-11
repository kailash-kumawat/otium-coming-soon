export default function Logo({ className = "" }) {
  return (
    <a
      href="/"
      aria-label="OTIUM home"
      className={`inline-flex items-center gap-[17px] ${className}`}
    >
      {/* <span
        aria-hidden="true"
        className="relative h-[34px] w-[34px] shrink-0 rounded-full bg-[#b8a2e0] shadow-[0_0_18px_rgba(104,111,255,.24)] after:absolute after:inset-[7px] after:rounded-full after:bg-[#030713] content-['']"
      /> */}
      <span className="translate-x-[.2em] text-[17px] font-medium tracking-[.42em]">
        <span className="text-[#b8a2e0]">O</span>
        <span className="text-[#f8f9fc]">TIUM</span>
      </span>
    </a>
  );
}
