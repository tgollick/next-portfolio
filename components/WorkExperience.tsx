import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "typings";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll pb-10 pt-28 md:p-10  snap-x snap-mandatory mt-10 scrollbar scrollbar-track-darkmain/10 scrollbar-thumb-maincolor/80">
        {experiences.map((experience, index) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
