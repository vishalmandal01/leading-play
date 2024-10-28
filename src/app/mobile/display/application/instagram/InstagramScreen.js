import Image from "next/image";
import React from "react";

const Post = ({ image, caption, user, userImg }) => {
  return (
    <div className="flex flex-col mb-1">
      <div className="flex justify-between items-center p-1">
        <div className="flex gap-1 items-center">
          <div
            className={`w-[35px] h-[35px] rounded-full flex justify-center items-center  overflow-hidden  `}
            style={{
              padding: "1.5px",
              background:
                "linear-gradient(45deg,  #ffa95f 5%,#f99c4a 15%,#f47838 30%,#e75157 45%,#d92d7a 70%,#cc2a92 80%,#c32e92 95%)",
              borderRadius: "50%",
            }}
          >
            <div
              className="h-full w-full rounded-full border-[1px] border-white "
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
          <p className="text-indigo-700 text-sm font-medium">{user}</p>
        </div>
        <p className="text-indigo-700">⠇</p>
      </div>
      <Image src={image} alt="image" width={275} height={275} />
      <div className="p-1">
        <p className="text-[12px] text-black truncate">{caption}</p>
      </div>
    </div>
  );
};

const InstagramFeed = () => (
  <div className="">
    {[...Array(90)].map((_, index) => (
      <Post
        key={index}
        user={`Calypso ${index}`}
        image={`https://picsum.photos/275/275?random=${index}`}
        caption={`Calypso Winter is coming get your sweeter on  ${index + 1}`}
      />
    ))}
  </div>
);
export default function InstagramScreen() {
  return (
    <div className="bg-white flex flex-col justify-between w-[275px] h-[483px] absolute mt-1.5 overflow-scroll scroll-bar-hide">
      <div>Instagram</div>
      <InstagramFeed />
    </div>
  );
}
