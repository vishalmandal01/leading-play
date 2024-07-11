import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-end items-center w-full   sticky top-10 z-50 ">
        {/* <ButtonGradient title={'login'}/>
         <ButtonGradient title={'login'}/> */}
        <Link href={"/onbord/login"}>
          <p className="uppercase text-base font-medium border-b-4 py-1 backdrop-blur-[2px] bg-white/10 hover:bg-indigo-500  px-2 border-indigo-500">
            login
          </p>
        </Link>
        <Link href={"/onbord/sign-up"}>
          <p className="uppercase text-base font-medium border-b-4 py-1 backdrop-blur-[2px] bg-white/10 hover:bg-indigo-500  px-2 border-indigo-500">
            regester
          </p>
        </Link>
      </div>

      <h1 className="text-center my-10 md:my-20">Introduction</h1>

      {[...Array(20)].map((info, i) => {
        return (
          <div key={i} className="container h-max my-16 md:px-[150px]">
            <div className="box">
              <div className="content">
                <div className="tape"></div>
                <h2>{i + 1}</h2>
                <div className="flex items-end">
                  <div className="bg-red-400 w-[200px]">
                    vishal
                    <h3>Service One</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat neque nesciunt possimus eveniet eius assumenda ipsa
                    modi distinctio, sunt earum voluptatem inventore in vel odio
                    adipisci explicabo sint quibusdam nisi!
                  </p>
                  {/* <a href="#">Read more...</a> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
