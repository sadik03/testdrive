import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import "./TypingEffect.css"; // Make sure to import the CSS file
import { useNavigate } from 'react-router-dom';
const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Football','Cricket','Badminton','Swimming','Yoga'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })



    const navigate = useNavigate();

    const handleLearnMoreClick = () => {
        navigate('/AdmissionForm'); // Update with the actual registration page path
    };

    return (
      <div className="container">
        <h2 className="text-ars">
           ARS KREEDASHALA
        </h2>
     

          <button className="admission-text" onClick={handleLearnMoreClick}>   Admission Going On</button>
        
        
        <div className="typing">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="orange" />
        </div>
        
        <p className="text-ars">
          We provide individualized academic support and flexible,
          permeable educational pathways that are tailored to each student's needs.
          your particular requirements and goals. Since our ambitions coincide with yours.
        </p>
        <button className="btn-text">
          Learn More
        </button>
      </div>
    );
};

export default TypingEffect;