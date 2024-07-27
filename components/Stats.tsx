"use client";
import React from "react";
import CountUp from "react-countup";
type Props = {};

const Stats = (props: Props) => {
  const stats = [
    {
      number: 10,
      text: "Years of experience",
    },
    {
      number: 10,
      text: "Projects completed",
    },
    {
      number: 8,
      text: "Technologies mastered",
    },
    {
      number: 10,
      text: "Code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.number}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;