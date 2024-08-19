import React from 'react';
import Lottie from 'react-lottie';
import jim from './jim.json'; // Adjust the path to your animation JSON file

const LottieAnimation = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={180} width={200} />;
};

export default LottieAnimation;
