"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  icon,
  tooltip,
}: {
  icon: React.ReactNode;
  tooltip: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  return (
    <>
      <div
        className="-mr-4 relative group"
        onMouseEnter={() => setHoveredIndex(1)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <AnimatePresence mode="popLayout">
          {hoveredIndex && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "wrap",
                textWrap:"wrap",
                maxWidth:"80vw"
              }}
              className="absolute -top-16 -left-[200px] sm:-left-1/2 sm:translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2 min-w-[300px] "
              
            >
              <div className="absolute inset-x-10 z-30 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute sm:left-14 w-[100%] z-30  " />
              <div className="font-bold text-white relative z-30  w-100 "
              dangerouslySetInnerHTML={{ __html: tooltip }} />
                {/* {tooltip}
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>
        {icon}

      </div>
    </>
  );
};
