"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function ApartmentScreen() {
  const [showGame, setShowGame] = useState("Home");
  const handlePlace = (id) => {
    setShowGame(id);
  };
  const filteredShow = apartmentList.filter((item) => item.title === showGame);
  // console.log("filteredShow ", filteredShow);
  return (
    <div className="relative h-full">
      {filteredShow.map((apartment, i) => {
        return (
          <div key={i} className=" pt-6  px-3">
            <div className=" pb-[200px]">
              <Image
                alt={apartment.title}
                src={apartment.img}
                height={900}
                width={900}
                className=" mx-auto "
                style={{ height: apartment.height, width: apartment.width }}
                // className={` object-cove`}
              />
              <p className="text-center mx-auto my-4 lg:text-[22px]">
                {apartment.seen}
              </p>
            </div>

            <div className="flex justify-center w-full items-center">
              <div className="list flex items-center justify-center fixed bottom-3 ">
                {apartment?.show?.map((imgs, i) => {
                  return imgs?.link ? (
                    <Link
                      key={i}
                      className="item text-center border-indigo-600/20 pb-1 m-0.5 border-2 cursor-pointer"
                      href={imgs?.link}
                    >
                      <Image
                        src={imgs?.img}
                        alt={imgs?.img}
                        height={1000}
                        width={1000}
                        className="w-[120px] h-[100px]"
                      />
                      <p className="text-[12px] py-1">{imgs.title}</p>
                    </Link>
                  ) : (
                    <div
                      key={i}
                      className="item text-center border-indigo-600/20 pb-1 m-0.5 border-2 cursor-pointer"
                      onClick={() => handlePlace(imgs.title)}
                    >
                      <Image
                        src={imgs?.img}
                        alt={imgs?.img}
                        height={1000}
                        width={1000}
                        className="w-[120px] h-[100px]"
                      />
                      <p className="text-[12px] py-1">{imgs.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const apartmentList = [
  {
    title: "Home",
    img: "/image/home/apartment.png",
    height: "362px",
    width: "390px",
    seen: "This is your home . In the sense you live here and sleep here. The Apartment belongs to your landlord after your father passed away. There are not the best conditions to live here.",
    show: [
      { title: "Bed Room", img: "/image/home/BadRoom.png" },
      { title: "Bath Room", img: "/image/home/Bathroom.png" },
      { title: "road", img: "/image/appIcon/instagram.png" },
    ],
  },
  {
    title: "Bed Room",
    height: "400px",
    width: "700px",
    img: "/image/home/BadRoom.png",
    seen: "This is your Bed Room. In the sense you live here and sleep here. The Apartment belongs to your landlord after your father passed away. There are not the best conditions to live here.",
    show: [
      { title: "Home", img: "/image/home/apartment.png" },
      { title: "Bath Room", img: "/image/home/Bathroom.png" },
      { title: "sleep", img: "/image/appIcon/instagram.png" },
      { title: "back", img: "/image/appIcon/instagram.png" },
    ],
  },
  {
    title: "Bath Room",
    height: "400px",
    width: "700px",
    img: "/image/home/Bathroom.png",
    seen: "This is your Bed Room. In the sense you live here and sleep here. The Apartment belongs to your landlord after your father passed away. There are not the best conditions to live here.",
    show: [
      { title: "Home", img: "/image/home/apartment.png" },
      { title: "Bed Room", img: "/image/home/BadRoom.png" },
      { title: "pc", img: "/image/appIcon/instagram.png" },
      { title: "sleep", img: "/image/appIcon/instagram.png" },
      { link: "/", title: "go link", img: "/image/appIcon/instagram.png" },
    ],
  },
];
