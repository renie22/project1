import React from "react";
import Card from "./Card";
import { skills } from "../data";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Skills = () => {
  return (
    <div className="dark:bg-black/80 dark:text-white py-5">
      <div className="max-w-[1400px] m-auto">
        <h1 className="text-2xl font-bold text-center">Tech Stack</h1>
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
            <SwiperSlide key={i}>
              <Card skill={skill} isLatest />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
