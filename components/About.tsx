import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "typings";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const backgroundInfo = pageInfo.backgroundInformation;
  const paragraphs = backgroundInfo.split(/\n\s*\n/);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex relative flex-col text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2,
        }}
        src={urlFor(pageInfo.profilePicture).url()}
        alt="Thomas Gollick"
        className="-mb-20 hidden sm:block sm:w-52 sm:h-52 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10 flex flex-col justify-center">
        <h4 className="text-2xl md:text-4xl font-semibold mt-10 sm:mt-0">
          Here is a{" "}
          <span className="underline decoration-maincolor">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">{paragraphs[0]}</p>
        <p className="hidden min-[390px]:block text-sm md:text-base">
          {paragraphs[1]}
        </p>
        <p className="hidden min-[800px]:block">{paragraphs[2]}</p>
      </div>
    </motion.div>
  );
};

export default About;
