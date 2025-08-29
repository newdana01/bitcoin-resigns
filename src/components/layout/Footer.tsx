import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="px-4 py-6">
      <div className="pb-3 border-t border-slate-700"></div>
      <div>
        <button className="rounded-3xl py-0 focus:outline-none bg-slate-700">
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
