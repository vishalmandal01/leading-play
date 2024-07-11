"use client";
import ScrollButton from "@/components/ScrollButton";
import { usePathname } from "next/navigation";
import React from "react";

export default function BottomBar() {
  const pathname = usePathname();
  return (
    <>
      {(pathname !== "/mobile" && pathname !=="/help"&& pathname !=="/introduction"&& pathname !=="/onbord/sign-up"&& pathname !=="/onbord/login") &&(
        <div className="sticky bg-indigo-950/70 backdrop-blur-[2px] bottom-10 md:bottom-4 mx-0 md:mx-5 lg:mx-10  right-0 z-20 h-[130px] md:h-[160px] rounded-[5px]">
          <ScrollButton>
            {[...Array(100)].map((item, i) => {
              return (
                <div
                  key={i}
                  className="border-2 border-indigo-700 p-10 h-full mx-2 text-lg font-bold"
                >
                  {i}
                </div>
              );
            })}
          </ScrollButton>
        </div>
      )}
    </>
  );
}

const homeList = [
  { img: "", title: "1", link: "" },
  { img: "", title: "2", link: "" },
  { img: "", title: "3", link: "" },
  { img: "", title: "4", link: "" },
  { img: "", title: "4", link: "" },
  { img: "", title: "4", link: "" },
  { img: "", title: "4", link: "" },
  { img: "", title: "4", link: "" },
];
