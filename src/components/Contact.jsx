// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Keyframe for the scale animation
// const scale = keyframes`
//   from {
//     transform: scale(0.9);
//   }
//   to {
//     transform: scale(1);
//   }
// `;

// // Styled components for animation
// const AnimatedSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #f8f8f8;
// `;

// const ContactContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const ContactInfoCard = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   margin-bottom: 2rem;
//   animation: ${scale} 0.5s ease-out;
// `;

// const ContactMessageCard = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   animation: ${scale} 0.5s ease-out;
// `;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #333;
// `;

// const ContactInfoItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const InfoIcon = styled.svg`
//   width: 1.5rem;
//   height: 1.5rem;
//   margin-right: 1rem;
//   fill: #3182ce;
// `;

// const ContactInfoText = styled.p`
//   font-size: 1.2rem; /* Decreased font size */
//   color: #4a5568;
// `;

// const ContactForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1.5rem;
// `;

// const FormLabel = styled.label`
//   font-size: 1.2rem; /* Decreased font size */
//   color: #4a5568;
// `;

// const FormInput = styled.input`
//   border: 2px solid #cbd5e0;
//   border-radius: 5px;
//   padding: 0.75rem;
//   font-size: 1.5rem;
// `;

// const FormTextarea = styled.textarea`
//   border: 2px solid #cbd5e0;
//   border-radius: 5px;
//   padding: 0.75rem;
//   font-size: 1.5rem;
// `;

// const SubmitButton = styled.button`
//   background-color: #4299e1;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 0.50rem  0.5rem;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #3182ce;
//   }
// `;

// const Contact = () => {
//   return (
//     <AnimatedSection id="contact">
//       <ContactContainer>
//         <ContactTitle>Contact Us</ContactTitle>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <ContactInfoCard>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>info@pandharpurcity.com</ContactInfoText>
//             </ContactInfoItem>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>+91 1234567890</ContactInfoText>
//             </ContactInfoItem>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>Pandharpur, Solapur, Maharashtra, India</ContactInfoText>
//             </ContactInfoItem>
//           </ContactInfoCard>
//           <ContactMessageCard>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send us a Message</h3>
//             <ContactForm>
//               <div>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <FormInput type="text" id="name" name="name" />
//               </div>
//               <div>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <FormInput type="email" id="email" name="email" />
//               </div>
//               <div>
//                 <FormLabel htmlFor="message">Message</FormLabel>
//                 <FormTextarea id="message" name="message" rows="4" />
//               </div>
//               <div>
//                 <SubmitButton type="submit">Send Message</SubmitButton>
//               </div>
//             </ContactForm>
//           </ContactMessageCard>
//         </div>
//       </ContactContainer>
//     </AnimatedSection>
//   );
// };

// export default Contact;

















// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Keyframe for the scale animation
// const scale = keyframes`
//   from {
//     transform: scale(0.9);
//   }
//   to {
//     transform: scale(1);
//   }
// `;

// // Styled components for animation
// const AnimatedSection = styled.section`
//   padding: 4rem 2rem;
//   background-color: #f8f8f8;
// `;

// const ContactContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
// `;

// const ContactInfoCard = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   margin-bottom: 2rem;
//   animation: ${scale} 0.5s ease-out;
// `;

// const ContactMessageCard = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
//   animation: ${scale} 0.5s ease-out;
// `;

// const ContactTitle = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #333;
// `;

// const ContactInfoItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 1.5rem;
// `;

// const InfoIcon = styled.svg`
//   width: 1.5rem;
//   height: 1.5rem;
//   margin-right: 1rem;
//   fill: #3182ce;
// `;

// const ContactInfoText = styled.p`
//   font-size: 1.2rem; /* Decreased font size */
//   color: #4a5568;
// `;

// const ContactForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1.5rem;
// `;

// const FormLabel = styled.label`
//   font-size: 1.2rem; /* Decreased font size */
//   color: #4a5568;
// `;

