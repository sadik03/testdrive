import React, { useState } from 'react';
import "./CSS/QuestionSlider.css";

const questions = [
  {
    question: "What is the size of a football field?",
    answer: "A football field is 100 yards long and 53.3 yards wide."
  },
  {
    question: "How many players are on a cricket team?",
    answer: "A cricket team consists of 11 players."
  },
  {
    question: "What is the weight of a badminton shuttlecock?",
    answer: "A badminton shuttlecock weighs between 4.74 and 5.50 grams."
  },
  {
    question: "How many lanes are there in an Olympic swimming pool?",
    answer: "There are 8 lanes in an Olympic swimming pool."
  },
  {
    question: "What is the length of a yoga mat?",
    answer: "A standard yoga mat is about 68 inches long."
  },
  {
    question: "How many minutes are there in a football match?",
    answer: "A football match lasts 90 minutes."
  },
  {
    question: "What is the standard height of a basketball hoop?",
    answer: "The standard height of a basketball hoop is 10 feet."
  },
  {
    question: "How many players are on a volleyball team?",
    answer: "A volleyball team consists of 6 players."
  },
];

const QuestionSlider = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="question-slider">
      {questions.map((item, index) => (
        <div key={index} className="question-item">
          <h3 onClick={() => toggleAnswer(index)}>
            {item.question}
          </h3>
          {openIndex === index && <p className="answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default QuestionSlider;
