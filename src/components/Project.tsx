"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { FaGithubSquare, FaLink } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  webAppLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden 
       sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 hover:dark:bg-white/20"
      >
        <div className="flex flex-col h-full pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-row gap-2">
            <a
              href={githubLink}
              target="_blank"
              className="bg-black/70 dark:bg-white/60 text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 dark:text-black/60 dark:hover:text-black/80"
            >
              <FaGithubSquare />
            </a>
            <a
              href={webAppLink}
              target="_blank"
              className="bg-black/70 dark:bg-white/60 text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full hover:scale-[1.15] hover:text-gray-950 dark:text-black/80 dark:hover:text-black"
            >
              <FaLink />
            </a>
          </div>

          <Image
            src={imageUrl}
            alt="My Projects"
            className="absolute h-[25rem]  hidden sm:block top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl 
            transition group-hover-scale[1.04] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
            group-even:right-[initial] group-even:-left-40 bg-cover"
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