// const FormInput = styled.input`
//   border: 2px solid #cbd5e0;
//   border-radius: 5px;
//   padding: 0.75rem;
//   font-size: 1.5rem;
// `;

// const FormTextarea = styled.textarea`
//   border: 2px solid #cbd5e0;
//   border-radius: 5px;
//   padding: 0.75rem;
//   font-size: 1.5rem;
// `;

// const SubmitButton = styled.button`
//   background-color: #4299e1;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   padding: 0.50rem  0.5rem;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #3182ce;
//   }
// `;

// const Contact = () => {
//   return (
//     <AnimatedSection id="contact">
//       <ContactContainer>
//         <ContactTitle>Contact Us</ContactTitle>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <ContactInfoCard>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>info@pandharpurcity.com</ContactInfoText>
//             </ContactInfoItem>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>+91 1234567890</ContactInfoText>
//             </ContactInfoItem>
//             <ContactInfoItem>
//               <InfoIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
//               </InfoIcon>
//               <ContactInfoText>Pandharpur, Solapur, Maharashtra, India</ContactInfoText>
//             </ContactInfoItem>
//           </ContactInfoCard>
//           <ContactMessageCard>
//             <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send us a Message</h3>
//             <ContactForm>
//               <div>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <FormInput type="text" id="name" name="name" />
//               </div>
//               <div>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <FormInput type="email" id="email" name="email" />
//               </div>
//               <div>
//                 <FormLabel htmlFor="message">Message</FormLabel>
//                 <FormTextarea id="message" name="message" rows="4" />
//               </div>
//               <div>
//                 <SubmitButton type="submit">Send Message</SubmitButton>
//               </div>
//             </ContactForm>
//           </ContactMessageCard>
//         </div>
//       </ContactContainer>
//     </AnimatedSection>
//   );
// };

// export default Contact;

















import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Keyframe for the scale animation
const scale = keyframes`
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
`;

// Styled components for animation
const AnimatedSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactInfoCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
  animation: ${scale} 0.5s ease-out;
`;

const ContactMessageCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  animation: ${scale} 0.5s ease-out;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  fill: #3182ce;
`;

const ContactInfoText = styled.p`
  font-size: 1.2rem; /* Decreased font size */
  color: #4a5568;
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

const FormLabel = styled.label`
  font-size: 1.2rem; /* Decreased font size */
  color: #4a5568;
`;

const FormInput = styled.input`
  border: 2px solid #cbd5e0;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.5rem;
`;

const FormTextarea = styled.textarea`
  border: 2px solid #cbd5e0;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #4299e1;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.50rem  0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3182ce;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_o9lfc02",
        "template_jgfnekd",
        e.target,
        "R_cdcp1qAAgJijtNm"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <AnimatedSection id="contact">
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfoCard>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Information
            </h3>
            <ContactInfoItem>
              <InfoIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </InfoIcon>
              <ContactInfoText>info@pandharpurcity.com</ContactInfoText>
            </ContactInfoItem>
            <ContactInfoItem>
              <InfoIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </InfoIcon>
              <ContactInfoText>+91 1234567890</ContactInfoText>
            </ContactInfoItem>
            <ContactInfoItem>
              <InfoIcon
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a1 1 0 11-2 0 1 1 0 012 0zM10 3a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm4-7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zM6 7a1 1 0 100-2 1 1 0 000 2zm0 10a1 1 0 11-2 0 1 1 0 012 0zm-2-3a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0zm-2 3a1 1 0 11-2 0 1 1 0 012 0zM3 14a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </InfoIcon>
              <ContactInfoText>
                Pandharpur, Solapur, Maharashtra, India
              </ContactInfoText>
            </ContactInfoItem>
          </ContactInfoCard>
          <ContactMessageCard>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Send us a Message
            </h3>
            <ContactForm onSubmit={sendEmail}>
              <div>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div>
                <SubmitButton type="submit">Send Message</SubmitButton>
              </div>
            </ContactForm>
          </ContactMessageCard>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
      </ContactContainer>
    </AnimatedSection>
  );
};

export default Contact;

