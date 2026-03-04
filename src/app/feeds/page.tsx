"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Heart, MessageCircle, Share2 } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type Post = {
  id: string;
  image: string;
  caption: string;
};

export default function FeedsPage() {
  const posts: Post[] = [
    // {
    //   id: "1",
    //   image: "/maxxon/feeds/01.png",
    //   caption: "Why Maxxon is the best gift for your car?",
    // },
    {
      id: "2",
      image: "/maxxon/feeds/02.png",
      caption: "Why Maxxon is the best gift for your car?",
    },
    {
      id: "3",
      image: "/maxxon/feeds/03.png",
      caption: "Why Maxxon is the best gift for your car?",
    },
    {
      id: "4",
      image: "/maxxon/feeds/04.png",
      caption: "Why Maxxon is the best gift for your car?",
    },
  ];

  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px]">
      <Container>
        <section className="py-12 sm:py-14">
          <Reveal from="down">
            <h1 className="text-center text-3xl font-semibold tracking-tight text-black/85 sm:text-4xl">
              Social Media Posts
            </h1>
          </Reveal>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, idx) => (
              <Reveal key={p.id} from={idx % 2 === 0 ? "up" : "down"} delay={idx * 0.04}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                  <div className="relative aspect-[4/3] w-full bg-black/5">
                    <Image src={p.image} alt="Social post" fill className="object-cover" />
                  </div>

                  <div className="bg-[#E6E6E6] px-5 py-4">
                    <p className="text-sm font-medium text-black/80">{p.caption}</p>

                    <div className="mt-4 flex items-center gap-6 text-black/70">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center hover:text-black"
                        onClick={() => console.log("like", p.id)}
                        aria-label="Like"
                      >
                        <Heart size={18} />
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center hover:text-black"
                        onClick={() => console.log("comment", p.id)}
                        aria-label="Comment"
                      >
                        <MessageCircle size={18} />
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center hover:text-black"
                        onClick={() => console.log("share", p.id)}
                        aria-label="Share"
                      >
                        <Share2 size={18} />
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}