import React from "react";
import { Services as StyledServices } from "./Services.style";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import Card from "../../containers/Card";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs.js";

SwiperCore.use([Navigation, Pagination]);

export default function Services({ children, services }) {
  return (
    <StyledServices>
      <div className="container">
        {children}
        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
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
          <div className="custom-btn swiper-prev">
            <VscArrowLeft />
          </div>
          <div className="custom-btn swiper-next">
            <VscArrowRight />
          </div>
        </Swiper>
      </div>
    </StyledServices>
  );
}
