import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../LottieAnimation/loading.json'; // Update path as needed
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: '100px', height: '100px' }} // Adjust size as needed
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
