import React from "react";
import { motion } from "framer-motion";
import { Project } from "typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-darkmain/10 scrollbar-thumb-maincolor/80">
        {projects.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-10 sm:p-20 md:p-44 h-screen"
            key={project._id}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt={project.title}
              className="w-30%"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl sm:text-4xl font-semibold text-center">
                <span className="underline decoration-maincolor/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex justify-center space-x-2">
                {project.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                ))}
              </div>

              <p className="hidden md:block sm:text-sm min-[775px]:text-base text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[25%] sm:top-[30%] bg-darkmain/10 left-0 h-[450px] md:h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
