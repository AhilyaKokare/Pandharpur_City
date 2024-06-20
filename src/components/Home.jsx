import React from "react";
import { Link } from "react-router-dom";
import "../tailwind.css";
import Bg_image from "./Images/Home_bg.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="py-16 px-8 bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bg_image})`,
        backgroundSize: "cover"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center shadow-text">Welcome to Pandharpur</h2>
        <div className="animate-slide-up"> {/* Apply animation to this div */}
          <p className="text-lg mb-6 text-white">
            Welcome to the official website of Pandharpur city! Nestled in the heart of Maharashtra, India, Pandharpur is not just a city; it's a spiritual journey, a cultural extravaganza, and a testament to the rich heritage of our land. From the majestic Vithoba Temple, where devotees from far and wide gather to seek blessings, to the tranquil ghats along the Chandrabhaga river, Pandharpur offers a glimpse into the soul of India. Explore our website to discover the history, traditions, and beauty of Pandharpur, and immerse yourself in the essence of Maharashtra's cultural tapestry.
          </p>
          <p className="text-lg mb-6 text-white">
            Pandharpur is a city located in the Solapur district of Maharashtra, India. It is a famous pilgrimage site and is often referred to as the "Southern Kashi" of India. The city is renowned for its Vithoba Temple, dedicated to Lord Vithoba, a form of Lord Krishna.
          </p>
          <p className="text-lg mb-6 text-white">
            Apart from its religious significance, Pandharpur also boasts of beautiful landscapes, serene ghats along the Chandrabhaga river, and vibrant culture. Visitors can experience the rich traditions of the Warkari sect, who undertake the annual pilgrimage known as the Wari to Pandharpur.
          </p>
          <p className="text-lg mb-6 text-white">
            Explore the charm of Pandharpur city, immerse yourself in spirituality, and witness the beauty of Maharashtra's cultural heritage.
          </p>
          <div className="flex justify-center">
            <Link to="/services" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
