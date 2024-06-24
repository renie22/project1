import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true });

  const textVariants = {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      ref={footerRef}
      className="h-[120px] flex justify-center dark:bg-black/100 dark:text-white py-5"
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={footerInView ? "animate" : {}}
        className="flex flex-col items-center"
      >
        <motion.div variants={textVariants} className="flex items-center gap-5">
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/facebook.png"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/twitter.png"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/instagram.webp"
            alt=""
          />
          <img
            className="md:h-11 md:w-11 h-8 w-8 object-cover rounded-full"
            src="/img/linkedin.webp"
            alt=""
          />
        </motion.div>
        <motion.span variants={textVariants} className="text-sm mt-5">
          Copyright © 2023 Renie Adjani. All Rights Reserved.
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Footer;
