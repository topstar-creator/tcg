import { Header } from "@/components/Header";
import { Cta } from "@/components/Cta";
import { Difference } from "@/components/Difference";
import { Faq } from "@/components/Faq";
import { Reason } from "@/components/Reason";
import { Steps } from "@/components/Steps";
import { Fv } from "@/components/Fv";
import { Solution } from "@/components/Solution";
import { Price } from "@/components/Price";
import { getLandingPageData } from "@/lib/get-landing-page-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getLandingPageData();

  return (
    <>
      <Header />
      <main>
        <Fv fv={data.fv} />
        <Solution content={data.solution} />
        <Reason reasons={data.fiveReasons} />
        <Price content={data.whyHighPrice} />
        <Difference content={data.difference} />
        <Steps steps={data.fiveSteps} />
        <Faq items={data.faq} />
        <Cta content={data.cta} />
      </main>
    </>
  );
}
