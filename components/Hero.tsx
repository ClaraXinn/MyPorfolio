import React from "react";
import { Spotlight } from "./ui/SpotLight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 " id="about">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex h-screen w-full items-center justify-center absolute">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            // light mode grid → faint white (10% opacity)
            "[background-image:linear-gradient(to_right,rgba(228,228,231,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.1)_1px,transparent_1px)]",
            // dark mode grid → dim gray (30% opacity)
            "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]"
          )}
        />

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
   
      </div>
      
      <div className=" flex justify-center  relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-xs text-center max-w-80" >Dynamic Web Megic with Next.js</h2>

          <TextGenerateEffect 
          className="text-center text-[40px] md:text-blue-5xl lg:text-6xl"
          words={"Transforming Ideas into Effortless Experiences"}/>

          <p className="text-center md:tracking-wider mb-14 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Clara, a Web Developer based in Singapore.
          </p>

          <a href="#grid">
            <MagicButton title="Show my work"
             icon={<FaLocationArrow />}
             position='right'
          
            />
          </a>


        </div>

      </div>


    </div>
  );
};

export default Hero;
