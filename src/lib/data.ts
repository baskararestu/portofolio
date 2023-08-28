import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blankImage from "@@/public/blank-image.jpg";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const; // as const = not random value

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portofolio",
    description: "My website portofolio and my first project using Next.js",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: blankImage,
  },
  {
    title: "Shopify",
    description:
      "Final Project from Bootcamp as a group. Our job is to create features client-side and server-side based on our task.",
    tags: ["React", "Javascript", "MYSQL", "Tailwind", "DaisyUI", "Express.js"],
    imageUrl: blankImage,
  },
  {
    title: "Image-Apps",
    description:
      "A mini project that I created to allow users to upload images and share them with other users.",
    tags: [
      "React",
      "Javascript",
      "Tailwind",
      "Redux",
      "DaisyUI",
      "MYSQL",
      "Express.js",
    ],
    imageUrl: blankImage,
  },
  {
    title: "Point of Sales",
    description:
      "A mini project created to assist small businesses in implementing a payment system, enabling order processing, and generating clear sales reports.",
    tags: ["React", "JAVASCRIPT", "Tailwind", "MYSQL", "EXPRESS.js"],
    imageUrl: blankImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "MYSQL",
] as const;
