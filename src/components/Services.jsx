import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Bg_image from "./Images/About_bg.jpg";
import { categories, servicesByCategory } from "./ServiceDetails";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 1s ease-out;
`;

const PopupWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const SearchButton = styled.button`
  background-color: #6b46c1;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const ServiceItem = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 255, 0.3);
  padding: 20px;
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: 450px; /* Set a fixed height for the scrollable area */
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 255, 6);
    background-color: #cce7ff;
  }
  animation: ${fadeIn} 1s ease-out;

  /* Hide the scrollbar */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  /* Set fixed dimensions for the images */
  img {
    width: 100%; /* Ensures the image fills its container */
    height: 200px; /* Adjust the height as needed */
    object-fit: cover; /* Ensure the image covers its container */
    border-radius: 10px; /* Maintain border-radius */
  }
`;

const Title = styled.h2`
  animation: ${slideIn} 1s ease-out;
  font-size: 6xl;
  color: black;
  text-shadow: 1px 1px 9px rgb(40, 208, 220);
`;

const CategoriesList = styled.ul`
  animation: ${slideIn} 1s ease-out;
`;

const CategoryItem = styled.li`
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
  color: #333;
  &:hover {
    color: #6b46c1;
    transform: scale(1.1);
  }
`;

const ApplyFilterButton = styled.button`
  background-color: #6b46c1;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Message = styled.div`
  font-weight: bold;
  color: ${({ found }) => (found ? "green" : "red")};
`;

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomServices, setRandomServices] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [showPopup, setShowPopup] = useState(false); // State for managing popup visibility
  const [filteredServices, setFilteredServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [address, setAddress] = useState("");
  const [serviceNotFound, setServiceNotFound] = useState(false);
  const [filteredServiceHeading, setFilteredServiceHeading] = useState("");

  useEffect(() => {
    const allServices = Object.values(servicesByCategory).flat();
    const randomServices = allServices.sort(() => Math.random() - 0.5).slice(0, 6); // Display 6 random services initially
    setRandomServices(randomServices);
  }, []);

  const handleClick = (category) => {
    setSelectedCategory(category);
    setFilteredServices(servicesByCategory[category]);
    setFilteredServiceHeading(category);
  };

  const handleApplyFilter = () => {
    const filtered = Object.values(servicesByCategory)
      .flat()
      .filter((service) => {
        if (selectedFilter && service.category !== selectedFilter) {
          return false;
        }
        if (
          serviceName &&
          !service.name.toLowerCase().includes(serviceName.toLowerCase())
        ) {
          return false;
        }
        if (
          address &&
          !service.address.toLowerCase().includes(address.toLowerCase())
        ) {
          return false;
        }
        return true;
      });

    if (filtered.length === 0) {
      setServiceNotFound(true);
    } else {
      setFilteredServices(filtered);
      setFilteredServiceHeading("Filtered Services");
      setServiceNotFound(false);
      // Reset input fields
      setServiceName("");
      setAddress("");
      // Close popup window
      setShowPopup(false);
    }
  };

  return (
    <AnimatedContainer>
      <section
        id="services"
        className="py-16 px-8"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bg_image})`,
          backgroundSize: "cover"
        }}
      >
        <div className="max-w-6xl mx-auto flex">
          <div className="w-1/4 pr-8">
            <Title className="text-4xl font-bold mb-8 ">
              Services in Pandharpur
            </Title>
            <CategoriesList>
              {categories.map((category) => (
                <CategoryItem
                  key={category.id}
                  className="cursor-pointer"
                  style={{ color: category.color }}
                  onClick={() => handleClick(category.name)}
                >
                  {category.name}
                </CategoryItem>
              ))}
            </CategoriesList>
            <ApplyFilterButton onClick={() => setShowPopup(true)}>
              Apply Filter
            </ApplyFilterButton>
          </div>
          <div className="w-3/4">
            {selectedCategory || filteredServices.length > 0 ? (
              <div>
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  {filteredServiceHeading}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.length > 0
                    ? filteredServices.map((service) => (
                        <ServiceItem key={service.id} className="p-6">
                          <h3 className="text-xl font-semibold mb-4">
                            {service.name}
                          </h3>
                          <img
                            src={service.image}
                            alt={service.name}
                            className="mb-4 rounded-lg"
                          />
                          <p className="text-gray-700">
                            {service.description}
                          </p>
                          <p className="text-gray-700">
                            <strong>Specialty:</strong> {service.specialty}
                          </p>
                          <p className="text-gray-700">
                            <strong>Address:</strong> {service.address}
                          </p>
                          <p className="text-gray-700">
                            <strong>Contact:</strong> {service.contact}
                          </p>
                          <p className="text-gray-700">
                            <strong>Services Available:</strong>
                          </p>
                          <ul>
                            {service.servicesAvailable.map((service, index) => (
                              <li
                                key={index}
                                className="text-gray-700 ml-6"
                              >
                                {service}
                              </li>
                            ))}
                          </ul>
                          <a
                            href={service.detailsUrl}
                            className="text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            More Details
                          </a>
                        </ServiceItem>
                      ))
                    : "No services found"}
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {randomServices.map((service) => (
                    <ServiceItem key={service.id} className="p-6">
                      <h3 className="text-xl font-semibold mb-4">
                        {service.name}
                      </h3>
                      <img
                        src={service.image}
                        alt={service.name}
                        className="mb-4 rounded-lg"
                      />
                      <p className="text-gray-700">{service.description}</p>
                      <p className="text-gray-700">
                        <strong>Specialty:</strong> {service.specialty}
                      </p>
                      <p className="text-gray-700">
                        <strong>Address:</strong> {service.address}
                      </p>
                      <p className="text-gray-700">
                        <strong>Contact:</strong> {service.contact}
                      </p>
                      <p className="text-gray-700">
                        <strong>Services Available:</strong>
                      </p>
                      <ul>
                        {service.servicesAvailable.map((service, index) => (
                          <li key={index} className="text-gray-700 ml-6">
                            {service}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={service.detailsUrl}
                        className="text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More Details
                      </a>
                    </ServiceItem>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Popup window */}
      {showPopup && (
        <>
          <Overlay /> {/* Add overlay */}
          <PopupWindow>
            <CloseButton onClick={() => setShowPopup(false)}>×</CloseButton>
            <h2>Search Services</h2>
            <SearchInput
              type="text"
              placeholder="Service Name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
            />
            <SearchInput
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <SearchButton onClick={handleApplyFilter}>Search</SearchButton>
            {/* Display message in the popup window */}
            {serviceNotFound && <Message found={false}>Service not found</Message>}
          </PopupWindow>
        </>
      )}
    </AnimatedContainer>
  );
};

export default Services;
