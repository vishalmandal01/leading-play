import Image from "next/image";
import React from "react";
const ProductCard = ({ image, title, price, rating }) => {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (min * 0.5));
  }
  const height = getRandomNumber(100, 350);
  const widthHeightRation = height / 275;
  const galleryHeight = Math.ceil(250 * widthHeightRation);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;
  console.log(
    "height ---> ",
    height,
    widthHeightRation,
    galleryHeight,
    photoSpans
  );

  return (
    <div
      className={`relative  overflow-hidden bg-gray-200  rounded-xl`}
      style={{ gridRow: `span ${height}` }}
    >
      <Image
        className=" object-center ]"
        src={image}
        alt={title}
        height={height}
        width={200}
        // fill={true}
        sizes="127px"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default function EscortScreen() {
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min * 0.2)) + min;
  }

  return (
    <div className="bg-white px-2 flex flex-col w-[313px] h-[550px] absolute mt-1.5 overflow-scroll scroll-bar-hide">
      <div className="flex justify-between items-center py-2 ">
        <h3 className="font-bold text-[14px]">Hello, Welcome 👋</h3>
        <div className="h-[35px] w-[35px] bg-indigo-600 rounded-full "></div>
      </div>

      {/* <div className="bg-rose-300">
        {[...Array(100)].map((_, i) => {
          return (
            <div key={i}>
              <Image src={`https://picsum.photos/275/275?random=${i}`} />
            </div>
          );
        })}
      </div> */}
      <div className=" grid grid-cols-2 auto-rows-[10px] gap-1 mb-2">
        {[...Array(10)].map((product, index) => {
          const randomNumber = getRandomNumber(200, 350);
          console.log(
            `https://picsum.photos/275/${randomNumber}?random=${index}`
          );
          return (
            <ProductCard
              key={index}
              image={`https://picsum.photos/275/${randomNumber}?random=${index}`}
              title={"Ellie Moore"}
              price={"20"}
              rating={"0.5"}
            />
          );
        })}
      </div>
    </div>
  );
}
