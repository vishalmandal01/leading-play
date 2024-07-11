import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
import Link from "next/link";

export default function ToolSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto  w-32 h-32 bg-indigo-600 text-center rounded-full pt-10">
        LOGO
      </div>
      <h1 className="text-center py-4 ">v1.0</h1>
      {/* PROGRESS BAR  */}
      <ProgressBar />
      <div className="w-full  my-14">
        <h4 className="font-bold  text-5xl uppercase ">
          days : <span className="text-3xl font-mono font-medium text-indigo-400">07</span>
        </h4>
        <h4 className="font-normal font-mono text-2xl uppercase my-3">
          Task completed : <span className="text-3xl font-medium text-indigo-400">07</span>
        </h4>
        <h4 className="font-normal font-mono text-2xl uppercase ">
          money🤑: <span className="text-3xl font-medium text-indigo-400">$ 07</span>
        </h4>
      </div>
      {/* BUTTON  */}
      <Link href={"https://www.patreon.com/Shydeploper"} target="_blank">
        <div className="bg-indigo-600 hover:bg-indigo-700 p-2 my-1 flex gap-2 justify-center items-center rounded-[10px] w-[200px]">
          <Image
            src={"/image/appIcon/pateron.png"}
            alt="pateron_icon"
            height={25}
            width={25}
            className=""
          />
          <h3 className="  uppercase">PATERON</h3>
        </div>
      </Link>
      <Link href={"https://www.subscribestar.com/shydevloper"} target="_blank">
        <div className="bg-indigo-600 hover:bg-indigo-700 p-2 my-1 flex gap-2 justify-center items-center rounded-[10px] w-[200px]">
          <Image
            src={"/image/appIcon/subscribestar.png"}
            alt="pateron_icon"
            height={25}
            width={25}
            className=""
          />
          <h3 className=" uppercase ">subscribestar</h3>
        </div>
      </Link>
      <p className="text-pink-600 text-center py-2">
        Support this project and get early access
      </p>
    </div>
  );
}
