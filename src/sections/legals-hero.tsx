"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LegalsHero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <div className=" mb-20 md:mb-8" ref={sectionRef}>
      <div className="">
        <motion.div
          style={{
            backgroundPositionY,
            backgroundImage: 'url("/assets/stars.png")',
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          animate={{
            backgroundPositionX: "800px",
          }}
          ref={borderedDivRef}
          className=" py-14 md:py-24 overflow-hidden relative group"
        >
          <div className=" relative">
            <h2 className=" text-5xl md:text-6xl lg:text-7xl px-4 md:px-0 md:max-w-4xl mx-auto tracking-tighter text-center font-semibold text-white">
              {title}
            </h2>
            <div className=" flex justify-center mt-4">
              <p className=" text-center text-lg md:text-xl md:max-w-xl mx-auto tracking-tight text-white/70 px-6 md:px-0">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalsHero;
