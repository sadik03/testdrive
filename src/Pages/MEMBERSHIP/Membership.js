import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Fade } from 'react-reveal';
import LottieAnimation from '../../LottieAnimation/LottieAnimation';
import badmintonAnimation from '../../LottieAnimation/baisic.json';
import swimmingAnimation from '../../LottieAnimation/running.json';
import cricketAnimation from '../../LottieAnimation/Weightlifting.json';
import './Membership.css';
import Loader from './Loader'; // Import the Loader component
import BackgroundImage from "../../assets/bn5.jpg"; // Import the background image
import Footer from '../Footer/Footer';


const membershipPlans = [
  {
    id: 1,
    title: "Basic",
    description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
    price: "$50",
    durations: ["- Single Club Access",
    "- Fitness Assessment",
    "- Basketball Court Access",
    "- One session with personal trainer Monthly",
],
    animation: badmintonAnimation,
    quote: "Master the basics and elevate your game to the next level!",
  },
  {
    id: 2,
    title: "Premium",
    description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
    price: "$100",
    durations: ["- Begginer Amenites Included",
    "- Unlimited Club Access",
    "- Unlimited Group Exercise",
    "- Unlimited Tanning",
   " - 20% off Supplements & Drinks"],
    animation: swimmingAnimation,
    quote: "Push your limits and achieve greatness with every stroke!",
  },
  {
    id: 3,
    title: "Elite",
    description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
    price: "$150",
    durations: ["- All Pro Amenites Included",
    "- Unlimited Team Training",
    "- Monthly Progress Meating",
    "- Personalized Eating Plan from a Certified Nutritionist"],
    animation: cricketAnimation,
    quote: "Lead your team to victory and conquer the field!",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Membership = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (


    <div>


    <div 
      className="home-page"
      style={{
        position: 'relative',
  
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
          filter: 'blur(5px)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundAttachment: 'fixed', 
        }}
      ></div>

      {/* Membership content */}
      <div className="membership-container">



        <Fade top>
          <h1 className="membership-text">Membership Plans</h1>
        </Fade>


        <div>
   
        </div>



        
        <div className="membership-cards">
          {membershipPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className="membership-card"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: plan.id * 0.2 }}
            >
              <Link to={`/member/${plan.id}`} className="membership-card-link">
                <div className="membership-card-content">
                  <div className="animation-container">
                    <LottieAnimation animationData={plan.animation} size={100} />
                  </div>
                  <h2 className="membership-card-title">{plan.title}</h2>
                  <p className="membership-card-description">{plan.description}</p>
                  <p className="membership-card-price">{plan.price}</p>
                  <ul className="membership-card-durations">
                    {plan.durations.map((duration, index) => (
                      <li key={index}>{duration}</li>
                    ))}
                  </ul>
                  <blockquote className="membership-card-quote">
                    "{plan.quote}"
                  </blockquote>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
      </div>


    </div>
    <Footer/>

</div>
  );
};

export default Membership;
