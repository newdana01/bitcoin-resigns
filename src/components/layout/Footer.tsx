import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import useDarkmode from "../../common/hooks/useDarkmode";

export default function Footer() {
  const [darkMode, toggleDarkMode] = useDarkmode();

  return (
    <div className="px-4 py-6">
      <div className="pb-3 border-t border-slate-300 dark:border-slate-700"></div>
      <div>
        <button
          className="rounded-3xl py-0 bg-slate-700 hover:bg-slate-700"
          onClick={toggleDarkMode}
        >
          <div className="rounded-full bg-white p-1 text-slate-700">
            {darkMode ? <Moon /> : <Sun />}
          </div>
        </button>
      </div>
      <div className="text-sm font-normal">
        <div className="flex justify-center divide-x mb-3">
          <a href="#" className="px-3 hover:text-primary-orange">
            Contact
          </a>
          <a href="#" className="px-3 hover:text-primary-orange">
            Donate via PayPal
          </a>
        </div>
        <p className="text-slate-700 text-center">
          Copyright ⓒ 2025. newdana01 All rights reserved.
        </p>
      </div>
    </div>
  );
}
