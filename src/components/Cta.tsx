import { CtaLineButton } from "@/components/cta/CtaLineButton";
import { CtaPrimaryButton } from "@/components/cta/CtaPrimaryButton";
import type { LandingPageData } from "@/types/landing";

type CtaProps = {
  content: LandingPageData["cta"];
};

const ctaButtonResponsiveClass =
  "max-md:py-18 max-md:text-20 max-[450px]:text-18";

export function Cta({ content }: CtaProps) {
  return (
    <section
      id="cta"
      className="border-t-1 border-[#D4AF374D] bg-[linear-gradient(180deg,#0F0E0B_0%,#1A1705_100%)] py-80 max-md:py-60"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex w-full max-w-full flex-col items-center gap-50 px-20 max-md:gap-40 max-md:px-50 max-[450px]:px-15">
        <div className="w-full text-center">
          <div className="inline-flex items-center justify-center gap-x-8 gap-y-8">
            <h2
              id="cta-heading"
              className="section-title w-fit text-center"
            >
              <span className="text-white max-[450px]:block">{content.headingLeading}</span>
              <span className="section-title-accent max-[450px]:block">
                {content.headingAccent}
              </span>
            </h2>
            <span
              className="inline-flex h-[7.5rem] w-[7.5rem] shrink-0 items-center justify-center rounded-[0.5rem] bg-white max-md:h-50 max-md:w-50 max-[450px]:hidden"
              aria-hidden
            >
              <svg
                className="w-[4.4rem] max-md:w-26"
                viewBox="0 0 53 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 22.8692L16.7976 35.4487L48.7917 4"
                  stroke="#D4AF37"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-56 max-md:gap-40 max-[450px]:gap-32">
          <ul className="flex w-fit list-none flex-col gap-10 rounded-[1.6rem] border-2 border-[#D4AF3733] bg-[#00000080] px-50 py-32 max-md:px-40 max-md:py-28 max-[450px]:gap-8 max-[450px]:rounded-[1.2rem] max-[450px]:px-30 max-[450px]:py-24">
            {content.features.map((feature) => (
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

          <div className="flex w-[51.2rem] max-w-full flex-col gap-20 max-md:w-[40rem] max-[450px]:gap-12">
            <CtaPrimaryButton className={`w-full ${ctaButtonResponsiveClass}`} />
            <CtaLineButton className={`w-full ${ctaButtonResponsiveClass}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
