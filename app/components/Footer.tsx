import React from "react";
import Image from "next/image";
import facebook from "./../images/facebook.png";
import youtube from "./../images/youtube.png"
import twitter from "./../images/twitter.png"
import instagram from "./../images/instagram.png"
import tiktok from "./../images/tiktok.png"
import email from "./../images/email.png"
import Link from "next/link";

function Footer() {
  return (
    <nav className="bg-slate-200 h-96 text-black flex justify-between">
      <div className="left my-20 ml-16">
          <h1 className="font-bold text-[20px]">Core Courses</h1>
        <ul className="mt-5">
          <li className="mt-4 text-gray-700">Programming Fendamentals</li>
          <li className="mt-4 text-gray-700">Web2 Using NextJS</li>
          <li className="mt-4 text-gray-700">Earn as You Learn</li>
        </ul>
      </div>
      <div className="center my-20 mr-18">
        <h1 className="font-bold text-[20px]">Advanced Courses</h1>
        <ul className="mt-5">
          <li className="mt-4 text-gray-700">Web 3 and Metaverse</li>
          <li className="mt-4 text-gray-700">Cloud-Native Computing</li>
          <li className="mt-4 text-gray-700">Artifial Intelligence (AI) Deep Learning</li>
          <li className="mt-4 text-gray-700">Ambient Computing and IoT</li>
          <li className="mt-4 text-gray-700">Genomics and Bioinformatics</li>
          <li className="mt-4 text-gray-700">Network Programmability and Automation</li>
        </ul>
      </div>
      <div className="right my-20 mr-48">
        <h1 className="font-bold text-[20px]">Social Links</h1>
        <div className="social-images h-8 w-8 flex mt-3">
          <Image src={facebook} alt="" className=""></Image>
          <Image src={youtube} alt="" className="mx-2 "></Image>
          <Image src={twitter} alt="" className="mx-2 "></Image>
          <Image src={instagram} alt="" className="mx-2 "></Image>
          <Image src={tiktok} alt="" className="mx-2 "></Image>
        </div>
        <div className="email mt-3 flex">
        <Image src={email} alt="" className="h-8 w-8 -mt-1"></Image>
        <Link href="">education@governorsindh.com</Link>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
