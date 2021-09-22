import React from "react";
import { Slider as StyledSlider } from "./Slider.style";
import Card from "../../containers/Card";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";

import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs.js";

SwiperCore.use([Navigation, Pagination]);

export default function Slider({ elements, children, type, perView, nav }) {
  return (
    <StyledSlider type={type}>
      <div className="inner">
        {children}
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
        >
          <div className="test">
            {elements?.map((element) => {
              const { img, title, desc, name } = element;
              return (
                <SwiperSlide>
                  <Card img={img} title={title} desc={desc} name={name} />
                </SwiperSlide>
              );
            })}
          </div>
          <div className="custom-btn swiper-prev">
            <VscArrowLeft />
          </div>
          <div className="custom-btn swiper-next">
            <VscArrowRight />
          </div>
        </Swiper>
      </div>
    </StyledSlider>
  );
}
