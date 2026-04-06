import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ChevronRight, ChevronLeft } from "lucide-react";

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
        <h1 className="font-handwritten text-6xl text-primary text-center leading-tight">
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
      <div className="flex flex-col items-center justify-center h-full gap-6 px-10 text-center">
        <p className="font-display text-2xl italic text-foreground leading-relaxed">
          Every time I see you, my heart skips a beat...
        </p>
        <span className="font-handwritten text-5xl text-primary mt-2">💕</span>
      </div>
    ),
  },
  {
    id: "page2",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-6 px-10 text-center">
        <p className="font-display text-2xl italic text-foreground leading-relaxed">
          I've been keeping this feeling inside for too long...
        </p>
        <span className="font-handwritten text-5xl text-primary mt-2">🌹</span>
      </div>
    ),
  },
  {
    id: "page3",
    content: (
      <div className="flex flex-col items-center justify-center h-full gap-6 px-10 text-center">
        <p className="font-display text-2xl italic text-foreground leading-relaxed">
          And I just wanted to say...
        </p>
        <p className="font-handwritten text-5xl text-primary mt-4">
          I like you ♥
        </p>
      </div>
    ),
  },
  {
    id: "question",
    content: null, // handled separately for interactivity
  },
];

const ConfessionCard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answered, setAnswered] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

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

  const dodgeNo = () => {
    setNoButtonPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

  const isLastPage = currentPage === pages.length - 1;

  const questionPage = (
    <div className="flex flex-col items-center justify-center h-full gap-8 px-10 text-center">
      {!answered ? (
        <>
          <p className="font-handwritten text-5xl text-primary">
            Do you like me too?
          </p>
          <div className="flex gap-6 items-center relative mt-4">
            <button
              onClick={() => setAnswered(true)}
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-handwritten text-2xl shadow-lg hover:scale-110 transition-transform"
            >
              Yes! 💖
            </button>
            <motion.button
              animate={noButtonPos}
              onMouseEnter={dodgeNo}
              onTouchStart={dodgeNo}
              className="px-10 py-4 bg-muted text-muted-foreground rounded-full font-handwritten text-2xl shadow hover:scale-110 transition-transform"
            >
              No 😢
            </motion.button>
          </div>
          <p className="text-muted-foreground text-sm font-display italic mt-2">
            (hint: there's only one real option 😏)
          </p>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-7xl">🎉</span>
          <p className="font-handwritten text-5xl text-primary">Yay!!!</p>
          <p className="font-display text-xl text-foreground italic">
            You just made me the happiest person ♥
          </p>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <Heart className="w-16 h-16 text-primary fill-primary" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, rotateY: d > 0 ? -15 : 15 }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, rotateY: d > 0 ? 15 : -15 }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="relative w-full max-w-md">
        {/* Book card */}
        <div
          className="relative bg-card rounded-2xl overflow-hidden"
          style={{
            minHeight: 500,
            boxShadow: "var(--page-shadow)",
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full"
              style={{ minHeight: 500 }}
            >
              {isLastPage ? questionPage : pages[currentPage].content}
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

            {/* Page dots */}
            <div className="flex gap-2">
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
