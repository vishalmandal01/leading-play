import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import BottomBar from "./bottom_bar/BottomBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "leading Play",
  description: "Play and joy ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="relative  max-w-[1565px] mx-auto">
          <div className="sticky w-full lg:top-10 top-5 right-0 z-30">
            <Header />
          </div>
          <div className="">{children}</div>
          <BottomBar />
        </div> */}

        <div className="max-w-[1565px] mx-auto relative">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
