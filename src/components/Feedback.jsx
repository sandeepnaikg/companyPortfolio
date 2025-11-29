// import React from "react";
// import { quotes } from "../assets";

// const Feedback = ({ content, name, title, img }) => {
//   return (
//     <div className="flex justify-between flex-col px-8 py-10 rounded-[20px] w-full sm:w-[48%] md:w-[31%] my-4 feedback-card">
//       <img
//         src={quotes}
//         alt="double-quotes"
//         className="w-[42px] h-[27px] object-contain"
//       />
//       <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
//         {content}
//       </p>
//       <div className="flex flex-row">
//         <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
//         <div className="flex flex-col ml-4">
//           <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
//             {name}
//           </h4>
//           <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
//             {title}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { quotes } from "../assets";

const Feedback = ({ content, name, title, img }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="feedback-card-enhanced"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {/* Gradient border effect */}
      <div className="card-gradient-border" />

      {/* Floating quote icon */}
      <div className="quote-wrapper">
        <FaQuoteLeft className="quote-icon-enhanced" />
      </div>

      {/* Star rating */}
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="star-rating" />
        ))}
      </div>

      {/* Content */}
      <p className="feedback-content">{content}</p>

      {/* Author section */}
      <div className="author-section">
        <div className="author-avatar-wrapper">
          <img src={img} alt={name} className="author-avatar" />
          <div className="avatar-ring" />
        </div>

        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-title">{title}</p>
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="hover-glow"
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Decorative corner accent */}
      <div className="corner-accent top-left" />
      <div className="corner-accent bottom-right" />

      <style>{`
        .feedback-card-enhanced {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
          border-radius: 24px;
          width: 100%;
          max-width: calc(33.333% - 21px);
          margin: 0 16px 32px 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(59, 130, 246, 0.08) 100%);
          border: 1px solid rgba(147, 51, 234, 0.2);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
          cursor: pointer;
          min-height: 380px;
          box-shadow: 0 8px 32px rgba(147, 51, 234, 0.1);
        }

        .feedback-card-enhanced:nth-child(3n) {
          margin-right: 0;
        }

        .feedback-card-enhanced:hover {
          transform: translateY(-12px) scale(1.02);
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%);
          border-color: rgba(147, 51, 234, 0.6);
          box-shadow: 0 20px 60px rgba(147, 51, 234, 0.4);
        }

        /* Gradient border */
        .card-gradient-border {
          position: absolute;
          inset: -1px;
          border-radius: 24px;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.3),
            rgba(59, 130, 246, 0.3),
            rgba(236, 72, 153, 0.3)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feedback-card-enhanced:hover .card-gradient-border {
          opacity: 1;
        }

        /* Quote wrapper */
        .quote-wrapper {
          position: relative;
          width: fit-content;
          margin-bottom: 20px;
          animation: float-quote 3s ease-in-out infinite;
        }

        .quote-icon-enhanced {
          font-size: 36px;
          color: #c084fc;
          opacity: 0.4;
          filter: drop-shadow(0 0 10px rgba(192, 132, 252, 0.5));
        }

        /* Star rating */
        .rating-stars {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
        }

        .star-rating {
          color: #fbbf24;
          font-size: 18px;
          animation: twinkle 2s ease-in-out infinite;
          animation-delay: calc(var(--i) * 0.2s);
        }

        .star-rating:nth-child(1) { --i: 1; }
        .star-rating:nth-child(2) { --i: 2; }
        .star-rating:nth-child(3) { --i: 3; }
        .star-rating:nth-child(4) { --i: 4; }
        .star-rating:nth-child(5) { --i: 5; }

        /* Content */
        .feedback-content {
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: #e9d5ff;
          margin-bottom: 24px;
          flex-grow: 1;
          font-style: italic;
        }

        /* Author section */
        .author-section {
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
          z-index: 2;
        }

        .author-avatar-wrapper {
          position: relative;
          flex-shrink: 0;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(192, 132, 252, 0.3);
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .feedback-card-enhanced:hover .author-avatar {
          transform: scale(1.1);
        }

        .avatar-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid rgba(192, 132, 252, 0.3);
          animation: pulse-ring-avatar 2s ease-in-out infinite;
        }

        .author-info {
          display: flex;
          flex-direction: column;
        }

        .author-name {
          font-family: 'Poppins', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          transition: color 0.3s ease;
        }

        .feedback-card-enhanced:hover .author-name {
          color: #e9d5ff;
        }

        .author-title {
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          color: #d3cae8;
        }

        /* Hover glow */
        .hover-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(147, 51, 234, 0.15),
            transparent 70%
          );
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        /* Corner accents */
        .corner-accent {
          position: absolute;
          width: 40px;
          height: 40px;
          opacity: 0.3;
          transition: opacity 0.4s ease;
        }

        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid #c084fc;
          border-left: 2px solid #c084fc;
          border-radius: 24px 0 0 0;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #c084fc;
          border-right: 2px solid #c084fc;
          border-radius: 0 0 24px 0;
        }

        .feedback-card-enhanced:hover .corner-accent {
          opacity: 1;
        }

        /* Animations */
        @keyframes float-quote {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        @keyframes pulse-ring-avatar {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .feedback-card-enhanced {
            max-width: calc(50% - 12px);
            margin: 0 12px 24px 0;
          }

          .feedback-card-enhanced:nth-child(3n) {
            margin-right: 12px;
          }

          .feedback-card-enhanced:nth-child(2n) {
            margin-right: 0;
          }
        }

        @media (max-width: 768px) {
          .feedback-card-enhanced {
            max-width: 100%;
            padding: 24px;
            min-height: 340px;
            margin: 0 0 20px 0;
          }

          .feedback-card-enhanced:nth-child(3n),
          .feedback-card-enhanced:nth-child(2n) {
            margin-right: 0;
          }

          .feedback-content {
            font-size: 0.95rem;
          }

          .author-avatar {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default Feedback;