import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import ChartSection from "../domain/pricing/ChartSection";
import WhatIf from "../domain/whatif/WhatIf";
import NewsSection from "../domain/news/NewsSection";
import Community from "../domain/community/Community";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const scrollRef = useRef<HTMLElement[]>([]);

  const handleScrollTo = (
    section: "chart" | "whatif" | "news" | "community",
  ) => {
    const refs = { chart: 0, whatif: 1, news: 2, community: 3 };
    const index = refs[section];
    if (scrollRef.current[index]) {
      scrollRef.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-primary-dark dark:text-white w-full min-h-screen">
      {/* 상단 네비게이션 */}
      <Navbar
        handleScrollTo={handleScrollTo}
        onMenuClick={() => setSidebarOpen(true)}
      />

      {/* 모바일/패드 사이드바 */}
      <Sidebar
        handleScrollTo={handleScrollTo}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6">
        <section
          ref={(el) => {
            scrollRef.current[0] = el!;
          }}
        >
          <ChartSection />
        </section>
        <section
          ref={(el) => {
            scrollRef.current[1] = el!;
          }}
        >
          <WhatIf />
        </section>
        <section
          ref={(el) => {
            scrollRef.current[2] = el!;
          }}
        >
          <NewsSection />
        </section>
        <section
          ref={(el) => {
            scrollRef.current[3] = el!;
          }}
        >
          <Community />
        </section>
      </main>
      <Footer />
    </div>
  );
}
