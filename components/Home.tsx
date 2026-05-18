"use client";
import Image from "next/image";
import { TimeBox } from "./TimeBox";
import { useState } from "react";
import { MusicPlayer } from "./music";
import { anim, date, names, txt1, txt1_1, txt2, txt2_1, txt3, vazoxTox } from "@/data/data";
import { motion } from "framer-motion";
import Link from "next/link";
import AttendanceGuests from "./RSVP";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="text-center overflow-hidden  FontSHK_Dzeragir ">
      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#4a4a4a81]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div
        className="FontSHK_Dzeragir py-15  tracking-0 h-[75vh] bg-cover bg-top flex flex-col justify-between pt-20 p-7 "
        style={{ backgroundImage: "url('/img1.jpg')" }}
      >
        <div className="flex items-center justify-center">
          <h2 className="text-[64px] -mt-20 text-white">{names[1]}</h2>
          <span className="text-9xl -mt-20 text-[#ffffff1a]"> & </span>
          <h2 className="text-[64px] mb-20 text-white">{names[0]}</h2>
        </div>
        <p className="FontSHK_Dzeragir text-[64px] text-white">{date}</p>
      </div>

      <div className="FontSHK_Dzeragir px-5 my-20">
        <motion.h3 {...anim} className=" text-sovorakan relative text-[36px]">
          Սիրելիներս
          <p className=" absolute -z-1 text-5xl top-3 left-1/2 -translate-x-1/2 text-taki">
            Սիրելիներս
          </p>
        </motion.h3>
        <motion.p
          {...anim}
          className=" text-sovorakan relative  text-2xl mt-10"
        >
          {txt1}
          <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
            {txt1_1}
          </span>
        </motion.p>
      </div>

      <div className=" mt-30 relative w-full text-vrayi ">
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-7xl -rotate-2  -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-6xl mb-10 rotate-2  -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-5xl mt-15  -rotate-2 -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-4xl mb-10 rotate-2  -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-3xl mt-15 -rotate-2 -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee text-2xl mb-10 rotate-2  -translate-x-full">
          {vazoxTox}
        </div>
        <div className="FontBabylonica-Regular whitespace-nowrap animate-marquee-2 text-xl mt-15 -rotate-2 -translate-x-full">
          {vazoxTox}
        </div>
        <Image
          src="/img2.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-[60vw] h-[60vw] md:w-[20vw] md:h-[20vw] rotate-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute object-cover  "
        />
      </div>

      <TimeBox />

      <motion.p {...anim} className="relative text-sovorakan  text-2xl my-10">
        <span className=" text-sovorakan text-2xl mt-10">{txt3}</span>

        <Link href="">
          <span className=" flex items-center gap-2 justify-center mt-5 relative">
            <span>Հասցե</span>

            <Image
              src="/icon3.png"
              alt="icon1"
              width={500}
              height={500}
              className=" w-5 h-5 object-cover"
            />
          </span>
        </Link>
        <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
          {txt3}
        </span>
      </motion.p>

      <motion.div {...anim} className="px-5">
        <Image
          src="/img3.jpg"
          alt="icon1"
          width={500}
          height={500}
          className="w-full  object-cover rounded-xl mb-20 "
        />
      </motion.div>

      <motion.p
        {...anim}
        className=" mb-20 text-sovorakan relative  text-2xl mt-10"
      >
        {txt2}
        <span className=" absolute w-[200%] -z-1 text-4xl -top-1 left-1/2 -translate-x-1/2 text-taki">
          {txt2_1}
        </span>
      </motion.p>
      <AttendanceGuests />
    </div>
  );
}
