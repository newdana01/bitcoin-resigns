import {
  BotMessageSquare,
  Bubbles,
  ChartCandlestick,
  Crown,
  Newspaper,
  WandSparkles,
  X,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  handleScrollTo: (section: "chart" | "whatif" | "news" | "community") => void;
};

export default function Sidebar({
  open,
  onClose,
  handleScrollTo,
}: SidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* 배경 오버레이 */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* 사이드바 */}
      <aside className="w-64 bg-white dark:bg-gray-900 h-full p-6">
        <div className="flex items-center justify-end mb-6">
          <button
            className="mb-3 hover:text-primary-orange dark:hover:text-primary-yellow bg-transparent hover:bg-transparent"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
              onClick={() => {
                handleScrollTo("chart");
              }}
            >
              <ChartCandlestick size={20} />
              <span>Bitcoin Price</span>
            </a>
          </li>
          <li>
            <a
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
              onClick={() => {
                handleScrollTo("chart");
              }}
            >
              <Bubbles size={20} />
              <span>How Bubbly?</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleScrollTo("whatif");
              }}
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
            >
              <WandSparkles size={20} />
              <span>What If?</span>
            </a>
          </li>
          <li>
            <a
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
              onClick={() => {
                handleScrollTo("news");
              }}
            >
              <Newspaper size={20} />
              <span>Quick News</span>
            </a>
          </li>
          <li>
            <a
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
              onClick={() => {
                handleScrollTo("news");
              }}
            >
              <BotMessageSquare size={20} />
              <span>Get Your Moves!</span>
            </a>
          </li>
          <li>
            <a
              className="dark:hover:text-primary-yellow font-semibold flex space-x-2 cursor-pointer"
              onClick={() => {
                handleScrollTo("community");
              }}
            >
              <Crown size={20} />
              <span>Top BTC Holders</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
