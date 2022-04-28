import React from "react";
import "./portfolio.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Portfolio1 from "../../img/Portfolio1.png";
import Portfolio2 from "../../img/Portfolio2.png";
import Portfolio3 from "../../img/Portfolio3.png";
import Portfolio4 from "../../img/Portfolio4.png";
import Portfolio5 from "../../img/Portfolio5.png";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";
const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span
        style={{
          color: darkMode ? "white" : "",
        }}
      >
        Portfolio
      </span>
      <Swiper
        className="portfolio-slider"
        slidesPerView={3}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img src={Portfolio1} alt="Portfolio1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio2} alt="Portfolio2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio3} alt="Portfolio3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio4} alt="Portfolio4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio5} alt="Portfolio5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
