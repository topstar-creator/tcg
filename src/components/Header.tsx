import Image from "next/image";

export function Header() {
  return (
    <header className="bg-background">
      <div className="flex justify-center items-center w-full py-40">
        <a href="/" className="relative block h-[5.2rem] w-[32.3rem] max-md:h-[5rem] max-md:w-[30rem]">
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
