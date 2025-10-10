"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Credentials {
  buyer: { email: string; password: string };
  seller: { email: string; password: string };
  admin: { email: string; password: string };
  agent: { email: string; password: string };
}

export const CredentialsSection = ({ credentials }: { credentials: Credentials }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // ✅ Close tooltip if tapped outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative mt-3 text-sm text-gray-400 leading-relaxed text-center w-full">
      {/* Tap or hover target */}
      <p
        className="text-purple font-semibold cursor-pointer hover:underline select-none"
        onClick={() => setShowTooltip((prev) => !prev)} // 👈 Toggle on tap
      >
        Demo Credentials
      </p>

      {/* Tooltip box */}
      <motion.div
        ref={tooltipRef}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={showTooltip ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`absolute left-1/2 -translate-x-1/2 top-8 z-[9999] w-[20rem] sm:w-[24rem] bg-black/90 text-gray-200 
                   border border-white/10 rounded-lg p-4 shadow-lg backdrop-blur-sm 
                   whitespace-normal break-words transition-all duration-300 ease-in-out 
                   pointer-events-auto text-xs sm:text-sm flex flex-col items-center justify-center 
                   text-center select-text ${showTooltip ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {/* Tooltip Arrow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 
                     border-l-8 border-l-transparent 
                     border-r-8 border-r-transparent 
                     border-b-8 border-b-black/90"
        ></div>

        <ul className="space-y-2 text-sm leading-snug text-center list-none p-0 m-0">
          <li>
            <strong>Buyer:</strong> {credentials.buyer.email} / {credentials.buyer.password}
          </li>
          <li>
            <strong>Seller:</strong> {credentials.seller.email} / {credentials.seller.password}
          </li>
          <li>
            <strong>Admin:</strong> {credentials.admin.email} / {credentials.admin.password}
          </li>
          <li>
            <strong>Agent:</strong> {credentials.agent.email} / {credentials.agent.password}
          </li>
        </ul>

        {/* Optional: Copy button */}
        <button
          onClick={() =>
            navigator.clipboard.writeText(
              `Buyer: ${credentials.buyer.email} / ${credentials.buyer.password}
Seller: ${credentials.seller.email} / ${credentials.seller.password}
Admin: ${credentials.admin.email} / ${credentials.admin.password}
Agent: ${credentials.agent.email} / ${credentials.agent.password}`
            )
          }
          className="mt-3 px-3 py-1 bg-purple/30 hover:bg-purple/50 rounded-md text-purple-200 text-xs transition"
        >
          📋 Copy All
        </button>
      </motion.div>
    </div>
  );
};
