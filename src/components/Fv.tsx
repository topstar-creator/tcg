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
        <span className="relative h-[2.5rem] w-[3rem] max-md:h-40 max-md:w-60 max-[450px]:h-40 max-[450px]:w-68">
          <Image src="/images/banner_icon01.png" alt="基本減額なし" fill sizes="(max-width: 450px) 6.8rem, (max-width: 768px) 8rem, 10.2rem" className="object-contain" />
        </span>
      );
    case "sameDay":
      return (
        <span className="relative h-[2.5rem] w-[2.5rem] max-md:h-40 max-md:w-40 max-[450px]:h-40 max-[450px]:w-40">
          <Image src="/images/banner_icon02.png" alt="最短当日査定・振込" fill sizes="(max-width: 450px) 4rem, (max-width: 768px) 4.8rem, 6.2rem" className="object-contain" />
        </span>
      );
    case "freeShipping":
      return (
        <span className="relative h-[2rem] w-[2.5rem] max-md:h-36 max-md:w-48 max-[450px]:h-36 max-[450px]:w-48">
          <Image src="/images/banner_icon03.png" alt="送料無料" fill sizes="(max-width: 450px) 4.8rem, (max-width: 768px) 5.6rem, 6.8rem" className="object-contain" />
        </span>
      );
  }
}

export function Fv({ fv }: FvProps) {
  return (
    <section
      id="fv"
      className="relative overflow-hidden bg-background pb-60 max-md:pb-60"
    >
      <div className="relative flex w-full flex-col items-center max-md:px-25 max-[450px]:px-15">

        <span className="bg-black rounded-[0.6rem] border-3 border-[#C5A059] px-30 py-10 text-16 leading-[1] font-[900] tracking-[0.04em] text-[#C5A059] drop-shadow-[4px_4px_8px_#C5A05975] max-md:px-40 max-md:py-10 max-md:text-[2.8rem] max-[450px]:px-30 max-[450px]:py-8 max-[450px]:text-[2.4rem]">
          {fv.badge}
        </span>

        <div className="relative z-10 mt-15 flex flex-col items-center gap-25 text-center max-md:gap-40 max-[450px]:gap-32">
          
          <h1 className="fv-title flex flex-col items-center text-center">
            <span className="fv-title-stroke" aria-hidden>
              {fv.title}
            </span>
            <span className="fv-title-fill">{fv.title}</span>
          </h1>
          <p className="text-16 font-medium leading-[1] max-md:text-18 max-md:leading-[1.4] max-[450px]:text-20 max-[450px]:text-18">
            {fv.description}
          </p>
        </div>

        <div className="mb-20 flex w-full justify-center gap-30 max-md:mb-32 max-md:gap-16 max-[450px]:mb-24 max-[450px]:flex-col max-[450px]:gap-12 max-[450px]:px-15">
          {fv.highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-15 rounded-[1.2rem] border-2 border-[#D4AF37] px-30 py-8 max-md:gap-12 max-md:px-20 max-md:py-8 max-[450px]:justify-center max-[450px]:gap-12 max-[450px]:px-20 max-[450px]:gap-12"
            >
              <FvHighlightIconGraphic icon={item.icon} />
              <p className="text-15 font-bold leading-[1] text-gold max-md:text-18 max-[450px]:text-18">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mb-20 flex w-full items-center justify-center max-md:mb-40 max-[450px]:mb-32">
          <div className="relative flex items-end justify-center">
            <div className="relative z-10 w-[9rem] aspect-[22/30.8] max-md:w-[14rem] max-[450px]:w-[12rem]">
              <Image
                src={`${fv.cards.left}?v=${fv.cardAssetVersion}`}
                alt=""
                fill
                unoptimized
                sizes="(max-width: 450px) 12rem, (max-width: 768px) 14rem, 22rem"
                className="-rotate-6 rounded-[0.8rem] object-contain shadow-[0_0_3rem_0_#D4AF3780] max-md:-rotate-4 max-[450px]:-rotate-3"
              />
            </div>
            <div className="relative z-20 w-[15rem] aspect-[30/42] max-md:w-[20rem] max-[450px]:w-[17rem]">
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
            <div className="relative z-10 w-[9rem] aspect-[22/30.8] max-md:w-[14rem] max-[450px]:w-[12rem]">
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

        <div className="flex w-full justify-center gap-60 px-350 max-md:flex-col-reverse max-md:gap-20 max-md:w-[51.2rem] max-md:px-0 max-[450px]:gap-12 max-[450px]:w-[40rem]">
          <CtaLineButton
            className={`flex-1 ${fvCtaButtonClass}`}
          />
          <CtaPrimaryButton
            className={`flex-1 ${fvCtaButtonClass}`}
          />
        </div>

        <div className="absolute top-[7rem] right-[41rem] h-[24rem] w-[15rem] max-md:top-[12rem] max-md:right-0 max-md:h-[20rem] max-md:w-[14rem] max-[450px]:hidden">
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
