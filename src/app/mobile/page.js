import Image from "next/image";
import React from "react";
import Display from "./display/Display";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center relative pt-2 h-[100%] ">
      <Image
        src={"/image/mobileBody.png"}
        height={700}
        width={700}
        alt="mobile"
        className="w-[340px] h-max  "
      />
      {/* MOBILE DISPLAY  */}

      <Display />
    </div>
  );
}
