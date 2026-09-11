import WaitlistForm from "./WaitlistForm";
import Planet from "./Planet";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-92px)] items-center px-[100px] pb-[100px] pt-[70px] max-[900px]:min-h-[calc(100svh-82px)] max-[900px]:justify-center max-[900px]:px-6 max-[900px]:pb-[150px] max-[900px]:pt-10"
    >
      <div className="relative z-[3] -mt-[25px] w-[54%] max-[900px]:mt-[50px] max-[900px]:w-full max-[900px]:max-w-[600px] max-[900px]:text-center">
        <p className="mb-7 text-[12px] font-normal tracking-[.45em] text-[#d6d8e5] max-[900px]:mb-6 max-[900px]:text-[10px] max-[900px]:tracking-[.38em]">
          A CALMER YOU.
        </p>

        <h1 className="m-0 text-[clamp(72px,7vw,106px)] font-normal leading-[.9] tracking-[-.065em] max-[900px]:text-[clamp(58px,17vw,84px)] max-[900px]:leading-[.94]">
          <span className="block">Coming</span>
          <span className="block bg-gradient-to-r from-[#bd8cff] via-[#8f9cff] to-[#5893ff] bg-clip-text text-transparent">
            Soon
          </span>
        </h1>

        <p className="my-[38px] mb-9 text-[16px] leading-[1.6] text-[#eef0f6] max-[900px]:mx-auto max-[900px]:my-[26px] max-[900px]:mb-[30px] max-[900px]:max-w-[310px] max-[900px]:text-[14px]">
          A space to slow down, reflect, and feel better.
        </p>

        <div className="mx-0 max-[900px]:mx-auto">
          <WaitlistForm />
        </div>
      </div>

      <Planet />
    </section>
  );
}
