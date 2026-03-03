import Image from "next/image";

export default function LogoMarquee() {
  // If you want image logos, set useImage=true and add /public/maxxon/partner-logo.png
  const useImage = false;

  const items = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    label: "LOGO",
  }));

  return (
    <div className="w-full bg-[#FFAA01] py-5">
      <div className="overflow-hidden">
        <div className="marquee-track px-6">
          {[...items, ...items].map((it, idx) => (
            <div
              key={`${it.id}-${idx}`}
              className="flex items-center justify-center"
            >
              {useImage ? (
                <Image
                  src="/maxxon/partner-logo.png"
                  alt="Partner Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              ) : (
                <span className="text-2xl font-extrabold tracking-wide text-black">
                  {it.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}