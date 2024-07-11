import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-r from-indigo-500 to-pink-600 h-[120px] flex justify-center items-center rotate-1 ">
        <div className="h-[120px] w-full bg-[#060c21]  -rotate-1">vishal</div>
      </div>
{/* 
      <div className="container mx-auto mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        <div className="box relative h-auto p-0 bg-opacity-0 flex justify-center items-center border-2 border-black">
          <div className="content relative p-20 bg-portfolio-dark text-white">
            <div className="tape"></div>
            <h2 className="absolute top-0 right-20 text-8xl text-opacity-5 transition duration-250">
              01
            </h2>
            <h3 className="font-bold text-3xl mb-6">Service One</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a
              href="#"
              className="relative block mt-4 px-4 py-2 border border-white text-white transition duration-500 hover:bg-white hover:text-gray-800"
            >
              Read more...
            </a>
          </div>
        </div>
      </div> */}

      {[...Array(10)].map((test, i) => {
        return (
          <p key={i} className="my-1 text-indigo-500 ">
            {i} : vishal
          </p>
        );
      })}
{/* 
      <div
        className="mx-auto my-2 grid grid-cols-1 [&_box:befor]"
        style={{
          contain: "",
          position: "absolute",
          top: "-2px",
          left: "-2px",
          bottom: "-2px",
          right: "-2px",
          background: "#FFF",
          transform: "skew(2deg,2deg)",
          zIndex: "-1",
        
        }
  
      }
      >
        <style>
          {`
          .boxs::before{ background:yellow;
            background: linear-gradient(315deg, #ff0057,#e64a19)}
          `}
        </style>
        <div class="boxs">
          <div class="content">
            <div class="tape"></div>
            <h2>001</h2>
            <h3>Service One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
      </div> */}

      <div className="container my-10">
        <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>01</h2>
            <h3>Service One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>

      </div>
      <div className="container my-2">

      <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>02</h2>
            <h3>Service Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>03</h2>
            <h3>Service Three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>

        <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>04</h2>
            <h3>Service Four</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>05</h2>
            <h3>Service Four</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <div className="tape"></div>
            <h2>06</h2>
            <h3>Service Four's</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              neque nesciunt possimus eveniet eius assumenda ipsa modi
              distinctio, sunt earum voluptatem inventore in vel odio adipisci
              explicabo sint quibusdam nisi!
            </p>
            <a href="#">Read more...</a>
          </div>
        </div>
      </div>

      <div class="h-36 w-full rounded-md border-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        vishal
      </div>
      <div className="btn">vishal</div>
    </main>
  );
}
