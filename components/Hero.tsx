import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter/dist/components/Cursor";
import { useTypewriter } from "react-simple-typewriter/dist/hooks/useTypewriter";
import { PageInfo } from "typings";
import BackgroundCircles from "./BackgroundCircles";
import imageUrlBuilder from "@sanity/image-url";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-36 w-36 mx-auto object-cover"
        src={urlFor(pageInfo.heroImage).url()}
        alt="Thomas Gollick Photo"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-maincolor pb-2 md:tracking-[15px] tracking-[10px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-2xl md:text-5xl xl:text-6xl font-semibold px-10">
          <Typewriter
            words={[
              `Hello, my name is ${pageInfo?.name}`,
              "<partTime='Powerlifter'/>",
              "<fullTime='Developer'/>",
            ]}
            cursor
            cursorStyle="_"
            delaySpeed={2000}
          />
        </h1>

        <div className="pt-5">
          <Link href="/#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="/#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
