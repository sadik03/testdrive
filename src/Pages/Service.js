// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Fade } from "react-reveal";
// import LottieAnimation from '../LottieAnimation/LottieAnimation';

// import gymAnimation from '../LottieAnimation/jim.json';
// import yogaAnimation from '../LottieAnimation/yoga.json';
// import badmintonAnimation from '../LottieAnimation/badminton.json';
// import swimmingAnimation from '../LottieAnimation/swimming.json';
// import cricketAnimation from '../LottieAnimation/Cricket.json';
// import './CSS/Service.css';
// import BackgroundImage from "../assets/bn6.jpg"; // Import the background image

// export const servicess = [
//   {
//     id: 1,
//     title: "Badminton",
//     image: "https://example.com/badminton.jpg",
//     description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
//     animation: badmintonAnimation,
//   },
//   {
//     id: 2,
//     title: "Swimming",
//     image: "https://example.com/swimming.jpg",
//     description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
//     animation: swimmingAnimation,
//   },
//   {
//     id: 3,
//     title: "Cricket",
//     image: "https://example.com/cricket.jpg",
//     description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
//     animation: cricketAnimation,
//   },
//   {
//     id: 4,
//     title: "Yoga",
//     image: "https://example.com/yoga.jpg",
//     description: "A holistic practice combining physical postures, breathing exercises, and meditation to improve flexibility, strength, and mental well-being.",
//     animation: yogaAnimation,
//     size: 200,
//   },
//   {
//     id: 5,
//     title: "Gym",
//     image: "https://example.com/gym.jpg",
//     description: "A facility equipped for various forms of exercise, focusing on strength training, cardiovascular workouts, and overall fitness.",
//     animation: gymAnimation,
//     size: 200,
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// const Service = () => {
//   return (
//     <div 
//       className="home-page"
//       style={{
//         position: 'relative',
//         minHeight: '100vh',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Blurred background image */}
//       <div
//         className="blurred-background"
//         style={{
//           backgroundImage: `url(${BackgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed', 
//           backgroundRepeat: 'no-repeat',
//           filter: 'blur(8px)',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: -1,
//         }}
//       ></div>

//       {/* Service cards content */}
//       <div className="service-container">
//         <Fade top>
//           <h1 className="service-title">Our Services</h1>
//         </Fade>
//         <div className="service-cards">
//           {servicess.map((service) => (
//             <motion.div
//               key={service.id}
//               className="service-card-wrapper"
//               initial="hidden"
//               animate="visible"
//               variants={cardVariants}
//               transition={{ duration: 0.5, delay: service.id * 0.2 }}
//             >
//               <Link to={`/service/${service.id}`} className="service-card-link">
//                 <div className="service-card">
//                   <div className="animation-container">
//                     <LottieAnimation animationData={service.animation} size={service.size} />
//                   </div>
//                   <h2 className="service-card-title">{service.title}</h2>
//                   <p className="service-description">{service.description}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
import React from "react";
import "./CSS/DataType.css";
import servicesData from "./services.json"; // Assuming you saved the JSON data as services.json
import Lottie from "react-lottie";
import animationData from "../LottieAnimation/comePlay.json"; // Replace with your Lottie animation file path
import { useNavigate } from 'react-router-dom';


const Service = () => {

  const navigate = useNavigate();

  const handleComePlay = () => {
    navigate('/ComePlay');
 
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="service">
        <h1 className="service-title-main">Service</h1> {/* Updated the title class */}
      </div>
      <div className="services-section">
        {servicesData.services.map((service) => (
          <div key={service.id} className="service-card">
            <div
              className="blurred-background"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-vector/blue-curve-frame-template_53876-114605.jpg?uid=R69733851&ga=GA1.1.359075378.1700329611&semt=ais_hybrid')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                filter: "blur(8px)",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
              }}
            ></div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <img
              src={service.img}
              alt={service.title}
              className="service-image"
            />
          </div>
        ))}
      </div>

      <div className="comePlay">
        <h6 className="Head-title">COME AND PLAY</h6>
        <div className="card">
          <Lottie options={defaultOptions} height={300} width={400} />
          <button className="play-button" onClick={handleComePlay}>Come and Play</button>
        </div>

        
  
      </div>
 
    </div>


  );
};

export default Service;