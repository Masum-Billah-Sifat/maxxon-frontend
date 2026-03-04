"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { Search, SquareArrowOutUpRight } from "lucide-react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type BlogCard = {
  id: string;
  image: string;
  title: string;
};

export default function BlogsPage() {
  const allBlogs: BlogCard[] = useMemo(
    () => [
      { id: "1", image: "/maxxon/blogs/01.png", title: "Why Maxxon is the best gift for your car?" },
      { id: "2", image: "/maxxon/blogs/01.png", title: "Why Maxxon is the best gift for your car?" },
      { id: "3", image: "/maxxon/blogs/01.png", title: "Why Maxxon is the best gift for your car?" },
      { id: "4", image: "/maxxon/blogs/01.png", title: "Why Maxxon is the best gift for your car?" },
      { id: "5", image: "/maxxon/blogs/01.png", title: "Why Maxxon is the best gift for your car?" },
    ],
    []
  );

  const [query, setQuery] = useState("");

  const blogs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allBlogs;
    return allBlogs.filter((b) => b.title.toLowerCase().includes(q));
  }, [allBlogs, query]);

  const onSearch = () => {
    console.log("search blogs", query);
  };

  return (
    <main className="w-full bg-[#F5FAFE] pt-[76px]">
      <Container>
        <section className="py-12 sm:py-14">
          <Reveal from="down">
            <h1 className="text-center text-4xl font-semibold tracking-tight text-black/85 sm:text-5xl">
              Maxxon Blogs
            </h1>
          </Reveal>

          <Reveal from="up" delay={0.05}>
            <div className="mx-auto mt-8 w-full max-w-2xl">
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch();
                  }}
                  placeholder="Search Blogs..."
                  className="h-14 w-full rounded-full border border-black/20 bg-[#EFEFEF] px-7 pr-14 text-sm text-black/80 outline-none focus:border-black/30"
                />
                <button
                  type="button"
                  onClick={onSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5"
                  aria-label="Search"
                >
                  <Search size={20} className="text-black/75" />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {blogs.map((b, idx) => (
              <Reveal key={b.id} from={idx % 2 === 0 ? "up" : "down"} delay={idx * 0.03}>
                <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/10">
                  <div className="relative aspect-[16/9] w-full bg-black/5">
                    <Image src={b.image} alt="Blog cover" fill className="object-cover" />
                  </div>

                  <div className="relative bg-[#E6E6E6] px-5 py-4">
                    <p className="pr-10 text-sm font-medium leading-snug text-black/80">
                      {b.title}
                    </p>

                    <button
                      type="button"
                      onClick={() => console.log("open blog", b.id)}
                      className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-lg hover:bg-black/5"
                      aria-label="Open"
                    >
                      <SquareArrowOutUpRight size={18} className="text-black/70" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {blogs.length === 0 && (
            <div className="mt-12 text-center text-sm text-black/60">
              No blogs found.
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}