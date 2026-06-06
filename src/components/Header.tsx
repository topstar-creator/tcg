import Image from "next/image";

export function Header() {
  return (
    <header className="bg-background">
      <div className="flex justify-center items-center w-full pt-30 pb-25 max-md:pt-30 max-md:pb-25">
        <a href="/" className="relative block h-[4rem] w-[25rem]">
          <Image
            src="/images/logo.png"
            alt="TCG ROYAL"
            fill
            sizes="(max-width: 768px) 30rem, 32.3rem"
            className="object-contain"
            priority
          />
        </a>
      </div>
    </header>
  );
}
