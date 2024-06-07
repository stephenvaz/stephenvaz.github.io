import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin , SiLeetcode, SiMinutemailer} from "react-icons/si";
import ReactRotatingText from "react-rotating-text";

import BubbleText from "./bubbble/BubbleText";
import { LuBinary } from "react-icons/lu";
import DotGrid from "./WaterDrop";
import { techStack } from "../data/data";
import { IoDocumentsOutline } from "react-icons/io5";

export const RevealBento = () => {
return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 flex justify-center items-center">
        <motion.div
            initial="initial"
            animate="animate"
            transition={{
                staggerChildren: 0.05,
            }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
            <HeaderBlock />
            <SocialsBlock />
            <AboutBlock />
            <LocationBlock />
            <TechStackBlock />
            <ComingSoonBlock />
        </motion.div>
    </div>
);
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6"
    whileHover= {{
        filter: "invert(100%)",
    }}
  >
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Ted"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-6 text-4xl font-medium leading-tight">
      {/* Hi, I'm Stephen.{" "} */}
      <BubbleText text={"Hi, I'm Stephen Vaz"}/>
      <span className="text-zinc-400">
      A full stack developer scripting his life out.
      </span>
    </h1>
    <div className="flex flex-row justify-between">

    <a
      href="https://drive.google.com/file/d/1TJQJNG4RDl5DaYgo43QfNghuXmka9t5Z/view?usp=sharing"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1 text-red-300 hover:underline text-xl"
      style={{
        // no underline
        textDecoration: "none",
      }}
    >
      <div className="flex flex-row items-center">
      Resume <IoDocumentsOutline />
      </div>
    </a>

    <a
      href="mailto:vs1102@proton.me"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1 text-red-300 hover:underline text-xl"
      style={{
        // no underline
        textDecoration: "none",
      }}
    >
      <div className="flex flex-row items-center">
      Contact me <FiArrowRight />
      </div>
    </a>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#6c6c6c] md:col-span-3"
    >
      <a
        href="https://leetcode.com/u/stephenvaz2003/"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLeetcode />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#24292e] md:col-span-3"
    >
      <a
        href="https://github.com/stephenvaz"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#0077B5] md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/stephen03/"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinkedin 
            color="white"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="mailto:vs1102@proton.me"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiMinutemailer />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug"
    whileHover = {{
        filter: "invert(100%)",
    }}
  >
    <p>
      I like building cool, scalable and efficient stuff.{" "}<br></br>
      <span className="text-zinc-400 text-2xl">
        I'm currently in my final year studying, Computer Science at S.P.I.T.<br></br>
        I build primarily with Flutter, React, Node and have extensive experience with Cloud Technologies such as AWS EC2, S3, CloudFront, SES, etc.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
    <a
        href="https://maps.app.goo.gl/jSrgYcaB4wDv3Frh8"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-12 md:col-span-4"
    >
        <Block
            className="col-span-12 flex flex-col items-center gap-4 md:col-span-4"
            whileHover={{
                filter: "invert(100%)",
            }}
        >
            <FiMapPin className="text-3xl" />
            <p className="text-center text-lg text-zinc-400">Mumbai, India</p>
        </Block>
    </a>
);

const TechStackBlock = () => (
    <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-4"
        whileHover={{
            filter: "invert(100%)",
        }}
    >
        <LuBinary className="text-3xl" />
        <ReactRotatingText
            items={techStack}
            eraseMode="erase"
            typingInterval={100}
            className="text-xl text-center text-zinc-400 w-full"
        />
    </Block>
);

const ComingSoonBlock = () => (
    <Block className="col-span-12 md:col-span-4 flex flex-col p-3"
        whileHover={{
            filter: "invert(100%)",
        }}
    >
        <div
            style={{
                overflow: "hidden",
            }}
            >

            <DotGrid />
        </div>
    </Block>
);
