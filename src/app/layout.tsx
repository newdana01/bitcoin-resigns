import type { Metadata } from "next";
import { ReactNode } from "react";
import "./global.css";

export const metadata: Metadata = {
  title: "Bitcoin Resigns",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
