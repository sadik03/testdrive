import React from 'react';
import { useParams } from 'react-router-dom';
import LottieAnimation from '../../LottieAnimation/LottieAnimation';
import './MembershipDetail.css';


import badmintonAnimation from '../../LottieAnimation/baisic.json';
import swimmingAnimation from '../../LottieAnimation/baisic.json';
import cricketAnimation from '../../LottieAnimation/baisic.json';

const memberships = [
  {
    id: 1,
    title: "3 Months Plan",
    description: "A fast-paced racket sport that enhances agility, reflexes, and cardiovascular health.",
    animation: badmintonAnimation,
  },
  {
    id: 2,
    title: "6 months plan",
    description: "A full-body workout that improves endurance, strength, and flexibility, offering both recreational and competitive benefits.",
    animation: swimmingAnimation,
  },
  {
    id: 3,
    title: "12 Months plan",
    description: "A team sport involving batting, bowling, and fielding, enhancing strategic thinking, coordination, and physical fitness.",
    animation: cricketAnimation,
  }
 
];

const MembershipDetail = () => {
  const { id } = useParams();
  const membership = memberships.find((item) => item.id === parseInt(id));

  if (!membership) {
    return <p>Membership not found</p>;
  }

  return (
    <div className="membership-detail-container">
      <div className="membership-info">
        <h1 className="membership-title">{membership.title}</h1>
        <div className="membership-animation">
          <LottieAnimation animationData={membership.animation} size={200} />
        </div>
        <p className="membership-description">{membership.description}</p>
      </div>
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" required />

          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" name="expiryDate" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />

          <button type="submit" className="btn-primary">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default MembershipDetail;
