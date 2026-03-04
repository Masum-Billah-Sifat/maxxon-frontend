"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Minus,
  Plus,
  Star,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={20} className="fill-[#FFAA01] text-[#FFAA01]" />
      ))}
    </div>
  );
}

function Money({ value }: { value: number }) {
  return (
    <span className="font-extrabold text-[#082D7E]">
      ৳ {value.toLocaleString("en-US")}
    </span>
  );
}

function AccordionRow({
  title,
  open,
  onToggle,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-full border border-black/10 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-sm font-semibold text-black/80"
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          className={["transition-transform", open ? "rotate-180" : "rotate-0"].join(" ")}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm leading-relaxed text-black/70">
          Content will be added later.
        </div>
      )}
    </div>
  );
}

export default function ProductPage() {
  const images = useMemo(
    () => [
      "/maxxon/product/01.png",
      "/maxxon/product/02.png",
      "/maxxon/product/03.png",
      "/maxxon/product/04.png",
      // add more anytime:
      // "/maxxon/product/05.png",
    ],
    []
  );

  const orderRef = useRef<HTMLDivElement | null>(null);

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [active, setActive] = useState(0);

  // Keep qty for the order form only
  const [qty, setQty] = useState(2);

  const [descOpen, setDescOpen] = useState(false);

  // Order form (no backend yet)
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [zone, setZone] = useState<"inside" | "outside">("inside");

  const oldPrice = 1400;
  const price = 1250;

  const nextImg = () => setActive((p) => (p + 1) % images.length);
  const prevImg = () => setActive((p) => (p - 1 + images.length) % images.length);

  const reviews = [
    {
      name: "Abdul Aziz",
      title: "Absolutely Loved This Product!",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.",
    },
    {
      name: "Abdul Aziz",
      title: "Absolutely Loved This Product!",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.",
    },
  ];

  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px] pb-24 md:pb-0">
      <Container>
        {/* TOP PRODUCT GRID */}
        <section className="py-10">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* LEFT: Gallery */}
            <div className="lg:col-span-6">
              <Reveal from="left">
                <div className="relative overflow-hidden rounded-[28px] bg-black/5 shadow-sm">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={images[active]}
                      alt={`Product image ${active + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Arrows */}
                  <button
                    type="button"
                    onClick={prevImg}
                    className="absolute left-5 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md hover:bg-white/95"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="text-[#FFAA01]" />
                  </button>

                  <button
                    type="button"
                    onClick={nextImg}
                    className="absolute right-5 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFAA01] shadow-md hover:brightness-95"
                    aria-label="Next image"
                  >
                    <ChevronRight className="text-white" />
                  </button>
                </div>

                {/* Thumbnails (scrollable) */}
                <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
                  {images.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={[
                        "relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-black/5",
                        idx === active
                          ? "ring-2 ring-[#FFAA01]"
                          : "ring-1 ring-black/10",
                      ].join(" ")}
                      aria-label={`Select image ${idx + 1}`}
                    >
                      <Image src={src} alt={`Thumb ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* RIGHT: Details */}
            <div className="lg:col-span-6">
              <Reveal from="right">
                <h1 className="text-3xl font-extrabold tracking-tight text-black/85 md:text-4xl">
                  MAXXON - Fuel System Cleaner
                </h1>

                <div className="mt-4">
                  <Stars />
                </div>

                <div className="mt-8 flex items-end gap-4">
                  <span className="text-3xl font-extrabold text-[#082D7E]">
                    <Money value={price} />
                  </span>
                  <span className="text-xl text-black/35 line-through">৳ {oldPrice}</span>
                </div>

                {/* SINGLE BUTTON (Order Now) */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={scrollToOrder}
                    className="w-full max-w-[320px] rounded-full bg-[#FFAA01] px-8 py-3 text-sm font-semibold text-black/80 shadow-sm hover:brightness-95"
                  >
                    Order Now
                  </button>
                </div>

                {/* Only Description dropdown */}
                <div className="mt-10 space-y-4">
                  <AccordionRow
                    title="Description"
                    open={descOpen}
                    onToggle={() => setDescOpen((s) => !s)}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ORDER FORM */}
        <section className="pb-16 pt-6">
          <Reveal from="up">
            <div
              ref={orderRef}
              className="scroll-mt-[96px] rounded-[28px] bg-white px-5 py-12 shadow-sm sm:px-8 md:px-12"
            >
              <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#082D7E] sm:text-5xl">
                Fill This Form to Order
              </h2>

              <div className="mt-14">
                {/* Your Products */}
                <h3 className="text-2xl font-extrabold text-[#082D7E]">Your Products</h3>

                <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                  <div className="grid grid-cols-3 gap-4 border-b border-black/10 px-6 py-4 text-sm font-semibold text-black/70">
                    <div>Product</div>
                    <div className="text-center">Quantity</div>
                    <div className="text-right">Price</div>
                  </div>

                  <div className="grid grid-cols-3 items-center gap-4 px-6 py-6">
                    <div className="text-sm font-semibold text-[#082D7E]">
                      Maxxon&nbsp; 250 ml
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center overflow-hidden rounded-md border border-black/20">
                        <button
                          type="button"
                          onClick={() => setQty(Math.max(1, qty - 1))}
                          className="h-9 w-9 bg-black/10 text-black/70 hover:bg-black/15"
                        >
                          −
                        </button>
                        <div className="h-9 w-10 bg-white text-center text-sm font-semibold leading-9">
                          {qty}
                        </div>
                        <button
                          type="button"
                          onClick={() => setQty(qty + 1)}
                          className="h-9 w-9 bg-black/10 text-black/70 hover:bg-black/15"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right text-sm font-extrabold text-[#082D7E]">
                      ৳ {(price * qty).toLocaleString("en-US")}
                    </div>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="mt-12">
                  <h3 className="text-2xl font-extrabold text-[#082D7E]">Shipping Details</h3>

                  <div className="mt-8 grid gap-8">
                    <div>
                      <label className="text-sm font-semibold text-black/80">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-3 h-14 w-full rounded-xl border border-[#082D7E]/40 bg-white px-4 text-sm outline-none focus:border-[#082D7E]"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-black/80">
                        Your Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="mt-3 h-14 w-full rounded-xl border border-[#082D7E]/40 bg-white px-4 text-sm outline-none focus:border-[#082D7E]"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-black/80">
                        Your Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mt-3 h-14 w-full rounded-xl border border-[#082D7E]/40 bg-white px-4 text-sm outline-none focus:border-[#082D7E]"
                      />
                    </div>

                    {/* Shipping options */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-3 rounded-md border border-black/20 bg-black/10 px-5 py-4">
                        <input
                          type="radio"
                          name="zone"
                          checked={zone === "inside"}
                          onChange={() => setZone("inside")}
                        />
                        <span className="text-sm font-semibold text-black/70">
                          Inside Dhaka (80 Taka)
                        </span>
                      </label>

                      <label className="flex items-center gap-3 rounded-md border border-black/20 bg-black/10 px-5 py-4">
                        <input
                          type="radio"
                          name="zone"
                          checked={zone === "outside"}
                          onChange={() => setZone("outside")}
                        />
                        <span className="text-sm font-semibold text-black/70">
                          Outside Dhaka (150 Taka)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Your Order */}
                <div className="mt-12">
                  <h3 className="text-2xl font-extrabold text-[#082D7E]">Your Order</h3>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
                    <div className="grid grid-cols-2 gap-4 border-b border-black/10 px-6 py-4 text-sm font-semibold text-black/70">
                      <div>Product</div>
                      <div className="text-center">Amount</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b border-black/10 px-6 py-5 text-sm">
                      <div className="font-semibold text-black/80">Maxxon&nbsp; 250 ml</div>
                      <div className="text-center font-extrabold text-black/80">
                        ৳ {(price * qty).toLocaleString("en-US")}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b border-black/10 px-6 py-5 text-sm">
                      <div className="font-semibold text-black/70">Subtotal</div>
                      <div className="text-center font-semibold text-black/70">
                        ৳ {(price * qty).toLocaleString("en-US")}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-b border-black/10 px-6 py-5 text-sm">
                      <div className="font-semibold text-black/70">Delivery Charge</div>
                      <div className="text-center font-semibold text-black/70">৳0</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 px-6 py-5 text-sm">
                      <div className="font-semibold text-black/80">Total</div>
                      <div className="text-center font-extrabold text-black/80">
                        ৳ {(price * qty).toLocaleString("en-US")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        console.log("confirm order", {
                          product: "Maxxon 250 ml",
                          qty,
                          name,
                          mobile,
                          address,
                          zone,
                        });
                      }}
                      className="rounded-full bg-[#FFAA01] px-12 py-4 text-sm font-semibold text-black/80 shadow-sm hover:brightness-95"
                    >
                      Confirm Order
                    </button>
                  </div>

                  {/* REVIEWS MOVED BELOW CONFIRM BUTTON */}
                  <div className="mt-16">
                    <Reveal from="up">
                      <div>
                        <h2 className="text-xl font-semibold text-black/80">
                          Rating &amp; Reviews
                        </h2>
                        <div className="mt-3 h-px w-full bg-black/15" />

                        <div className="mt-8 space-y-10">
                          {reviews.map((r, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="flex items-start gap-5">
                                <div className="h-14 w-14 overflow-hidden rounded-full bg-black/10">
                                  <div className="flex h-full w-full items-center justify-center font-extrabold text-black/60">
                                    AA
                                  </div>
                                </div>

                                <div className="flex-1">
                                  <p className="text-xl font-extrabold text-black/80">
                                    {r.name}
                                  </p>
                                  <div className="mt-2">
                                    <Stars />
                                  </div>

                                  <p className="mt-6 text-xl font-semibold text-black/80">
                                    {r.title}
                                  </p>
                                  <p className="mt-3 max-w-5xl text-sm leading-relaxed text-black/60">
                                    {r.text}
                                  </p>
                                </div>
                              </div>

                              {idx !== reviews.length - 1 && (
                                <div className="h-px w-full bg-black/10" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </Container>

      {/* MOBILE STICKY FOOTER (Order Now) */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-black/10 bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div className="text-sm font-extrabold text-[#082D7E]">
            <Money value={price} />
          </div>
          <button
            type="button"
            onClick={scrollToOrder}
            className="rounded-full bg-[#FFAA01] px-8 py-3 text-sm font-semibold text-black/80 shadow-sm hover:brightness-95"
          >
            Order Now
          </button>
        </div>
      </div>
    </main>
  );
}