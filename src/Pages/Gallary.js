import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CSS/Gallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const gallery = [
    {
      image: "https://www.timberlineconstruction.com/wp-content/uploads/construction_firm_mass_health_club_LAFitnessStoughton2-1280x853.jpg",
    },
    {
      image: "https://www.gannett-cdn.com/presto/2019/03/29/PPHX/28bc40a3-9a6a-4879-b97a-9de50c5195a9-LA_FITNESS_HIIT1s_-_Copy.jpg",
    },
    {
      image: "https://i.pinimg.com/originals/79/ca/76/79ca766a08729673fa9f0f4136a152a1.jpg",
    },
    {
      image: "https://www.timberlineconstruction.com/wp-content/uploads/construction_firm_mass_health_club_LAFitnessStoughton4-1280x853.jpg",
    },
    // Add more images here...
  ];

  const [current, setCurrent] = useState(0);
  const length = gallery.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      delay: 0.4,
      duration: 1,
      y: "0",
      opacity: 1,
      ease: "ease-in",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "restart complete",
      },
    });
  }, []);

  return (
    <div className="gallery--container">
      <div className="gallery--header">
        <h2 className="title">Gallery</h2>
        <div className="underline"></div>
        <div className="anim" ref={textRef}>
          <p>Take a tour around our facility...</p>
          <p>
            By looking through our gallery, you can see what you'll find at{" "}
            <strong>Fitzen Gym</strong>. There's lots of equipment to check out
            and plenty of friendly faces too!
          </p>
        </div>
      </div>
      <section className="slider">
        <i className="fas fa-chevron-left left-arrow" onClick={prevSlide}></i>
        <i className="fas fa-chevron-right right-arrow" onClick={nextSlide}></i>

        {gallery.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="Gallery Slide" className="image" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
