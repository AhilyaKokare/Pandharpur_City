// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold">Pandharpur City</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
