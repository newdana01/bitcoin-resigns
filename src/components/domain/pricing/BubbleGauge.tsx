import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BubbleGauge({ score }: { score: number }) {
  const [bubbles, setBubbles] = useState<number[]>([]);

  useEffect(() => {
    // 점수에 따라 버블 개수 증가
    const bubbleCount = Math.floor(score / 10) + 10;
    setBubbles(Array.from({ length: bubbleCount }, () => Math.random()));
  }, [score]);

  const getColor = (score: number) => {
    if (score < 30) return "from-red-400 to-red-600";
    if (score < 60) return "from-yellow-300 to-yellow-500";
    return "from-green-400 to-green-600";
  };

  return (
    <div
      className="relative w-full h-[40vh] bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl overflow-hidden 
    flex flex-col items-center justify-center shadow-lg"
    >
      {/* 점수 텍스트 */}
      <div className="z-10 text-white text-center">
        <h1 className="text-5xl font-extrabold">{score}</h1>
        <p className="uppercase tracking-wide text-sm text-gray-300 mt-2">
          {score < 20
            ? "Flat Soda"
            : score < 40
              ? "Low Fizz"
              : score < 60
                ? "Neutral"
                : score < 80
                  ? "Bubbly Mood"
                  : "Full of Fizz"}
        </p>
      </div>

      {/* 버블 애니메이션 */}
      {bubbles.map((_, i) => {
        const size = Math.random() * 40 + 20; // 버블 크기
        const left = Math.random() * 100; // x 위치
        const delay = Math.random() * 5; // 애니메이션 딜레이
        const duration = Math.random() * 10 + 10; // 애니메이션 속도

        return (
          <motion.div
            key={i}
            className={`absolute bottom-0 rounded-full bg-gradient-to-tr ${getColor(
              score,
            )} opacity-30`}
            style={{
              width: size,
              height: size,
              left: `${left}%`,
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-120%", opacity: 0.6 }}
            transition={{
              repeat: Infinity,
              duration: duration,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
