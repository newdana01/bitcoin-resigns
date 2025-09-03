import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import useDarkmode from "../../common/hooks/useDarkmode";

export default function Footer() {
  const [darkMode, toggleDarkMode] = useDarkmode();

  return (
    <div className="px-4 py-6">
      <div className="pb-3 border-t border-slate-300 dark:border-slate-700"></div>
      <div className="my-2 flex justify-center md:justify-start">
        <button
          className={`flex items-center gap-2 px-2 py-1 rounded-full transition-colors ${
            darkMode
              ? "bg-primary-orange text-white"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={toggleDarkMode}
        >
          <div className="rounded-full bg-white p-1 text-slate-700">
            {darkMode ? <Moon /> : <Sun />}
          </div>
          <span className="text-sm font-medium">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
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
