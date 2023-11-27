import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./Skill";
import { Skill } from "typings";

type Props = {
  skills: Skill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pt-10 sm:pt-0 h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-darkmain/25 text-xs sm:text-sm">
        Hover over a skill for current profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 360,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            key={skill._id}
          >
            <SkillIcon skillinput={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
