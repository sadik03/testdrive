import React from "react";
import "./DataType.css";
import servicesData from "./services.json"; // Assuming you saved the JSON data as services.json
import Lottie from "react-lottie";
import animationData from "../../LottieAnimation/comePlay.json"; // Replace with your Lottie animation file path
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