import type { ReactNode } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col bg-white dark:bg-primary-dark dark:text-white w-full min-h-screen">
      {/* 상단 네비게이션 */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* 모바일/패드 사이드바 */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
