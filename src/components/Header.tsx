import Image from "next/image";

export function Header() {
  return (
    <header className="bg-background">
      <div className="flex justify-center items-center w-full py-25">
        <a href="/" className="relative block h-[4rem] w-[25rem] max-md:h-[5rem] max-md:w-[30rem]">
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
