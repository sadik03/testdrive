import React from 'react';
import { useNavigate } from 'react-router-dom';
import aboutImg from '../assets/about.png';
import founder1 from '../assets/Founder1.png';
import founder2 from '../assets/Founder2.png';
import founder3 from '../assets/Founder3.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Lottie from 'lottie-react';
import aboutAnimation from '../LottieAnimation/about.json';
import Loader from './Loader'; // Import the Loader component
import './CSS/About.css';
import BackgroundImage from "../assets/bn6.jpg"; // Import the background image

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <div 
      className="about-page"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Blurred background image */}
      <div
        className="blurred-background"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          position: 'absolute',
          backgroundAttachment: 'fixed', 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>

      <div className="about-container">
        {/* about section */}
        <div className="about-section">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="about-image"
          >
            <Lottie 
              animationData={aboutAnimation}
              loop={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="about-text"
          >
            <h2 className="about-title">
              About ARS Kreedashala Pvt Ltd
            </h2>
            <p className="about-description">
              ARS Kreedashala Pvt Ltd is an Indian sports education organization founded by sports enthusiasts with a shared vision: integrating sports into every child's education. They have built a structured Sports and Physical Education (P.E) curriculum based on the recognized NASPE Standards (National Association for Sports & Physical Education). This curriculum aims to develop a healthier and fitter generation through high-quality sports education.
              <br /><br />
              Our mission is to provide every grassroots player with the opportunity to enhance their skills in the early stages of their sports career. We have identified a gap in the market where basic skill development and static training are not being addressed by sports schools or academies. Our solution is to offer personalized training with the help of IT support to ensure every athlete reaches their full potential. Our ultimate goal is to create a significant impact in the sports industry by winning the maximum number of medals in the Olympic Games.
            </p>
            <button className="btn-success" onClick={handleLearnMore}>Learn More</button>
          </motion.div>
        </div>

        {/* founder images */}
        <div className="founders-section">
          <h2 className="founders-title">
            Our Founders
          </h2>
          <div className="founders-images">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder1} 
                alt="Founder 1" 
                className="founder-img"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder2} 
                alt="Founder 2" 
                className="founder-img"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="founder-image"
            >
              <img 
                src={founder3} 
                alt="Founder 3" 
                className="founder-img"
              />
            </motion.div>
          </div>
        </div>

        {/* company stats */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="stats-section"
        >
          <div className="stats-content">
            <div className="stats-text">
              <h2 className="stats-title">
                Helping a local <br /> <span className="stats-highlight">business reinvent itself</span>
              </h2>
              <p>We reached here with our hard work and dedication</p>
            </div>

            {/* stats */}
            <div className="stats-details">
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/group.png" alt="Members" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/clubs.png" alt="Clubs" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/click.png" alt="Event Bookings" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="stats-item">
                <div className="stats-icon">
                  <img src="/src/assets/icons/payments.png" alt="Payments" />
                </div>
                <div className="stats-info">
                  <h4 className="stats-number">1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
