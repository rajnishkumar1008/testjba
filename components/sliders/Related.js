import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct from "./../ecommerce/SingleProduct";

SwiperCore.use([Navigation]);

const RelatedSlider = () => {


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                
                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n",
                }}
                className="custom-class"
            >
             
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
          
            </Swiper>

            <div
                className="slider-arrow slider-arrow-2 carausel-6-columns-arrow"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                <i className="bi bi-chevron-right"></i>
                </span>
            </div>
            
        </>
    );
};

export default RelatedSlider;
