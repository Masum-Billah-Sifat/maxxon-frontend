"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "left" | "right" | "up" | "down";

function getOffset(dir: Dir) {
  if (dir === "left") return { x: -40, y: 0 };
  if (dir === "right") return { x: 40, y: 0 };
  if (dir === "down") return { x: 0, y: -40 };
  return { x: 0, y: 40 }; // up
}

export default function Reveal({
  children,
  from = "up",
  delay = 0,
}: {
  children: ReactNode;
  from?: Dir;
  delay?: number;
}) {
  const off = getOffset(from);

  return (
    <motion.div
      initial={{ opacity: 0, ...off }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}