import { anim, program } from "@/data/data";
import { motion } from "framer-motion";

export function Program() {
  return (
    <section className=" FontArmHmk text-vrayi px-6 ">
      <motion.h2 {...anim} className="text-center text-3xl my-10 mb-20 ">
        Ժամանակացույց
      </motion.h2>

      {program.map((item: any, i: any) => (
        <div className=" bg-cover bg-no-repeat  bg-center" key={i}>
          <ProgramItem {...item} />
        </div>
      ))}
    </section>
  );
}

const getImage = (title: any) => {
  if (title === "Եկեղեցի") return "/ekexeci.jpg";
  if (title === "Հարսանյաց սրահ") return "/restoran.jpg";
  return null;
};

const ProgramItem = ({ time, title, address ,subt}: any) => {
  const img = getImage(title);

  return (
    <div className="my-10 flex flex-col items-center text-xl">
      <motion.h3 {...anim} className="text-2xl">{title}</motion.h3>
      <motion.p {...anim} className="text-sm opacity-80">
        {subt}
      </motion.p>
      <motion.p {...anim} className="text-2xl">
        {time}
      </motion.p>

      {img && <img src={img} className="my-4 max-w-full rounded" />}

      <motion.a
        {...anim}
        href={`https://www.google.com/maps/search/${address}`}
        target="_blank"
        className="bg-guyn text-[#f1f1f1] px-4 py-2 mt-6 rounded-[10px] text-sm"
      >
        Ինչպես հասնել
      </motion.a>

      {title !== "Հարսանյաց սրահ" && (
        <img src="/icon3.png" className=" w-20 mt-10" />
      )}
    </div>
  );
};
