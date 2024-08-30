import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

const ImageSlide = () => {
    return (
      <>
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2300, disableOnInteraction: false }}
            speed={800}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Autoplay, EffectCoverflow]}
          >
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/ZWxBmcX/football.jpg"
                alt="football"
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/ncXXSFB/cricket.jpg"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/XsB8Sz0/tennis.jpg"
                alt="tennis"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/jrsFT7h/badminton.jpg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/YXmyL1y/rugby.jpg"
                alt="rugby"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/W2wKzYt/baseball.jpg"
                alt="baseball"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/3df9RTb/basketball.jpg"
                alt="basketball"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/njFx9Pg/swimming.jpg"
                alt="swimming"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://i.ibb.co/w051W72/beach-volleyball-6483905-1280-1.webp"
                alt="volleyball"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default ImageSlide;