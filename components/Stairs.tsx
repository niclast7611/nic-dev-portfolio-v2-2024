import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Stairs = (props: Props) => {
  const animation = {
    initial: { top: "0%" },
    animate: {
      top: "100%",
    },
    exit: {
      top: ["100%", "0%"],
    },
  };
  //   calculate the delay based on the index of the div
  const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
  };
  return (
    <>
      {/* render 6 motion divs, each one is a step of the stairs
    Each div will have the same animation defined above
    The delay is dynamically calculated based on the index of the div
    which will create a stagger effect
    */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={animation}
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease: "easeInOut",
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
