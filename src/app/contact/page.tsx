"use client";

import Reveal from "@/components/Reveal";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("contact submit", { fullName, email, subject, message });
  };

  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px]">
      <Container>
        <section className="py-12 sm:py-14">
          <Reveal from="down">
            <h1 className="text-center text-4xl font-semibold tracking-tight text-black/85 sm:text-5xl">
              Contact Us
            </h1>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <div className="mt-10 rounded-[32px] bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                {/* LEFT: FORM */}
                <div className="lg:col-span-7">
                  <Reveal from="left">
                    <h2 className="text-3xl font-extrabold text-[#082D7E] sm:text-4xl">
                      Send us a message
                    </h2>

                    <div className="mt-10 grid gap-8">
                      {/* name/email row */}
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label className="text-xs font-semibold text-black/60">
                            Full Name
                          </label>
                          <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="mt-3 h-14 w-full rounded-full border border-black/25 bg-white px-6 text-sm outline-none focus:border-[#082D7E]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-semibold text-black/60">
                            Email
                          </label>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-3 h-14 w-full rounded-full border border-black/25 bg-white px-6 text-sm outline-none focus:border-[#082D7E]"
                          />
                        </div>
                      </div>

                      {/* subject */}
                      <div>
                        <label className="text-xs font-semibold text-black/60">
                          Subject
                        </label>
                        <input
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="mt-3 h-14 w-full rounded-full border border-black/25 bg-white px-6 text-sm outline-none focus:border-[#082D7E]"
                        />
                      </div>

                      {/* message */}
                      <div>
                        <label className="text-xs font-semibold text-black/60">
                          Message
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="mt-3 min-h-[160px] w-full resize-none rounded-[26px] border border-black/25 bg-white px-6 py-4 text-sm outline-none focus:border-[#082D7E]"
                        />
                      </div>

                      {/* button */}
                      <div className="flex justify-center pt-4">
                        <button
                          type="button"
                          onClick={onSubmit}
                          className="rounded-full bg-[#FFAA01] px-12 py-3 text-sm font-semibold text-black/80 shadow-sm hover:brightness-95"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* RIGHT: INFO PANEL */}
                <div className="lg:col-span-5">
                  <Reveal from="right">
                    <div className="rounded-[28px] bg-gradient-to-b from-[#031A4D] to-[#082D7E] p-7 text-white shadow-md sm:p-8">
                      <h3 className="text-xl font-extrabold leading-snug">
                        Hi, We are always here
                        <br />
                        to help you!
                      </h3>

                      <div className="mt-7 space-y-5">
                        <div className="flex items-center gap-4 rounded-2xl bg-white/25 px-5 py-4">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <Phone size={18} />
                          </div>
                          <p className="text-sm font-semibold">+880 1764050429</p>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl bg-white/25 px-5 py-4">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <MapPin size={18} />
                          </div>
                          <p className="text-sm font-semibold leading-snug">
                            House-22, Road-2, Sector-9,
                            <br />
                            Uttara-1230, Dhaka
                          </p>
                        </div>

                        <div className="flex items-center gap-4 rounded-2xl bg-white/25 px-5 py-4">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                            <Mail size={18} />
                          </div>
                          <p className="text-sm font-semibold">
                            maxxonbangladesh@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className="mt-10">
                        <p className="text-xs font-semibold text-white/85">
                          Contact with us
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <a
                            href="#"
                            aria-label="Facebook"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 hover:bg-white/10"
                          >
                            <Facebook size={16} />
                          </a>
                          <a
                            href="#"
                            aria-label="Instagram"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 hover:bg-white/10"
                          >
                            <Instagram size={16} />
                          </a>
                          <a
                            href="#"
                            aria-label="YouTube"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 hover:bg-white/10"
                          >
                            <Youtube size={16} />
                          </a>
                          <a
                            href="#"
                            aria-label="LinkedIn"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/35 hover:bg-white/10"
                          >
                            <Linkedin size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </Container>
    </main>
  );
}