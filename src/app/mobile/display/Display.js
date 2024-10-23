"use client";
import React, { useState } from "react";
import HomeDisplay from "./HomeDisplay";
import InstagramScreen from "./application/instagram/InstagramScreen";
import MessageScreen from "./application/MessageScreen";
import SettingScreen from "./application/SettingScreen";
import CallScreen from "./application/CallScreen";
import EscortScreen from "./application/escort/EscortScreen";

export default function Display() {
  const [backButton, setBackButton] = useState(false);
  const [instagramClick, setInstagramClick] = useState(false);
  const [callClick, setCallClick] = useState(false);
  const [settingClick, setSettingClick] = useState(false);
  const [messageClick, setMessageClick] = useState(false);
  const [escortClick, setEscortClick] = useState(false);
  const handleBackButton = () => {
    setBackButton(!backButton);
    setInstagramClick(false);
    setCallClick(false);
    setSettingClick(false);
    setMessageClick(false);
    setEscortClick(false);
  };
  return (
    <>
      {/* DISPLAY  */}
      {!instagramClick && !callClick && !settingClick && !messageClick && (
        <HomeDisplay
          setInstagramClick={setInstagramClick}
          setCallClick={setCallClick}
          setSettingClick={setSettingClick}
          setMessageClick={setMessageClick}
          setEscortClick={setEscortClick}
        />
      )}

      {instagramClick && <InstagramScreen />}
      {callClick && <CallScreen />}
      {settingClick && <SettingScreen />}
      {messageClick && <MessageScreen />}
      {escortClick && <EscortScreen />}

      {/* MOBILE BUTTON  */}
      <div className=" flex gap-11 absolute  text-center bottom-[3.5%]  ">
        <div
          onClick={handleBackButton}
          className="bg-black/5 w-[30px] cursor-pointer text-transparent rounded-[5px]"
        >
          t
        </div>
        <div
          onClick={handleBackButton}
          className="bg-black/5 w-[60px] cursor-pointer text-transparent rounded-[5px]"
        >
          h
        </div>
        <div
          onClick={handleBackButton}
          className="bg-black/5 w-[30px] cursor-pointer text-transparent rounded-[5px]"
        >
          b
        </div>
      </div>
    </>
  );
}
