"use client";

import Link from "next/link";
import { Menu, X, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { label: "About us", href: "/about" },
  { label: "Product", href: "/product" },
  // { label: "Reviews", href: "/reviews" },
  { label: "Feeds", href: "/feeds" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full",
          "bg-[#F5FAFE]", // solid (no transparency)
          scrolled ? "shadow-md" : "shadow-sm",
          "border-b border-[#082D7E]/10",
        ].join(" ")}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3 font-extrabold text-[#082D7E]">
              MAXXON
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((i) => (
                <Link
                  key={i.label}
                  href={i.href}
                  className="text-sm font-medium text-[#082D7E]/90 hover:text-[#082D7E]"
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                aria-label="Theme"
                className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#082D7E]/15 bg-white text-[#082D7E] shadow-sm hover:bg-white lg:flex"
                type="button"
              >
                <Moon size={18} />
              </button>

              <Link
                href="/product"
                className="hidden rounded-full bg-[#FFAA01] px-6 py-2.5 text-sm font-semibold text-[#082D7E] shadow-sm hover:brightness-95 lg:inline-flex"
              >
                Order Now
              </Link>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#082D7E]/15 bg-white text-[#082D7E] shadow-sm lg:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                type="button"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER (PORTAL) */}
      {mounted &&
        open &&
        createPortal(
          <div className="fixed inset-0 z-[9999] lg:hidden isolate">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
              aria-label="Backdrop"
            />

            {/* Drawer panel (fully solid) */}
            <div className="absolute right-0 top-0 z-10 h-full w-[86%] max-w-sm bg-[#F5FAFE] shadow-2xl ring-1 ring-black/10">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#082D7E]/10">
                <span className="text-base font-semibold text-[#082D7E]">Menu</span>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#082D7E]/15 bg-white text-[#082D7E]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-5 py-6">
                <div className="flex flex-col gap-2">
                  {navItems.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm font-medium text-[#082D7E] hover:bg-white"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="/product"
                    onClick={() => setOpen(false)}
                    className="flex-1 rounded-full bg-[#FFAA01] px-6 py-3 text-center text-sm font-semibold text-[#082D7E]"
                  >
                    Order Now
                  </Link>

                  <button
                    aria-label="Theme"
                    className="h-12 w-12 rounded-full border border-[#082D7E]/15 bg-white text-[#082D7E]"
                    type="button"
                  >
                    <Moon size={18} className="mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}