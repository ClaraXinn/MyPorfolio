"use client";
import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion"; // 👈 for animation

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(
          ({ id, title, des, img, iconLists, link, credentials }) => (
            <div
              key={id}
              className="lg:h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={title} href={link}>
                {/* 🖼️ Project Image Section */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-visible h-[25vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl"></div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute top-0 w-full h-full object-contain rotate-1"
                  />
                </div>

                {/* 🧩 Title + Description */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                {/* 🪄 Hover-to-show Demo Credentials */}
                {credentials && (
                  <CredentialsSection credentials={credentials} />
                )}

                {/* 🔗 Tech icons + Live site */}
                <div>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex text-purple lg:text-xl md:text-xs text-sm">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RecentProjects;

interface Credentials {
  buyer: { email: string; password: string };
  seller: { email: string; password: string };
  admin: { email: string; password: string };
  agent: { email: string; password: string };
}

const CredentialsSection = ({ credentials }: { credentials: Credentials }) => {
  return (
    <div className="relative mt-3 text-sm text-gray-400 leading-relaxed">
      {/* Hover wrapper just for the text + tooltip */}
      <div className="inline-block relative group">
        {/* Hover target (only text) */}
        <p className="text-purple font-semibold cursor-pointer hover:underline select-none">
          Demo Credentials
        </p>

        {/* Tooltip box with smooth animation */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
className="absolute left-0 top-7 z-[9999] w-[24rem] bg-black/90 text-shadow-white
           border border-white/10 rounded-lg p-3 opacity-0 invisible
           group-hover:opacity-100 group-hover:visible
           shadow-lg backdrop-blur-sm whitespace-normal break-words
           transition-all duration-300 ease-in-out pointer-events-auto
           max-h-[18rem] overflow-y-auto text-xs sm:text-sm select-text"

        >
          {/* Tooltip Arrow */}
          <div
            className="absolute left-8 -top-2 w-0 h-0 
               border-l-8 border-l-transparent 
               border-r-8 border-r-transparent 
               border-b-8 border-b-black/90"
          ></div>

          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Buyer:</strong> {credentials.buyer.email} /{" "}
              {credentials.buyer.password}
            </li>
            <li>
              <strong>Seller:</strong> {credentials.seller.email} /{" "}
              {credentials.seller.password}
            </li>
            <li>
              <strong>Admin:</strong> {credentials.admin.email} /{" "}
              {credentials.admin.password}
            </li>
            <li>
              <strong>Agent:</strong> {credentials.agent.email} /{" "}
              {credentials.agent.password}
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
