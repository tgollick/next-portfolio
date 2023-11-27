import React from "react";
import { motion } from "framer-motion";
import { Experience } from "typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-maincolor/5 px-10 pt-3 md:p-10 placeholder-gray-100 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience.companyImage).url()}
        alt="Company Logo"
      />

      <div className="px-5 md:px-10">
        <h4 className="text-xl sm:text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-base sm:text-xl md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              className="w-6 h-6 sm:w-12 sm:h-12"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-darkmain text-sm sm:text-base">
          <span>{experience.dateStarted.toString()}</span>
          <span> </span>-<span> </span>
          <span>
            {experience.isCurrentlyWorkingHere
              ? "Current"
              : experience.dateEnded.toString()}
          </span>
        </p>

        <ul className="list-disc space-y-4 ml-5 text-xs sm:text-sm md:text-base">
          {experience.points.map((pointer, index) => (
            <li key={index}>{pointer}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
