import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaBasketballBall, FaMedal, FaUsers } from 'react-icons/fa';
import Slider from 'react-slick';
import aboutAnimation from '../../LottieAnimation/about.json';
import BackgroundImage from "../../assets/bn6.jpg";
import './About.css';

// Testimonial Data
const testimonials = [
  {
    name: "John Doe",
    position: "Parent",
    feedback: "Kreedashala has been a game-changer for my child. The coaches are amazing, and the curriculum is top-notch!"
  },
  {
    name: "Jane Smith",
    position: "Student",
    feedback: "I've never been more excited about sports. The environment here pushes you to be your best self every day!"
  },
  {
    name: "Michael Brown",
    position: "Coach",
    feedback: "Kreedashala is not just a sports academy, it's a family that nurtures and builds champions."
  }
];

// FeatureCard Component
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="feature-card"
    whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </motion.div>
);

// TestimonialCard Component
const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <p className="testimonial-feedback">"{testimonial.feedback}"</p>
    <h4 className="testimonial-name">{testimonial.name}</h4>
    <p className="testimonial-position">{testimonial.position}</p>
  </div>
);

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <Parallax bgImage={BackgroundImage} strength={500}>
        <div className="hero-section">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1 className="hero-title">Welcome to ARS Kreedashala</h1>
            <p className="hero-subtitle">Empowering the Future of Sports</p>
          </motion.div>
        </div>
      </Parallax>

      {/* About Section */}
      <div className="about-container">
        <div className="about-section">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie 
              animationData={aboutAnimation}
              loop={true}
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="about-title">About ARS Kreedashala Pvt Ltd</h2>
            <p className="about-description">
            Kreedshala, born from the vision of two passionate sports enthusiasts, is on a mission to weave sports into the core of every child’s education. The organization believes that sports education is essential for holistic development, rather than being just an extracurricular activity. With this philosophy, Kreedshala focuses on creating a structured Sports and Physical Education (P.E.) curriculum that aligns with internationally recognized standards. This well-designed curriculum serves as the foundation for promoting health, fitness, and well-being among students, ensuring they receive a high-quality sports education.
Kreedshala champions the values of inclusivity, accessibility, and excellence. Its educational approach emphasizes not only physical prowess but also the development of discipline, perseverance, and teamwork. By combining theoretical knowledge with practical experience, the organization aims to empower students with both the skills and the mindset needed to succeed in sports and beyond. With a dedication to excellence, Kreedshala is driving the integration of sports education into the lives of young learners, helping to mold well-rounded individuals prepared to thrive in all aspects of life.

            </p>
            <button className="btn-success" onClick={handleLearnMore}>Learn More</button>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <FeatureCard 
            icon={<FaBasketballBall />} 
            title="International Standards" 
            description="Our curriculum is aligned with the best practices in sports education." 
          />
          <FeatureCard 
            icon={<FaMedal />} 
            title="Excellence" 
            description="We nurture young talent to become future champions." 
          />
          <FeatureCard 
            icon={<FaUsers />} 
            title="Community" 
            description="Building a network of passionate sports enthusiasts." 
          />
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="testimonials-title">What People Are Saying</h2>
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Slider>
        </div>

        {/* Other Sections (Founders, Achievements, etc.) */}
        {/* ... */}
      </div>
    </div>
  );
};

export default About;
