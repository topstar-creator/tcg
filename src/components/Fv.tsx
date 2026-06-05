import Image from "next/image";
import { CtaLineButton } from "@/components/cta/CtaLineButton";
import { CtaPrimaryButton } from "@/components/cta/CtaPrimaryButton";
import type { FvHighlightIcon, LandingPageData } from "@/types/landing";

type FvProps = {
  fv: LandingPageData["fv"];
};

const fvCtaButtonClass = "max-md:py-18 max-md:text-20 max-[450px]:text-18";

function BenefitCheck() {
  return (
    <span
      className="inline-flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-[0.2rem] bg-gold max-md:h-28 max-md:w-28 max-[450px]:h-24 max-[450px]:w-24"
      aria-hidden
    >
      <svg className="h-[1.3rem] w-[1.6rem] max-md:h-12 max-md:w-14 max-[450px]:h-10 max-[450px]:w-12" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.33333 12.5333L8.49176e-09 7.2L1.86667 5.33333L5.33333 8.8L14.1333 -1.6669e-08L16 1.86667L5.33333 12.5333Z" fill="white"/>
      </svg>
    </span>
  );
}

function BenefitLabel({
  label,
  highlightLeading,
}: {
  label: string;
  highlightLeading?: string;
}) {
  if (highlightLeading && label.startsWith(highlightLeading)) {
    return (
      <span className="text-28 leading-[1] max-md:text-22 max-[450px]:text-20">
        <span className="text-24 font-medium leading-[1] max-md:text-20 max-[450px]:text-18">{highlightLeading}</span>
        <span className="font-bold text-gold">{label.slice(highlightLeading.length)}</span>
      </span>
    );
  }

  return <span className="text-24 font-bold leading-none text-[#C5A059] max-md:text-20 max-[450px]:text-18">{label}</span>;
}

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

        <span className="bg-black rounded-[0.6rem] border-3 border-[#C5A059] px-70 py-14 text-[4rem] leading-[1] font-[900] tracking-[0.04em] text-[#C5A059] drop-shadow-[4px_4px_8px_#C5A05975] max-md:px-40 max-md:py-10 max-md:text-[2.8rem] max-[450px]:px-30 max-[450px]:py-8 max-[450px]:text-[2.4rem]">
          {fv.badge}
        </span>

        <div className="relative z-10 mt-30 flex flex-col items-center gap-50 text-center max-md:gap-40 max-[450px]:gap-32">
          
          <h1 id="fv-heading" className="flex flex-col items-center text-center">
            <span className="fv-tagline font-serif text-[10rem] font-bold leading-[1] max-md:text-[5.6rem] max-[450px]:text-[4.4rem]">
              {fv.titleTagline}
            </span>
            <span className="fv-title-accent">
              <span className="fv-title-accent__stroke" aria-hidden>
                {fv.titleAccent}
              </span>
              <span className="fv-title-accent__fill">{fv.titleAccent}</span>
            </span>
          </h1>
          <p className="text-36 font-medium leading-[1] max-md:text-24 max-md:leading-[1.4] max-[450px]:text-20 max-[450px]:text-18">
            {fv.description}
          </p>
        </div>

        <ul className="mt-30 mb-60 flex flex-wrap items-center justify-center gap-x-30 gap-y-12 max-md:mt-24 max-md:mb-40 max-md:gap-x-20 max-[450px]:mt-20 max-[450px]:mb-32 max-[450px]:grid max-[450px]:grid-cols-2 max-[450px]:gap-x-25 max-[450px]:gap-y-20">
          {fv.benefits.map((benefit) => (
            <li key={benefit.label} className="flex items-center gap-12 max-md:gap-8 max-[450px]:gap-6">
              <BenefitCheck />
              <BenefitLabel
                label={benefit.label}
                highlightLeading={benefit.highlightLeading}
              />
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
