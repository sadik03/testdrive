import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import './Carousel.css';

const Carousel = () => {
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
                src="https://youthincmag.com/wp-content/uploads/2022/10/KreedOn.jpg"
                alt="football"
                className="relative"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/13079894/pexels-photo-13079894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://thebridge.in/h-upload/2021/06/29/1600x960_9340-pullela-gopichand-with-parupalli-kashyap-srikanth-kidambi-and-pv-sindhu.jpg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://www.educationworld.in/wp-content/uploads/2019/06/YA-Trisha.jpg"
                alt="badminton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://images.pexels.com/photos/13509963/pexels-photo-13509963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cricket"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://images.shiksha.com/mediadata/images/articles/1667191381phpatSALD.jpeg"
                alt="football"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://media.istockphoto.com/id/1469128111/photo/muscular-man-doing-strength-workout-exercise-in-the-gym.jpg?s=612x612&w=0&k=20&c=9dIuxONRcqCFzEyuL4yaZ9VzQ7GZzQY-9yugmsgdlwo="
                alt="gym"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://images.indianexpress.com/2020/10/Swim.png"
                alt="swimming"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                loading="lazy"
                src="https://st.depositphotos.com/16337376/54702/i/450/depositphotos_547020110-stock-photo-angry-young-indian-athlete-punching.jpg"
                alt="gym"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    );
};

export default Carousel;