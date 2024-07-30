import React from "react";
import Swiper from 'swiper';


export default function SwiperPrimary(){

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    allowTouchMove: false,
    spaceBetween: 40,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".forward",
      prevEl: ".backward",
    },
  });

  return(
    
      <div className="album-cover">
        <div className="swiper">
          <div className="swiper-wrapper">
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
          </div>
        </div>
      </div>

   )
}