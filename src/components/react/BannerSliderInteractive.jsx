// src/components/BannerSliderInteractive.jsx
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Autoplay,
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";

export default function BannerSliderInteractive({ slides }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect={"fade"}
        pagination={{
          el: ".swiper-number-line-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".slider-one-slide-next-1",
          prevEl: ".slider-one-slide-prev-1",
        }}
        autoplay={{
          delay: 4000,
          stopOnLastSlide: true,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        className="h-100 banner-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="position-absolute left-0px top-0px w-100 h-100 cover-background background-position-center-top"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </SwiperSlide>
        ))}

        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets d-block d-sm-none"></div>
      </Swiper>
      <div className="swiper-pagination-wrapper d-none d-lg-flex align-items-center justify-content-center position-absolute bottom-40px md-bottom-30px sm-bottom-20px left-minus-45 md-left-30px sm-left-20px z-index-9">
        <div className="number-prev fs-14 fw-600 text-dark-gray"></div>
        <div className="swiper-pagination-progress bg-extra-medium-gray">
          <span className="swiper-progress"></span>
        </div>
        <div className="number-next fs-14 fw-600 text-dark-gray"></div>
      </div>
    </>
  );
}
