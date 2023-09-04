"use client";
import React from "react";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      className="text-black bg-gray-200 my-24 h-16 w-2 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

export default SectionDivider;
