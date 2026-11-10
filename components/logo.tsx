import Image from "next/image";

export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100 shadow-xs ${className}`}
    >
      <Image
        src="/william-headshot-caricature.png"
        alt="William Anaza"
        fill
        sizes="(max-width: 768px) 32px, 40px"
        className="object-cover"
        priority
        quality={100}
      />
    </div>
  );
}
