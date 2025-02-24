"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
type Props = {};

const Services = (props: Props) => {
  const services = [
    {
      num: "01",
      title: "Web Development",
      description:
        "I have experience building websites and web applications using JavaScript, React, and Node.js.",
      href: "",
    },
    {
      num: "02",
      title: "Mobile Development",
      description:
        "I develop cross-platform mobile applications for iOS and Android using React Native.",
      href: "",
    },
    {
      num: "03",
      title: "UI/UX Design",
      description:
        "I have a background in design, which helps me build websites and applications that not only function well, but look great.",
      href: "",
    },
    {
      num: "04",
      title: "API Development",
      description:
        "I have experience designing, building, and maintaining APIs consumed by mobile and web applications.",
      href: "",
    },
  ];
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
