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
      pagination={{ dynamicBullets: true}}
      scrollbar={{ draggable: true, hide: true}}
      onSlideChange={() => ('click')}
      effect= {'coverflow'}
      centeredSlides= {true}
      initialSlide= {1}
      allowTouchMove= {true}
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
                <SwiperSlide>
                      <a href="https://curly-fishstick-sigma.vercel.app/" target="_blank">
                        <div className="swiper-slide">
                                <img src="/Images/updatedPokemonCover.png" />
                        </div>
                      </a>
                </SwiperSlide> 
                <SwiperSlide>
                    <a href="https://classiccocktailinfo.netlify.app/" target="_blank">
                      <div className="swiper-slide">
                          <img src="/Images/Screenshot 2024-08-13 170133.png" />
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
                <SwiperSlide>
                        <a href="https://www.scfc.gov/wp-content/uploads/2021/06/HSFmap.pdf"target="_blank">
                          <div className="swiper-slide">
                              <img src="/Images/Harbison State Forest (1).png" />
                          </div>
                        </a>
                </SwiperSlide> 
                <SwiperSlide>
                        <a href="https://github.com/stringsArraysObjects/fuzzy-palm-tree" target="_blank">
                          <div className="swiper-slide">
                              <img src="/Images/animeEditAndCropped2.png" />
                          </div>
                        </a> 
                </SwiperSlide> 
    </Swiper>
  )
}
