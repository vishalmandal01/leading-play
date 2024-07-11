import React from "react";

export default function InstagramScreen() {
  return (
    <div className="bg-white/70 flex flex-col justify-between w-[275px] h-[483px] absolute mt-1.5 overflow-scroll scroll-bar-hide">
     {[...Array(90)].map((insta)=>{
        return(
            <p key={insta}>InstagramScreen</p>
        )
     })}
    </div>
  );
}
