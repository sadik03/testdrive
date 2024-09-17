import React from "react";
import { useLocation } from "react-router-dom";
import "./ProgressBar.css";

const ProgressBar = () => {
  const location = useLocation();

  const steps = [
    { label: "Details", path: "/sports-detail" },
    { label: "Payment", path: "/payment" },
    { label: "Confirmation", path: "/confirmation" },
  ];

  const currentStep = steps.findIndex(step => step.path === location.pathname);

  return (
    <div className="progress-bar-container">
      {steps.map((step, index) => (
        <div key={index} className={`progress-step ${index <= currentStep ? "active" : ""}`}>
          <div className="step-number">{index + 1}</div>
          <div className="step-label">{step.label}</div>
        </div>
      ))}
      <div className="progress-indicator" style={{ width: `${(currentStep + 1) / steps.length * 100}%` }} />
    </div>
  );
};

export default ProgressBar;