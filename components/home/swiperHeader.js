import React from "react";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

import Image from "next/image";
import Link from "next/link";

import headerImageData from "@/data/headerImages";

const SwiperHeader = () => {
  return (
    <div className="h-[60vh] ">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper headerSwiper"
      >
        {headerImageData.map(({ ...props }, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <Link href={`product/${props.href}`}>
                <div className="cursor-pointer">
                  <Image
                    src={props.image}
                    layout="fill"
                    objectFit="cover"
                    alt="swiper image"
                  />
                  <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-slate-900/30">
                    <div className="flex flex-col justify-center items-center h-full w-full">
                      <p className="text-white md:text-6xl text-4xl font-extrabold">
                        Онцгой зар
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperHeader;
