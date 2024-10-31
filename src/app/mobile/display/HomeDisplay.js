import React from "react";
import {
  CallIcon,
  MessageIcon,
  PhoneIcon,
  SettingIcon,
} from "../../../../public/SVG/CommonIcons";

import Image from "next/image";

export default function HomeDisplay({
  setInstagramClick,
  setCallClick,
  setSettingClick,
  setMessageClick,
  setEscortClick,
}) {
  return (
    <div
      className=" flex flex-col justify-between w-[313px] h-[550px] absolute mt-1.5 bg-slate-400"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/16711.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid grid-cols-4 gap-3 text-center px-2 mt-10 ">
        <div className=" flex flex-col gap-1 items-center justify-center col-span-1 text-blue-600 my-2 cursor-pointer">
          <PhoneIcon />
          <p className="col-span-1 text-[10px] text-indigo-600">App </p>
        </div>
        <div
          onClick={() => setInstagramClick(true)}
          className=" flex cursor-pointer flex-col gap-1 items-center justify-center col-span-1 text-blue-600 my-2 "
        >
          <Image
            src={"/image/appIcon/instagram.png"}
            height={50}
            width={50}
            alt="instagram"
            className="h-[35px] w-[35px] rounded-full"
          />
          <p className="col-span-1 text-[10px] text-indigo-600">Instagram </p>
        </div>

        <div
          onClick={() => setEscortClick(true)}
          className=" flex cursor-pointer flex-col gap-1 items-center justify-center col-span-1 text-blue-600 my-2 "
        >
          <Image
            src={"/image/appIcon/instagram.png"}
            height={50}
            width={50}
            alt="instagram"
            className="h-[35px] w-[35px] rounded-full"
          />
          <p className="col-span-1 text-[10px] text-indigo-600">Escort </p>
        </div>

        <div className="border  border-gray-200 my-2 flex items-center justify-center text-white">
          +
        </div>
      </div>

      {/* FUNCTION BUTTON ON THE BOTTOM SECTION  */}
      <div className="flex justify-evenly gap-4 text-white p-2 ">
        <MessageIcon
          onClick={() => setMessageClick(true)}
          className="w-[40px] h-[40px] p-2 bg-blue-800/80 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-800 "
        />
        <CallIcon
          onClick={() => setCallClick(true)}
          className="w-[40px] h-[40px] p-2 bg-blue-800/80 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-800 "
        />
        <SettingIcon
          onClick={() => setSettingClick(true)}
          className="w-[40px] h-[40px] p-2 bg-blue-800/80 flex justify-center items-center rounded-full cursor-pointer hover:bg-blue-800 "
        />
      </div>
    </div>
  );
}
