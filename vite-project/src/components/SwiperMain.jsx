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
                    <div className="swiper-slide">
                      <img
                        src="/Images/outdoorDiningFiltered.png" />
                      <div className="overlay">
                        <a
                          href=""
                          target="_blank"
                          ></a> 
                      </div>
                    </div>
                </SwiperSlide> 
                <SwiperSlide>

                      <div className="swiper-slide">
                        <img
                          src="/Images/linkedInProfilePicJuly2024Cropped.png" />
                        <div className="overlay">
                          <a
                            href=""
                            target="_blank"
                            ></a>
                        </div>
                      </div>
                  </SwiperSlide> 
                  <SwiperSlide>

                        <div className="swiper-slide">
                          <img
                            src="/Images/Screenshot 2024-07-24 174711.png" />
                          <div className="overlay">
                            <a
                              href=""
                              target="_blank"
                              ></a>
                          </div>
                        </div>
                    </SwiperSlide> 
          </div>
        </div>
      </div>
    </Swiper>
    )
}
