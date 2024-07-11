import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./SideBar";
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
        <div className="relative ">
          <div className="sticky lg:top-10 top-5  right-0 z-30">
            <Header />
          </div>
          <div className="lg:px-10 p-2 ">{children}</div>
            <BottomBar />
         
        </div>
      </body>
    </html>
  );
}
