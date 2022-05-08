import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimanial.css";
import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";
import { ThemeContext } from "../../context/Context";
import { useContext } from "react";

const Testimanial = () => {
  const { darkMode } = useContext(ThemeContext);
  const clients = [
    {
      id: 1,
      img: Profile1,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
    {
      id: 2,
      img: Profile2,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
    {
      id: 3,
      img: Profile3,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
    {
      id: 4,
      img: Profile4,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
    {
      id: 5,
      img: Profile5,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
    {
      id: 6,
      img: Profile6,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum autem enim laborum nisi dolorem esse. Asperiores molestias libero ea itaque omnis, placeat voluptatibus aliquam velit optio consequuntur, fugiat, minus aspernatur.",
    },
  ];
  return (
    <div className="testimanial" id="testimonial">
      <div className="t-ItemInfo">
        <span>Clients always get</span>
        <span>Exceptional work</span>
        <span>from me</span>
      </div>
      {/* Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {clients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="t-Wrapper">
              <div className="t-Item">
                <div className="t-ItemWrapper">
                  <img src={client.img} alt="clientphoto" />
                  <span
                    style={{
                      color: darkMode ? "black" : "",
                    }}
                  >
                    {client.desc}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimanial;
