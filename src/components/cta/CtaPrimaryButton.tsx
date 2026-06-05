type CtaPrimaryButtonProps = {
  className?: string;
};

export function CtaPrimaryButton({
  className = "",
}: CtaPrimaryButtonProps) {
  return (
    <a
      href="https://www.tcg-royal.com/cart" target="_blank"
      className={`cta-primary-button flex items-center justify-center rounded-full bg-[linear-gradient(96.31deg,#D4AF37_13.04%,#A68A28_93.61%)] py-20 text-24 font-bold text-black ${className}`.trim()}
    >
      <span className="leading-none text-inherit">今すぐ買取価格を見る</span>
    </a>
  );
}
