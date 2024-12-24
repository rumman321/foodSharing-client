import React from "react";
import bgimg1 from "../assets/food1.jpg"
import bgimg2 from "../assets/food2.jpg"
import bgimg3 from "../assets/food3.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Carousel = () => {
  return (
    <div>
      <div className="container px-6 py-10 mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide
              image={bgimg1}
              text="Get Your Delicious Food Dear "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg2}
              text="Get Your Delicious Food Dear "
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg3}
              text="Get Your Delicious Food Dear "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
