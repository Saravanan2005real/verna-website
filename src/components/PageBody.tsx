"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEntrance } from "@/components/EntranceProvider";

type PageBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageBody({ children, className }: PageBodyProps) {
  const { headerReady } = useEntrance();

  return (
    <motion.main
      className={cn(className, !headerReady && "min-h-screen")}
      initial={false}
      animate={
        headerReady
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 24 }
      }
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {headerReady ? children : null}
    </motion.main>
  );
}
