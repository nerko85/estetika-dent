import React from "react";
import { Services as StyledServices } from "./Services.style";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import Card from "../../containers/Card";

import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs.js";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Services({ children, services }) {
  return (
    <StyledServices>
      <div className="inner">
        {children}
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 4,
            },
          }}
        >
          {services?.map((service) => {
            const { id, img, title, desc, name } = service;
            return (
              <SwiperSlide key={id}>
                <Card
                  img={img}
                  title={title}
                  desc={desc}
                  name={name}
                  type="services"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-btn swiper-prev">
          <VscArrowLeft />
        </div>
        <div className="custom-btn swiper-next">
          <VscArrowRight />
        </div>
      </div>
    </StyledServices>
  );
}
