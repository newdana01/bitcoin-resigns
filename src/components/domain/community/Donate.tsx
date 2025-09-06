import SectionName from "../../../common/components/SectionName";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CoinParticle = {
  id: string;
  x: number;
  y: number;
};

export default function Donate() {
  const [particles, setParticles] = useState<CoinParticle[]>([]);
  const [scale, setScale] = useState(1);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setScale(1.2);
    setTimeout(() => setScale(1), 150);
    setCount((prev) => prev + 1);

    const newParticle = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      y,
    };
    setParticles((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 1000);
  };

  useEffect(() => {
    if (count > 10) setVisible(true);
  }, [count]);

  return (
    <div>
      <SectionName name="Click to mine!" />
      <div
        className="relative flex justify-center items-center h-[50vh] bg-gradient-to-b from-slate-200 to-slate-100
        bg-center bg-no-repeat bg-cover rounded-2xl shadow-xl
      dark:from-slate-900 dark:to-slate-800 
      "
      >
        <div className="relative cursor-pointer" onClick={handleClick}>
          <motion.img
            src="/images/mine.png"
            alt="Bitcoin"
            animate={{ scale }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="w-40 cursor-pointer select-none"
            draggable="false"
          />

          <AnimatePresence>
            {particles.map((p) => (
              <motion.img
                key={p.id}
                src="/images/coin-small.png"
                alt="coin particle"
                className="absolute w-8 h-8 pointer-events-none"
                style={{ left: p.x - 16, top: p.y - 16 }}
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 0, y: 50, scale: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ))}
          </AnimatePresence>
        </div>
        {visible && (
          <motion.div
            className="absolute text-center top-1/2 left-1/2
          bg-white text-slate-700 bg-opacity-90 rounded-xl shadow-lg mb-4 p-4 w-64"
            initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-lg font-semibold">
              🚀 Thanks for your clicks! Support the developer?
            </p>
            <button
              onClick={() => window.open("https://buymeacoffee.com/newdana019")}
              className="mt-2 px-4 py-2 bg-yellow-400 rounded-xl font-bold hover:bg-yellow-500"
            >
              🍺 Buy me a beer
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
