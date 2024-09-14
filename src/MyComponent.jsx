import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home'); // navigate to the home route
  };

  return (
    <button onClick={goToHome}>Go to Home</button>
  );
};

export default MyComponent;
