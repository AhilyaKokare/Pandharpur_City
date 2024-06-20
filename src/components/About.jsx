import React from "react";
import "../tailwind.css";
import styled, { keyframes } from "styled-components";
import Bg_image from "./Images/About_bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./Images/slideshow1.jpg";
import Image2 from "./Images/slideshow2.jpg";
import Image3 from "./Images/slideshow3.jpg";
import Image4 from "./Images/slideshow4.jpg";
import Image5 from "./Images/slideshow5.jpg";

// Keyframes for animations
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for animation
const AboutSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background-color: #f3f4f6;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Bg_image});
  background-size: cover;
  z-index: -1;
  animation: ${fadeIn} 1s ease-out;
`;

const AboutContent = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  animation: ${slideUp} 1s ease-out;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 24rem;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
  }
  
  .slick-slide img:hover {
    transform: scale(1.05);
  }
`;

const AnimatedText = styled.p`
  animation: ${fadeIn} 1s ease-out;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff4d00;
  }
`;

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true // Set to true to ensure equal sizes
  };

  return (
    <AboutSection id="about" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bg_image})`,
      backgroundSize: "cover"
    }}>
      <BackgroundOverlay />
      <AboutContent>
        <h2 className="text-5xl font-bold mb-4 text-center shadow-text">About Pandharpur</h2>
        <StyledSlider {...settings}>
          <div>
            <img src={Image1} alt="Image 1" />
          </div>
          <div>
            <img src={Image2} alt="Image 2" />
          </div>
          <div>
            <img src={Image3} alt="Image 3" />
          </div>
          <div>
            <img src={Image4} alt="Image 4" />
          </div>
          <div>
            <img src={Image5} alt="Image 5" />
          </div>
        </StyledSlider>
        <div className="text-white mt-8">
          <AnimatedText className="text-lg mb-4">
            Located on the banks of the Chandrabhaga River, Pandharpur is a sacred town in the Solapur district of Maharashtra, India. It holds immense religious significance, especially for devotees of Lord Vithoba, also known as Vitthal or Pandurang.
          </AnimatedText>
          <AnimatedText className="text-lg mb-4">
            The town is renowned for its Vithoba Temple, which is one of the most revered temples in Maharashtra. The temple is dedicated to Lord Vithoba, a form of Lord Krishna, and attracts millions of pilgrims, known as Varkaris, every year during the Ashadi Ekadashi and Kartiki Ekadashi festivals.
          </AnimatedText>
          <AnimatedText className="text-lg mb-4">
            Besides its religious importance, Pandharpur also offers picturesque landscapes, including lush green fields and serene ghats along the Chandrabhaga River. Visitors can experience the vibrant culture of Maharashtra through various cultural events and festivals held in the town.
          </AnimatedText>
          <AnimatedText className="text-lg mb-4">
            Explore the rich history, spirituality, and cultural heritage of Pandharpur, and immerse yourself in the divine aura of this sacred town.
          </AnimatedText>
          <AnimatedText className="text-lg mb-4">
            Beyond its religious aura, Pandharpur boasts picturesque landscapes adorned by the tranquil Chandrabhaga river and vibrant cultural festivities. The city's rich history, marked by the traditions of the Warkari sect and the annual Wari pilgrimage, adds to its allure. Exploring Pandharpur is a journey into the heart of Maharashtra's cultural heritage, where spirituality intertwines seamlessly with the beauty of its surroundings.
          </AnimatedText>
        </div>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
