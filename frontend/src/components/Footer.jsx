export default function Footer() {
  return (
    <footer className="absolute bottom-[38px] left-[100px] right-10 z-[4] flex items-center justify-between text-[11px] text-[#a6aec4] max-[900px]:bottom-[26px] max-[900px]:left-6 max-[900px]:right-6 max-[900px]:flex-col max-[900px]:gap-[18px]">
      <div id="contact" className="flex gap-[30px]">
        <a
          href="https://x.com/Otium_official"
          className="transition-colors hover:text-white"
        >
          X
        </a>
        <a
          href="https://www.instagram.com/otium.leisure/"
          className="transition-colors hover:text-white"
        >
          Instagram
        </a>
        <a
          href="mailto:otium.leisureofficial@gmail.com"
          className="transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>

      <p
        id="updates"
        className="m-0 text-[11px] max-[900px]:text-[9px] max-[900px]:tracking-[.04em]"
      >
        More peace. &nbsp;&nbsp; Brighter days. &nbsp;&nbsp; A calmer you.
      </p>
    </footer>
  );
}
