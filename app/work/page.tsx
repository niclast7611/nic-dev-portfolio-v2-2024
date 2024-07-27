"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css"; // Import Swiper styles

type Props = {};

const Work = (props: Props) => {
  const projects = [
    {
      num: "01",
      category: "frontend",
      title: "Project 1",
      description: "Project 1 description",
      stack: [{ name: "React" }, { name: "TypeScript" }],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_-ROtC7XwaqjwWsTw99xI3h9C13CwKrh2g&s",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      num: "02",
      category: "frontend",
      title: "Project 2",
      description: "Project 2 description",
      stack: [{ name: "React" }, { name: "TypeScript" }],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_-ROtC7XwaqjwWsTw99xI3h9C13CwKrh2g&s",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      num: "03",
      category: "frontend",
      title: "Project 3",
      description: "Project 3 description",
      stack: [{ name: "React" }, { name: "TypeScript" }],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_-ROtC7XwaqjwWsTw99xI3h9C13CwKrh2g&s",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
    {
      num: "04",
      category: "frontend",
      title: "Project 4",
      description: "Project 4 description",
      stack: [{ name: "React" }, { name: "TypeScript" }],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_-ROtC7XwaqjwWsTw99xI3h9C13CwKrh2g&s",
      live: "https://www.google.com",
      github: "https://www.google.com",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={project.live} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"
                >
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                  <div className="h-full w-full relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
