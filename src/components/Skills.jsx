import React, { useRef } from "react";
import Card from "./Card";
import { skills } from "../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, {
    margin: "-100px",
  });

  return (
    <div ref={skillsRef} className="dark:bg-black/80 dark:text-white py-5">
      <div className="layout h-full flex flex-col justify-center">
        <motion.h1
          initial={{ x: "-100px" }}
          animate={skillsInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-center"
        >
          Tech Stack
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            skillsInView
              ? { opacity: 1, scale: 1, transition: { duration: 0.7 } }
              : {}
          }
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 0,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
              1536: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {skills.map((skill, i) => (
              <SwiperSlide
                className="dark:text-white flex flex-col items-center"
                key={i}
              >
                <Card skill={skill} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
