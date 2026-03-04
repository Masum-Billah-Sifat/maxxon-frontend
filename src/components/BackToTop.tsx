"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BackToTop() {
  const pathname = usePathname();

  // hide on product page (and optionally any subroutes)
  const hide =
    pathname === "/product" || pathname.startsWith("/product/");

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (hide) return; // no need to listen
    const onScroll = () => setShow(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hide]);

  if (hide || !show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={[
        "fixed bottom-6 right-6 z-[80]",
        "h-12 w-12 rounded-full",
        "bg-[#082D7E] text-white shadow-lg",
        "hover:brightness-110",
        "focus:outline-none focus:ring-2 focus:ring-[#FFAA01] focus:ring-offset-2",
      ].join(" ")}
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}