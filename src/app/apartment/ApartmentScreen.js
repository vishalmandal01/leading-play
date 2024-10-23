"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function ApartmentScreen() {
  const [isView, setIsView] = useState("back");
  const [direction, setDirection] = useState("left");

  const data = apartmentList.find((item) => item.title === isView);

  const handleView = (view) => {
    if (view === "back") {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setIsView(view);
  };

  return (
    <>
      {data && (
        <div
          className={`${
            direction === "left"
              ? "animate-slide-in-left"
              : "animate-slide-in-right"
          }`}
        >
          <ApartmentViewer
            img={data.img}
            seen={data.seen}
            data={data.show}
            onClick={(title) => handleView(title)}
          />
        </div>
      )}
    </>
  );
}

function ApartmentViewer({ img, seen, data, onClick }) {
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-0">
      <Image alt={img} src={img} height={500} width={500} />
      <p className="text-center mx-auto my-4 lg:text-[32px]">{seen}</p>

      <div className="list flex items-center justify-center  py-5">
        {data.map((imgs, i) => {
          return (
            <div
              key={i}
              className="item text-center border-white p-1 border-2"
              onClick={() => onClick(imgs.title)}
            >
              <Image src={imgs?.img} alt={imgs?.img} height={100} width={80} />
              <p>{imgs.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const apartmentList = [
  {
    title: "back",
    img: "/image/appIcon/instagram.png",
    seen: "This is your  . In the sense you live here and sleep here. The Apartment belongs to your landlord after your father passed away. There are not the best conditions to live here.",
    show: [
      { title: "bedRoom", img: "/image/appIcon/instagram.png" },
      { title: "bathRoom", img: "/image/appIcon/instagram.png" },
      { title: "road", img: "/image/appIcon/instagram.png" },
    ],
  },
  {
    title: "bedRoom",
    img: "/image/appIcon/instagram.png",
    seen: "You are in your room. The place gives you the creeps, maybe a general overhaul would be a good idea?",
    show: [
      { title: "bathRoom", img: "/image/appIcon/instagram.png" },
      { title: "pc", img: "/image/appIcon/instagram.png" },
      { title: "sleep", img: "/image/appIcon/instagram.png" },
      { title: "back", img: "/image/appIcon/instagram.png" },
    ],
  },
];
