import React, { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import Container from "../../../Components/Container/Container";
import FadeInAnimation from "../../../Components/FadeInAnimation/FadeInAnimation";
import Reavel from "../../../Components/Reveal/Reavel";

// Service Page Component
const Service = () => {
  const [services, setServices] = useState([]);

  // Fetch services data from public folder
  useEffect(() => {
    fetch("/Service.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="bg-[#68a9d3] dark:bg-gray-800 pb-10 lg:pb-20" id="services">
      <SectionHeader heading={"Our Services"}></SectionHeader>
      <Container>
        <div className="text-center">
          <Reavel>
            <p className="dark:text-white text-slate-700 mb-6">
              Discover a wide range of services designed to help athletes of all levels reach their full potential. From personalized training programs to Olympic preparation, we offer everything you need to excel.
            </p>
          </Reavel>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.length > 0 ? (
            services.map((service) => (
              <FadeInAnimation key={service.id}>
                <div className="service-card bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:scale-105 transform transition duration-500">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-md mb-4 w-full h-40 object-cover"
                  />
                  <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>
              </FadeInAnimation>
            ))
          ) : (
            <p className="dark:text-white text-gray-700">Loading services...</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Service;
