// import React from "react";
// import "../tailwind.css";
// import Bg_image from "./Images/About_bg.jpg";

// const Blog = () => {
//   return (
//     <section id="blog" className="py-16 px-8 bg-gray-100" style={{
//       backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bg_image})`,
//       backgroundSize: "cover"
//     }}>
//       <div className="max-w-4xl mx-auto ">
//         <h2 className="text-5xl font-bold mb-4 text-center shadow-text">Blogs</h2>
        
//         <div className="border border-gray-300 rounded-lg shadow-md mb-8 bg-white">
//           <div className="p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">Exploring the Spiritual Essence of Pandharpur</h3>
//             <p className="text-gray-700 mb-4">
//               Pandharpur, also known as the "Southern Kashi," holds a special place in the hearts of devotees of Lord Vithoba. In this blog post, we delve into the spiritual significance of this sacred town and its timeless devotion.
//             </p>
//             <p className="text-gray-700">
//               Read more <a href="#" className="text-blue-600 hover:underline">here</a>.
//             </p>
//           </div>
//         </div>

//         <div className="border border-gray-300 rounded-lg shadow-md mb-8 bg-white">
//           <div className="p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">The Cultural Heritage of Pandharpur</h3>
//             <p className="text-gray-700 mb-4">
//               Pandharpur is not just a pilgrimage site; it's a melting pot of cultures and traditions. Join us as we explore the rich cultural heritage of Pandharpur, from its vibrant festivals to its age-old customs.
//             </p>
//             <p className="text-gray-700">
//               Read more <a href="#" className="text-blue-600 hover:underline">here</a>.
//             </p>
//           </div>
//         </div>

//         <div className="border border-gray-300 rounded-lg shadow-md mb-8 bg-white">
//           <div className="p-6">
//             <h3 className="text-xl font-semibold mb-4 text-gray-800">A Glimpse into the Wari Festival</h3>
//             <p className="text-gray-700 mb-4">
//               The Wari festival is one of the most significant events in Pandharpur, drawing millions of devotees from across the country. In this blog post, we take a closer look at the traditions, rituals, and fervor surrounding this annual pilgrimage.
//             </p>
//             <p className="text-gray-700">
//               Read more <a href="#" className="text-blue-600 hover:underline">here</a>.
//             </p>
//           </div>
//         </div>
      
//       </div>
//     </section>
//   );
// };

// export default Blog;


import React from "react";
import "../tailwind.css";
import styled, { keyframes } from "styled-components";
import Bg_image from "./Images/About_bg.jpg";

// Keyframe for the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled components for animation
const AnimatedSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f8f8;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Bg_image});
  background-size: cover;
`;

const BlogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const BlogCard = styled.div`
  border: 2px solid #4a5568;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const BlogTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

const BlogContent = styled.p`
  font-size: 1.4rem;
  color: black;
  line-height: 1.5;
`;

const ReadMoreLink = styled.a`
  color: #4299e1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const HeartIcon = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: #e53e3e;
  animation: pulse 1.5s ease-in-out infinite;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Blog = () => {
  return (
    <AnimatedSection id="blog">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center shadow-text ">Blogs</h2>
        
        <BlogContainer>
          <BlogCard>
            <div className="p-4">
              <BlogTitle>Exploring the Spiritual Essence of Pandharpur</BlogTitle>
              <BlogContent>
                Pandharpur, also known as the "Southern Kashi," holds a special place in the hearts of devotees of Lord Vithoba. In this blog post, we delve into the spiritual significance of this sacred town and its timeless devotion.
              </BlogContent>
              <ReadMoreLink href="#" className="block text-blue-600 hover:underline mt-2">Read more <HeartIcon>&hearts;</HeartIcon></ReadMoreLink>
            </div>
          </BlogCard>

          <BlogCard>
            <div className="p-4">
              <BlogTitle>The Cultural Heritage of Pandharpur</BlogTitle>
              <BlogContent>
                Pandharpur is not just a pilgrimage site; it's a melting pot of cultures and traditions. Join us as we explore the rich cultural heritage of Pandharpur, from its vibrant festivals to its age-old customs.
              </BlogContent>
              <ReadMoreLink href="#" className="block text-blue-600 hover:underline mt-2">Read more <HeartIcon>&hearts;</HeartIcon></ReadMoreLink>
            </div>
          </BlogCard>

          <BlogCard>
            <div className="p-4">
              <BlogTitle>A Glimpse into the Wari Festival</BlogTitle>
              <BlogContent>
                The Wari festival is one of the most significant events in Pandharpur, drawing millions of devotees from across the country. In this blog post, we take a closer look at the traditions, rituals, and fervor surrounding this annual pilgrimage.
              </BlogContent>
              <ReadMoreLink href="#" className="block text-blue-600 hover:underline mt-2">Read more <HeartIcon>&hearts;</HeartIcon></ReadMoreLink>
            </div>
          </BlogCard>

          {/* Add more BlogCards here */}
        </BlogContainer>
      </div>
    </AnimatedSection>
  );
};

export default Blog;
