export default function Planet() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-[350px] -right-[260px] z-[1] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_50%_45%,#030817_0_64%,#020612_74%)] max-[900px]:-bottom-[280px] max-[900px]:-right-[280px] max-[900px]:h-[560px] max-[900px]:w-[560px] max-[520px]:-bottom-[235px] max-[520px]:-right-[250px] max-[520px]:h-[480px] max-[520px]:w-[480px]">
      <div className="animate-otium-glow absolute left-10 top-10 h-[210px] w-[470px] rotate-[-24deg] rounded-[50%] bg-[rgba(72,76,255,.22)] blur-[65px]" />
      <div className="animate-otium-rim absolute -inset-px rotate-[-2deg] rounded-full bg-[conic-gradient(from_225deg,transparent_0deg_38deg,#4f7cff_55deg,#b982ff_79deg,#738fff_100deg,transparent_120deg_360deg)] [mask:radial-gradient(farthest-side,transparent_calc(100%_-_2px),#000_calc(100%_-_1px))] drop-shadow-[0_0_7px_rgba(103,114,255,.85)] drop-shadow-[0_0_28px_rgba(94,86,255,.45)]" />
    </div>
  );
}