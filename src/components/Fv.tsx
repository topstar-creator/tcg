import Image from "next/image";
import { CtaLineButton } from "@/components/cta/CtaLineButton";
import { CtaPrimaryButton } from "@/components/cta/CtaPrimaryButton";
import type { FvHighlightIcon, LandingPageData } from "@/types/landing";

type FvProps = {
  fv: LandingPageData["fv"];
};

const fvCtaButtonClass = "max-md:py-18 max-md:text-20 max-[450px]:text-18";

function FvHighlightIconGraphic({ icon }: { icon: FvHighlightIcon }) {
  switch (icon) {
    case "noReduction":
      return (
        <span className="relative h-[6.2rem] w-[10.2rem] max-md:h-40 max-md:w-60 max-[450px]:h-40 max-[450px]:w-68">
          <Image src="/images/banner_icon01.png" alt="基本減額なし" fill sizes="(max-width: 450px) 6.8rem, (max-width: 768px) 8rem, 10.2rem" className="object-contain" />
        </span>
      );
    case "sameDay":
      return (
        <span className="relative h-[6.2rem] w-[6.2rem] max-md:h-40 max-md:w-40 max-[450px]:h-40 max-[450px]:w-40">
          <Image src="/images/banner_icon02.png" alt="最短当日査定・振込" fill sizes="(max-width: 450px) 4rem, (max-width: 768px) 4.8rem, 6.2rem" className="object-contain" />
        </span>
      );
    case "freeShipping":
      return (
        <span className="relative h-[4.8rem] w-[6.8rem] max-md:h-36 max-md:w-48 max-[450px]:h-36 max-[450px]:w-48">
          <Image src="/images/banner_icon03.png" alt="送料無料" fill sizes="(max-width: 450px) 4.8rem, (max-width: 768px) 5.6rem, 6.8rem" className="object-contain" />
        </span>
      );
  }
}

export function Fv({ fv }: FvProps) {
  return (
    <section
      id="fv"
      className="relative overflow-hidden bg-background pb-80 max-md:pb-60"
    >
      <div className="relative flex w-full flex-col items-center max-md:px-25 max-[450px]:px-15">

        <span className="bg-black rounded-[0.6rem] border-3 border-[#C5A059] px-30 py-10 text-22 leading-[1] font-[900] tracking-[0.04em] text-[#C5A059] drop-shadow-[4px_4px_8px_#C5A05975] max-md:px-40 max-md:py-10 max-md:text-[2.8rem] max-[450px]:px-30 max-[450px]:py-8 max-[450px]:text-[2.4rem]">
          {fv.badge}
        </span>

        <div className="relative z-10 mt-20 flex flex-col items-center gap-40 text-center max-md:gap-40 max-[450px]:gap-32">
          
          <h1 id="fv-heading" className="flex flex-col items-center text-center">
            <span className="fv-tagline font-serif text-[6rem] font-bold leading-[1] max-md:text-[5.6rem] max-[450px]:text-[4.4rem]">
              {fv.titleTagline}
            </span>
            <span className="fv-title-accent">
              <span className="fv-title-accent__stroke" aria-hidden>
                {fv.titleAccent}
              </span>
              <span className="fv-title-accent__fill">{fv.titleAccent}</span>
            </span>
          </h1>
          <p className="text-36 font-medium leading-[1] max-md:text-18 max-md:leading-[1.4] max-[450px]:text-20 max-[450px]:text-18">
            {fv.description}
          </p>
        </div>

        <ul className="mt-30 mb-30 flex w-fit list-none gap-10 rounded-[1.6rem] border-2 border-[#D4AF3733] bg-[#00000080] px-50 py-32 max-md:px-40 max-md:py-28 max-[450px]:mb-24 max-[450px]:gap-8 max-[450px]:rounded-[1.2rem] max-[450px]:px-30 max-[450px]:py-24">
          {fv.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-20 text-28 font-bold leading-none text-white max-md:gap-16 max-md:text-22 max-[450px]:gap-12 max-[450px]:text-18"
            >
              <svg
                className="w-40 max-md:w-32 max-[450px]:w-26"
                viewBox="0 0 40 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 18.8887L14.5714 24.5553L31 10.3887"
                  stroke="#D4AF37"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="relative mb-50 flex w-full items-center justify-center max-md:mb-40 max-[450px]:mb-32">
          <div className="relative flex items-end justify-center">
            <div className="relative z-10 w-[22rem] aspect-[22/30.8] max-md:w-[14rem] max-[450px]:w-[12rem]">
              <Image
                src={`${fv.cards.left}?v=${fv.cardAssetVersion}`}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 450px) 12rem, (max-width: 768px) 14rem, 22rem"
                className="-rotate-6 rounded-[0.8rem] object-contain shadow-[0_0_3rem_0_#D4AF3780] max-md:-rotate-4 max-[450px]:-rotate-3"
              />
            </div>
            <div className="relative z-20 w-[30rem] aspect-[30/42] max-md:w-[20rem] max-[450px]:w-[17rem]">
              <Image
                src={`${fv.cards.center}?v=${fv.cardAssetVersion}`}
                alt="PSA10 高価買取対象カード"
                fill
                unoptimized
                sizes="(max-width: 450px) 17rem, (max-width: 768px) 20rem, 30rem"
                className="rounded-[0.8rem] object-contain shadow-[0_0_4rem_0_#D4AF3780]"
                priority
              />
            </div>
            <div className="relative z-10 w-[22rem] aspect-[22/30.8] max-md:w-[14rem] max-[450px]:w-[12rem]">
              <Image
                src={`${fv.cards.right}?v=${fv.cardAssetVersion}`}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 450px) 12rem, (max-width: 768px) 14rem, 22rem"
                className="rotate-6 rounded-[0.8rem] object-contain shadow-[0_0_3rem_0_#D4AF3780] max-md:rotate-4 max-[450px]:rotate-3"
              />
            </div>
          </div>
        </div>

        <div className="mb-40 flex w-full justify-center gap-30 max-md:mb-32 max-md:gap-16 max-[450px]:mb-24 max-[450px]:flex-col max-[450px]:gap-12 max-[450px]:px-15">
          {fv.highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-20 rounded-[1.2rem] border-2 border-[#D4AF37] px-30 py-8 max-md:gap-12 max-md:px-20 max-md:py-8 max-[450px]:justify-center max-[450px]:gap-12 max-[450px]:px-20 max-[450px]:gap-12"
            >
              <FvHighlightIconGraphic icon={item.icon} />
              <p className="text-28 font-bold leading-[1] text-gold max-md:text-18 max-[450px]:text-18">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full justify-center gap-60 px-350 max-md:flex-col-reverse max-md:gap-20 max-md:w-[51.2rem] max-md:px-0 max-[450px]:gap-12 max-[450px]:w-[40rem]">
          <CtaLineButton
            className={`flex-1 ${fvCtaButtonClass}`}
          />
          <CtaPrimaryButton
            className={`flex-1 ${fvCtaButtonClass}`}
          />
        </div>

        <div className="absolute top-[19rem] right-[15rem] h-[37rem] w-[25rem] max-md:top-[12rem] max-md:right-0 max-md:h-[20rem] max-md:w-[14rem] max-[450px]:hidden">
          <Image
            src="/images/star.png"
            alt=""
            fill
            sizes="(max-width: 450px) 0px, (max-width: 768px) 14rem, 25rem"
            className="object-contain opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
