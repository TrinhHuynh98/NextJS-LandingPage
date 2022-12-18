import React from "react";
import Image from "next/image";
//import "./skills.css";
import HtmlSkill from "../../../public/assets/skill/html.png";
import Css from "../../../public/assets/skill/css.png";
import Javascript from "../../../public/assets/skill/javascript.png";
import nextjs from "../../../public/assets/skill/nextjs.png";
import react from "../../../public/assets/skill/react.png";
import tailwind from "../../../public/assets/skill/tailwind.png";

const listSkill = [
  { image: HtmlSkill, name: "HTML" },
  { image: Css, name: "CSS" },
  { image: Javascript, name: "JAVASCRIPT" },
  { image: nextjs, name: "NEXTJS" },
  { image: react, name: "REACT" },
  { image: tailwind, name: "TAILWIND" },
];

const Skill = () => {
  return (
    <div id="skills" className="w-ful lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {listSkill.map((item, key) => (
            <div
              key={key}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={item.image} width={64} height={64} alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
