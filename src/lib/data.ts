import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Bachelor's Degree in Mathematics",
    location: "Pakuan University - Bogor, Indonesia",
    description:
      "I graduate from Pakuan University after 4 years of studying with GPA: 3.53.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct-2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Bogor, Indonesia",
    description:
      "I graduated after 6 months of studying including final project with a team",
    icon: React.createElement(LuGraduationCap),
    date: "Aug-2023",
  },
] as const;

export const projectsData = [
  {
    title: "Personal Portofolio",
    description: "My website portofolio and my first project using Next.js",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer"],
    imageUrl: blankImage,
  },
  {
    title: "Shopify",
    description:
      "Final Project from Bootcamp as a group. Our job is to create features client-side and server-side based on our task.",
    tags: [
      "React",
      "Javascript",
      "Tailwind",
      "Redux",
      "DaisyUI",
      "MYSQL",
      "Express.js",
      "Nodemailer",
    ],
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
      "Nodemailer",
    ],
    imageUrl: blankImage,
  },
  {
    title: "Point of Sales",
    description:
      "A mini project created to assist small businesses in implementing a payment system, enabling order processing, and generating clear sales reports.",
    tags: ["React", "JAVASCRIPT", "Tailwind", "Redux", "MYSQL", "EXPRESS.js"],
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
