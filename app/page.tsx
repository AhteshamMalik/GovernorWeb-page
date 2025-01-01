import React from "react";
import ImageSlider from "./components/ImageSlider";
import Image from "next/image";
import cover from "./images/cover.png";
import img1 from "@/app/images/img1.jpg";
import img2 from "@/app/images/img2.jpg";
import img3 from "@/app/images/img3.jpg";
import imgg1 from "@/public/imggg1.jpg";
import imgg2 from "@/public/imggg2.jpg";
import imgg3 from "@/public/imggg3.jpg";
import imgg4 from "@/public/imggg4.jpg";
import imgg5 from "@/public/imggg5.jpg";
import imgg6 from "@/public/imggg6.jpg";
import imgg7 from "@/public/imggg7.jpg";
import imgg8 from "@/public/imggg8.jpg";
import imgg9 from "@/public/imggg9.jpg";

export default function Home() {
  let slides = [
    "https://www.governorsindh.com/_next/static/media/slideShow1.6f890b58.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow5.b502aa01.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow7.9e3fcc75.jpg",
    "https://www.governorsindh.com/_next/static/media/slideShow4.d9ba1e2d.jpg",
  ];
  return (
    // Main
    <div className="main">
      {/* Page1 */}
      <div className="flex justify-between bg-slate-200">
        {/* Left div */}
        <div className="left-div my-10 pl-14 w-6/12 ">
          <h1 className="text-6xl font-extrabold text-sky-800">
            Governor Sindh
          </h1>
          <p className="text-4xl text-sky-900 tracking-widest mt-2">
            Kamran Khan Tessori
          </p>
          <h1 className="text-4xl font-extrabold text-sky-400 mt-7">
            Certified Cloud <br />
            Applied Generative AI Engineer (GenEng)
          </h1>
          <h1 className="text-blue-900 text-2xl font-extrabold mt-7 leading-loose">
            Earn up to $5,000/month <br /> Now admission are open in Hyderabad
          </h1>
          <div className="flex">
            <button className="mt-7 text-1xl bg-blue-900 text-slate-100 font-extrabold py-2 px-14 rounded-md">
              Apply Now
            </button>
            <div className="mt-7 ml-16 text-center tracking-wider">
              <h1 className="text-blue-900 text-3xl font-extrabold">500,000</h1>
              <p className="text-blue-900">Accepted Applications</p>
            </div>
            <div></div>
          </div>
        </div>
        {/* Right div */}
        <div className="mt-5">
          <Image src={cover} alt="" height={550} className="" />
        </div>
      </div>
      {/* Page2 */}
      <div className="page2 h-[210vh] w-full px-12 py-10 flex flex-col items-center my-5 relative">
        <h1 className="text-2xl text-[#044e83] font-extrabold text-center">
          Certified Cloud Applied Generative AI Engineer (GenEng) and
          Solopreneur Developing Billion-Dollar Valued Developers and
          Solopreneurs
        </h1>
        <p className="text-xl text-gray-800 leading-8 tracking-wider text-justify my-10">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
        {/* 3Images */}
        <div className="3img grid grid-cols-3 gap-3">
          <div className="flex">
            {" "}
            <Image src={img1} alt="" className="rounded-md"></Image>
          </div>
          <div className="flex">
            {" "}
            <Image src={img2} alt="" className="rounded-md"></Image>
          </div>
          <div className="flex">
            {" "}
            <Image src={img3} alt="" className="rounded-md"></Image>
          </div>
        </div>
        {/* ImageSlider */}
        <div className="h-[35vh] w-[60vw] m-10 rounded-[300px]">
          <ImageSlider slides={slides} />
        </div>
        <hr className="h-[2px] w-[75em] bg-gray-300 absolute bottom-0" />
      </div>
      {/* Page3 */}
      <div className="page3 h-[170vh] w-full px-32">
        <h1 className="text-3xl text-[#044e83] font-extrabold tracking-wider font-sans my-7">
          Core Courses Sequence
        </h1>
        <div className="container h-[50vh] flex gap-10">
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg1} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg2} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Web2 Using NextJS</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg3} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Earn as You Learn</p>
          </div>
        </div>
        <h1 className="text-3xl text-[#044e83] font-extrabold tracking-wider font-sans my-7">
          Advanced Courses
        </h1>
        <div className="container2 h-[50vh] grid grid-cols-4 gap-10">
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg4} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg5} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg6} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg7} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg8} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
          <div className="h-56 w-60 rounded-md bg-white hover:scale-105">
            <Image src={imgg9} alt="" className="bg-fixed"></Image>
            <p className="text-center font-bold text-gray-500 my-5">Programming Fundamentals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

