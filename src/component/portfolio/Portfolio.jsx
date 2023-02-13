import React, { useContext } from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ThemeContext } from '../../context/Context'
import Portfolio1 from '../../img/Portfolio1.jpg'
import Portfolio2 from '../../img/Portfolio2.png'
import Portfolio3 from '../../img/Portfolio3.png'
import Portfolio4 from '../../img/Portfolio4.png'
import Portfolio5 from '../../img/Portfolio5.png'
import './portfolio.css'
const Portfolio = () => {
    const { darkMode } = useContext(ThemeContext)
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span
                style={{
                    color: darkMode ? 'white' : '',
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
                    <a
                        href="https://zing-thanhlinhna182025.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Portfolio1} alt="Portfolio1" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://admirable-narwhal-8b1b90.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Portfolio2} alt="Portfolio2" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Portfolio3} alt="Portfolio3" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Portfolio4} alt="Portfolio4" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a
                        href="https://github.com/thanhlinhna182025"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Portfolio5} alt="Portfolio5" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio
