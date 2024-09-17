import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";


const memberships = [
  {
    title: "Basic Membership",
    description: "Access to all basic training sessions and facility usage.",
    price: "$30 / month",
    benefits: ["Access to gym", "Personal coach consultations", "Standard support"],
  },
  {
    title: "Pro Membership",
    description: "Enhanced training and priority booking for all sports facilities.",
    price: "$60 / month",
    benefits: [
      "All Basic Membership benefits",
      "Priority access to courts and fields",
      "Specialized training programs",
    ],
  },
  {
    title: "Elite Membership",
    description: "For athletes who demand the best, including personal coaching.",
    price: "$100 / month",
    benefits: [
      "All Pro Membership benefits",
      "One-on-one coaching sessions",
      "Customized diet and fitness plans",
    ],
  },
];

const Membership = () => {
  return (
    <div className="dark:bg-gray-700 bg-[#68a9d3] pb-10 lg:pb-20" id="membership">
      <SectionHeader heading={"Membership Plans"}></SectionHeader>
      <Container>
        <div className="text-center">
          <Reavel>
            <p className="dark:text-white text-slate-700 mb-6">
              Join ARS Kreedashala and unlock a world of opportunities to enhance your athletic skills. Whether you're a beginner or an elite athlete, we have a membership plan that suits your needs. Choose from our Basic, Pro, or Elite memberships, each offering unique benefits to help you reach your full potential.
            </p>
          </Reavel>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {memberships.map((membership, index) => (
            <FadeInAnimation key={index}>
              <div className="membership-card bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:scale-105 transform transition duration-500">
                <h3 className="text-2xl font-bold mb-4 dark:text-white text-gray-900">
                  {membership.title}
                </h3>
                <p className="dark:text-gray-300 text-gray-600 mb-4">
                  {membership.description}
                </p>
                <p className="text-xl font-semibold text-amber-500 mb-6">
                  {membership.price}
                </p>
                <ul className="list-disc list-inside dark:text-gray-300 text-gray-600">
                  {membership.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2">{benefit}</li>
                  ))}
                </ul>
                <button className="mt-6 bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition">
                  Join Now
                </button>
              </div>
            </FadeInAnimation>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Membership;
