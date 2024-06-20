// // Footer.js
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-4 px-8">
//       <div className="text-center">
//         <p>&copy; 2024 Pandharpur City. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8">
      <div className="flex justify-center items-center">
        <p className="mr-4">&copy; 2024 Pandharpur City. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
