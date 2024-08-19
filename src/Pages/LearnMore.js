import React from 'react';
import { motion } from 'framer-motion';
import './CSS/LearnMore.css'; // Import CSS for styling
import BackgroundImage from "../assets/bnb9.jpg";
// Images
import academyImage1 from '../assets/academy1.jpg'
import academyImage2 from '../assets/academy1.jpg'
import academyImage3 from '../assets/academy1.jpg';

// Motion variants
const fadeIn = (direction = 'up', delay = 0.1) => {
  return {
    hidden: { opacity: 0, y: direction === 'up' ? 30 : -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay } }
  };
};

const LearnMore = () => {
  return (



    
    <div className="learn-more-container">
         <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', 
          filter: 'blur(8px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      ></div>
      {/* Introduction Section */}
      <section className="intro-section">
        <motion.h1
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="intro-title"
        >
          Learn More About ARS Kreedashala Pvt Ltd
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="intro-description"
        >
          ARS Kreedashala Pvt Ltd offers a state-of-the-art sports education curriculum designed to enhance the skills of athletes from a young age. Explore how our innovative approach and facilities set us apart.
        </motion.p>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery-section">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="gallery-image"
        >
          <img src={academyImage1} alt="Academy Facility 1" />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="gallery-image"
        >
          <img src={academyImage2} alt="Academy Facility 2" />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="gallery-image"
        >
          <img src={academyImage3} alt="Academy Facility 3" />
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="details-section">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="details-title"
        >
          Our Facilities and Programs
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="details-description"
        >
          Our academy is equipped with modern facilities including advanced training equipment, expert coaches, and personalized training programs. We are committed to nurturing talent and helping athletes achieve their goals.
        </motion.p>
      </section>
    </div>
  );
};

export default LearnMore;
