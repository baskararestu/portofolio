import React from "react";
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
    location: "Bogor, Indonesia",
    description: `After completing my Bachelor's Degree in Mathematics from Pakuan University 
    in October 2022, I decided to transition into programming.`,
    icon: React.createElement(LuGraduationCap),
    date: "Oct-2022",
  },
  {
    title: "Graduated bootcamp",
    location: "Bogor, Indonesia",
    description: `In August 2023, I completed a six-month full-stack programming bootcamp at 
    Purwadhika Digital Technology School, Indonesia, with a strong focus on JavaScript, React, and practical problem-solving.`,
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
