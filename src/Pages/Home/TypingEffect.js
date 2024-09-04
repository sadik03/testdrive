import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './TypingEffect.css'; // Make sure to import the CSS file
import { useNavigate } from 'react-router-dom';

const TypingEffect = () => {
  const [texts] = useTypewriter({
    words: ['Football', 'Cricket', 'Badminton', 'Swimming', 'Yoga'],
    loop: {},
    typeSpeed: 300,
    delaySpeed: 80,
  });

  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/AdmissionForm'); // Update with the actual registration page path
  };

  return (
    <div className="container">
      <h2 className="text-ars">ARS KREEDASHALA</h2>

      <button className="admission-text" onClick={handleLearnMoreClick}>
        Admission Going On
      </button>

      <div className="typing">
        <span className="typing-words">{texts}</span> {/* Add class to style words */}
        <Cursor cursorStyle="." cursorColor="orange" />
      </div>
      <p className="btn-para">
      Kreedshala integrates sports into education for holistic development. With a globally aligned P.E. curriculum, it promotes health, fitness, and values like discipline and teamwork. Combining theory and practice, Kreedshala empowers students with skills for success both in sports and life.
      </p>
      <button className="btn-text">Learn More</button>
    </div>
  );
};

export default TypingEffect;
