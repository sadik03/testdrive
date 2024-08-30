import React, { useEffect } from "react";
import BackgroundImage from "../assets/home-ban.webp"; // Import the background image
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TypingEffect from "./Home/TypingEffect";
import Trainers from "./Trainers";
import ImageSlide from "./Home/ImageSlide";
import "./CSS/Home.css"; // Make sure to import the CSS file
import Reviews from "./Reviews";


const Home = () => {
  return (
    <div 
      className="home-page"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        backgroundAttachment: 'fixed', 
      }}
    >
      <div className='hero-overlay'></div>
      <div className="hero-content">
        <div className='grid'>
          <div className="typing-effect-container">
            <TypingEffect/>
          </div>
          <div className="image-slide-container">
            <ImageSlide/>
          </div>
        </div>



        
        <div className="Trainer">
        <Trainers/>
        </div>
        <div className="reviews">
          <Reviews/>
        </div>
      </div>




    </div>
  );
};

export default Home;
