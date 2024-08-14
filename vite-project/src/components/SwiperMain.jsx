import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function SwiperMain (){
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true, hide: true}}
      onSwiper={(swiper) => document.querySelector('.swiper')}
      onSlideChange={() => ('click')}
      effect= {'coverflow'}
      centeredSlides= {true}
      initialSlide= {2}
      allowTouchMove= {false}
      coverflowEffect= {{
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation= {{
        nextEl: ".forward",
        prevEl: ".backward",
      }}
      >
     <div className="album-cover">
        <div className="swiper">
          <div className="swiper-wrapper">
                <SwiperSlide>
                    <a href="" target="_blank">
                      <div className="swiper-slide">
                          <img src="/Images/Screenshot 2024-07-24 174711.png" />
                      </div>
                    </a> 
                </SwiperSlide> 
                <SwiperSlide>
                    <a href="https://github.com/stringsArraysObjects/verbose-system" target="_blank">
                      <div className="swiper-slide">
                          <img src="/Images/Screenshot 2024-08-13 170133.png" />
                      </div>
                    </a> 
                </SwiperSlide> 
                <SwiperSlide>
                        <a href=""target="_blank">
                          <div className="swiper-slide">
                              <img src="/Images/outdoorDiningFiltered.png" />
                          </div>
                        </a>
                </SwiperSlide> 
                <SwiperSlide>
                        <a href="https://github.com/stringsArraysObjects/fuzzy-system" target="_blank">
                          <div className="swiper-slide">
                                <img src="/Images/Screenshot 2024-08-09 192817.png" />
                          </div>
                        </a>
                </SwiperSlide> 
                <SwiperSlide>
                      <a href="nested/index.html" target="_blank">
                         <div className="swiper-slide">
                              <img src="/Images/linkedInProfilePicJuly2024Cropped.png" />
                         </div>
                      </a>
                </SwiperSlide> 
          </div>
        </div>
      </div>
    </Swiper>
  )
}
