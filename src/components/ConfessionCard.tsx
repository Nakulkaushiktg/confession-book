import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";
import ConfessionQuestion from "./ConfessionQuestion";

const pages = [
  {
    id: "cover",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Heart className="w-20 h-20 text-primary fill-primary" />
        </motion.div>
        <h1 className="font-handwritten text-5xl sm:text-6xl text-primary text-center leading-tight">
          I Have Something<br />To Tell You...
        </h1>
        <p className="text-muted-foreground text-lg mt-4 font-display italic">
          tap to open →
        </p>
      </div>
    ),
  },
  {
    id: "page1",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <span className="text-4xl">🚇</span>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          I don't know if it's the right time to tell you all this… but I can't keep it inside anymore.
        </p>
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          I'm sorry if any of this hurts you.
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          When we first met on <span className="text-primary font-semibold">5th Feb</span> at the metro — you were wearing a white jersey with red lines and light blue jeans…
        </p>
        <p className="font-handwritten text-3xl text-primary mt-1">
          you caught my eyes ♥
        </p>
      </div>
    ),
  },
  {
    id: "page2",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <span className="text-4xl">✨</span>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          Spending time with you, talking to you — it all started feeling so right.
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          I don't know what you think of me. I know I have flaws…
        </p>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          But trust me — when it comes to loyalty and relationships,
        </p>
        <p className="font-handwritten text-3xl text-primary">
          I'm the real one 💫
        </p>
      </div>
    ),
  },
  {
    id: "page3",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <span className="text-4xl">🪷</span>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          I really love your vibe. I love your eyes. The way you speak…
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          In between, everything got messed up. But then…
        </p>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          When I saw you for the first time in a <span className="text-primary font-semibold">kurti with bindi</span> —
        </p>
        <p className="font-handwritten text-3xl text-primary">
          you got my eyes again 🌹
        </p>
      </div>
    ),
  },
  {
    id: "page4",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <span className="text-4xl">💕</span>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          I would've told you all this face to face… but I had no idea how you'd react.
        </p>
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          I don't even know if you think of me as good or bad…
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          I'm so emotional about this — I didn't want to cry in front of you.
        </p>
        <p className="font-handwritten text-3xl text-primary">
          so I'm telling you like this 🥺
        </p>
      </div>
    ),
  },
  {
    id: "page5",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Heart className="w-12 h-12 text-primary fill-primary" />
        </motion.div>
        <p className="font-handwritten text-4xl text-primary leading-snug">
          I really like you a lot
        </p>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          I started falling for you… and I'm still falling.
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          I will never let you down — in any condition. I will always be with you.
        </p>
        <p className="font-display text-lg italic text-primary font-semibold">
          If you give us a chance, you'll never regret it. I promise. 🤞
        </p>
      </div>
    ),
  },
  {
    id: "page6",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-5 px-8 text-center">
        <span className="text-4xl">🤝</span>
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          Whatever problems I have — I'll fix them. For you, and for myself.
        </p>
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          Tu bataegi, main sununga. Always.
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-lg italic text-foreground leading-relaxed">
          Whatever your answer is — it's accepted. If you need time, take it.
        </p>
        <p className="font-display text-base text-muted-foreground leading-relaxed">
          Saturday tak bata dena… or zyada time chahiye toh woh bhi le sakti hai.
        </p>
        <p className="font-handwritten text-2xl text-primary mt-2">
          Bas samne se batana, if you're comfortable ♥
        </p>
        <div className="w-16 h-px bg-primary/40 my-2" />
        <p className="font-display text-lg italic text-primary font-semibold">
          I am waiting for your answer… and what you think about me 🥺
        </p>
      </div>
    ),
  },
  {
    id: "question",
    content: null,
  },
];

const ConfessionCard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  const isLastPage = currentPage === pages.length - 1;

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      rotateY: d > 0 ? -15 : 15,
    }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (d: number) => ({
      x: d > 0 ? -300 : 300,
      opacity: 0,
      rotateY: d > 0 ? 15 : -15,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      {/* Spine effect */}
      <div className="relative w-full max-w-md">
        <div className="absolute left-0 top-4 bottom-4 w-3 bg-primary/20 rounded-l-md -translate-x-full" />
        <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-primary/10 rounded-l-sm -translate-x-[calc(100%+12px)]" />

        {/* Book card */}
        <div
          className="relative bg-card rounded-r-2xl rounded-l-sm overflow-hidden border-l-4 border-primary/30"
          style={{
            minHeight: 520,
            boxShadow: "var(--page-shadow)",
            perspective: "1200px",
          }}
        >
          {/* Page texture lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, hsl(var(--foreground)) 28px, hsl(var(--foreground)) 29px)",
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="w-full"
              style={{ minHeight: 520 }}
            >
              {isLastPage ? (
                <ConfessionQuestion />
              ) : (
                pages[currentPage].content
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-6">
            <button
              onClick={goPrev}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-secondary text-secondary-foreground disabled:opacity-30 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-1.5">
              {pages.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={isLastPage}
              className="p-2 rounded-full bg-secondary text-secondary-foreground disabled:opacity-30 transition-opacity"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfessionCard;
