"use client";

import React, { useEffect, useState } from "react";
import { HeartIcon } from "../../../public/SVG/CommonIcons";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate progress increase
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 1 : 100
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const getColor = () => {
    const red = Math.round(255 - (progress * 255) / 100);
    const green = Math.round((progress * 255) / 100);
    return `rgb(${red},${green},0)`;
  };
let health =0
  if (progress <= 8) {
    health=0
  }else{
    health = progress-10
  }
  return (
    <div className="w-full">
      <div className="flex h-2  overflow-hidden  bg-white/20">
        <div
          style={{ width: `${progress}%`, background: getColor() }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
        ></div>
      </div>
      <p
        className="text-sm font-medium font-mono "
        style={{ marginLeft: `${health}%`, color: getColor() }}
      >
        {` ${progress}%`}
      </p>
    </div>
  );
}
