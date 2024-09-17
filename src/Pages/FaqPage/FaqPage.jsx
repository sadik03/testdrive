import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FaqPage.css"; // Assuming you create a CSS file for custom styling

const faqData = [
  {
    question: "What is ASR Kreedashala?",
    answer:
      "ARS Kreedashala is a platform focused on nurturing athletes of all levels, fostering a community built on teamwork, passion, and excellence, and helping individuals achieve their full potential in sports and life..",
  },
  {
    question: "How do I register for the programs?",
    answer:
      "You can register by visiting the registration page and following the steps provided.",
  },
  {
    question: "What are the available payment methods?",
    answer:
      "We accept payments via credit card, debit card, and UPI. For more details, visit the payment section.",
  },
  {
    question: "Can I cancel my registration?",
    answer:
      "Yes, cancellations are allowed within 7 days of registration. Please contact support for assistance.",
  },
  {
    question: "Who can I contact for support?",
    answer:
      "You can reach out to our support team at - support@arskreedashala.com.",
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container ">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h2>{item.question}</h2>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
