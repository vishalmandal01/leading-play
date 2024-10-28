"use client";

import React, { useState } from "react";
import { HelpIcon, PhoneIcon } from "../../public/SVG/CommonIcons";
import Link from "next/link";
import SideBar from "./SideBar";
import { BackWardIcon } from "../../public/SVG/Backward";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSideBar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="fixed lg:top-10 top-5 right-0 z-30 w-full">
      <div className=" flex items-center justify-between gap-3 lg:mx-10 mx-3  ">
        {pathname == "/onbord/sign-up" ||
        pathname == "/onbord/login" ||
        pathname == "/introduction" ? null : (
          <>
            <div className="flex items-center gap-3 ">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                className="sticky top-5 animate-spin cursor-pointer text-white hover:text-indigo-600"
                onClick={handleSideBar}
              >
                <path d="M5 8a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m7-7a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 14a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m7-7a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m-7-5a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m-7 7a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m14 0a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z" />
              </svg>

              <SideBar
                handleSideBar={handleSideBar}
                openSidebar={openSidebar}
              />
              {pathname !== "/mobile" && (
                <Link href={"/mobile"}>
                  <PhoneIcon className="hover:text-indigo-600 text-white cursor-pointer scale-75 hover:scale-100 " />
                </Link>
              )}
              {pathname != "/" ? (
                <Link href={"/"}>
                  <BackWardIcon className="hover:text-indigo-600 text-white cursor-pointer scale-75 hover:scale-100" />
                </Link>
              ) : null}
            </div>

            <div>
              <Link href="/help">
                <HelpIcon className="hover:text-indigo-600 text-white cursor-pointer scale-90 hover:scale-100" />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
