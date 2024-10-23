"use client";
import BorderButton from "@/Components/BorderButton";
import Button from "@/Components/Button";
import ButtonGradient from "@/Components/ButtonGradient";
import WarningModal from "@/Components/WarningModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function HomePage() {
  const [showWarning, setShowWarning] = useState(true);

  const handleClose = () => {
    setShowWarning(false);
    localStorage.setItem("warningAcknowledged", "true");
  };
  return (
    <div className="pb-16">
      {showWarning && !localStorage.getItem("warningAcknowledged") && (
        <WarningModal onClose={handleClose} />
      )}

      <>
        <div className="bg-gradient-to-r from-indigo-500 to-pink-600  flex justify-center items-center rotate-1 ">
          <div className="w-full bg-[#060c21] flex flex-col gap-2 justify-center items-center -rotate-1 p-3 lg:p-6 ">
            <h3 className="">
              Hello friends, I am shydevloper, welcome to Leadplyer, One day you
              are Jerking while watching a porn movie.
            </h3>
            <Image
              alt="joni bhai"
              src={"/image/appIcon/instagram.png"}
              height={500}
              width={500}
            />
            <p>
              ⚪ After jerking off you lay down to bed and
              thnking...............
            </p>
            <p> ⚪ You have masturbated for the second time in a day</p>
          </div>
        </div>

        {messageList.map((game, i) => {
          return (
            <div key={i}>
              <p className="py-3 ">{game?.alerts}</p>
              <div className="container my-6 lg:my-10">
                <div className="box">
                  <div className="content w-full flex ">
                    <div className="tape"></div>
                    {/* <h2>{game.id}</h2> */}
                    <div className="flex gap-2 lg:gap-4 justify-center">
                      <Image
                        alt={`user ${i}`}
                        src={"/SVG/user.svg"}
                        height={100}
                        width={100}
                        className="rounded-lg bg-white "
                      />
                      <div>
                        <h3>{game?.title}</h3>
                        <p>{game.message}</p>
                        {/* <a href="#">Read more...</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <p className="py-1">⚪ You Clicked and open the app and saw</p>
        <p className="py-1">⚪ Text on phone</p>
        <p className="py-1">
          ⚪ You are chosen. Here you can fulfill your dreams.
        </p>
        <p className="py-1">
          ⚪ You have to complete the common challenges given in this app
        </p>
        <p className="py-1 pb-10">
          ⚪ Do you want to participate in this game?
        </p>

        {/* <Button title={"Manvi"} />
        <ButtonGradient title={"Parisha"} /> */}

        {/* <BorderButton title={"No"} /> */}
        <ButtonGradient key={() => (window.location.href = "/")} title={"No"} />
        <Link href={"/apartment"}>
          {" "}
          <ButtonGradient title={"Yes"} />
        </Link>
      </>
    </div>
  );
}

const messageList = [
  {
    id: "01",

    title: "You",
    message:
      "I am a worthless person who wastes time watching porn all day, I have completed my studies in which I am not even good.",
  },
  {
    id: "02",

    title: "You",
    message: "i do Nothing but  watch porn, jerk off, and play video games.",
  },

  {
    id: "03",

    title: "You",
    message: "Another notice about unpaid bills",
    alerts: "Notificaton sound coming from phone",
  },
  {
    id: "04",

    title: "You",
    message: "Huh? This app just Installing Itself..,Have i been hacked?",
    alerts: "You Picked the phone.and see an unknown app just installing...",
  },
  {
    id: "05",

    title: "You",
    message: "Wait,What? The app Is called “Money And Women”",
  },
];
