import {
  BotMessageSquare,
  Bubbles,
  ChartCandlestick,
  Newspaper,
  Speech,
  WandSparkles,
  X,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* 배경 오버레이 */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* 사이드바 */}
      <aside className="w-64 bg-gray-900 h-full p-6">
        <div className="flex items-center justify-end mb-6">
          <button className="mb-3 hover:text-primary-yellow" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <ChartCandlestick size={20} />
              <span>Bitcoin Price</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <Bubbles size={20} />
              <span>How Bubbly?</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <WandSparkles size={20} />
              <span>What If?</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <Newspaper size={20} />
              <span>Satoshi Scope</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <BotMessageSquare size={20} />
              <span>Get Your Moves!</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-yellow font-semibold flex space-x-2"
            >
              <Speech size={20} />
              <span>Coin Voices</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
