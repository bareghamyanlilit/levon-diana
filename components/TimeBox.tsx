import { anim } from "@/data/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate: any = new Date("2026-07-01T12:00:00");

export function TimeBox() {
  const [timeLeft, setTimeLeft] : any= useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now: any = new Date();
      const diff = weddingDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

        setTimeLeft({
          days: pad(days),
          hours: pad(hours),
          minutes: pad(minutes),
          seconds: pad(seconds),
          finished: false,
        });
      } else {
        setTimeLeft((prev: any) => ({ ...prev, finished: true }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
     <motion.section {...anim}  className=" my-20 FontSHK_Dzeragir flex flex-col gap-5 text-center  text-vrayi  px-0 ">

      <div className="">
        {timeLeft.finished ? (
          <div className="text-white text-2xl font-semibold px-4  rounded-xl shadow">
            Հարսանիքն արդեն սկսվել է 🎉
          </div>
        ) : (
          <div className="flex items-center justify-center text-6xl font-extralight ">
            <TimeBoxItem label="Օր" value={timeLeft.days} /> |
            <TimeBoxItem label="Ժամ" value={timeLeft.hours} /> |
            <TimeBoxItem label="Րոպե" value={timeLeft.minutes} /> |
            <TimeBoxItem label="Վրկ." value={timeLeft.seconds} />
          </div>
        )}
      </div>
    </motion.section>
  );
}

const TimeBoxItem = ({ label, value }: any) => (
  <div className=" text-[40px] px-5 text-center ">
    <h2 className="mt-1 FontSHK_Dzeragir">{value}</h2>
    <p className="FontSHK_Dzeragir text-2xl">{label}</p>
  </div>
);
