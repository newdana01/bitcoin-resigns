import { Menu } from "lucide-react";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="w-full dark:text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <div className="text-xl font-bold mr-10">
          <img src="/images/logo.png" alt="logo" className="w-10 h-auto" />
        </div>

        {/* 데스크탑 네비게이션 */}
        <div className="hidden lg:flex flex-1 justify-start">
          <nav className="hidden lg:flex space-x-6">
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              Bitcoin Price
            </a>
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              How Bubbly?
            </a>
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              What If?
            </a>
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              Quick News
            </a>
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              Get Your Moves
            </a>
            <a
              href="#"
              className="dark:hover:text-primary-yellow font-semibold"
            >
              Top BTC Holders
            </a>
          </nav>
        </div>

        {/* 모바일/패드 햄버거 버튼 */}
        <button
          className="lg:hidden p-2 rounded hover:text-primary-orange dark:hover:text-primary-yellow bg-transparent hover:bg-transparent"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
