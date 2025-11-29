// import React from "react";
// import styles from "../style";
// import { arrowUp } from "../assets";

// const GetStarted = ({ onClick }) => {
//   return (
//     <div
//       className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
//       onClick={onClick}
//     >
//       <div
//         className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
//       >
//         <div className={`${styles.flexStart} flex-row`}>
//           <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
//             <span className="text-gradient">Get</span>
//           </p>
//           <img
//             src={arrowUp}
//             alt="arrow"
//             className="w-[23px] h-[23px] object-contain"
//           />
//         </div>
//         <p className="font-poppins font-medium text-[18px] leading-[23px]">
//           <span className="text-gradient">Started</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;
import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { FaArrowRight } from "react-icons/fa";

const GetStarted = ({ setOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Handler to open JoinWaitlist modal
  const handleClick = () => {
    if (setOpen) setOpen(true);
  };

  return (
    <>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer get-started-wrapper`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transition: "none", boxShadow: "none", transform: "none" }}
      >
        {/* Pulse rings */}
        <div className="pulse-ring ring-1" />
        <div className="pulse-ring ring-2" />
        <div className="pulse-ring ring-3" />

        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full get-started-inner`}
        >
          {/* Floating particles */}
          <div className="particles">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>

          {/* Shimmer effect */}
          <div className="shimmer-overlay" />

          <div className={`${styles.flexStart} flex-row get-started-top`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <span className="text-gradient">Get</span>
            </p>
            {/* Add react icon here */}
            <FaArrowRight
              className={`w-[23px] h-[23px] arrow-icon ml-1 ${
                isHovered ? "arrow-bounce" : ""
              }`}
            />
          </div>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>

      <style>{`
        .get-started-wrapper {
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: float-button 3s ease-in-out infinite;
        }

        .get-started-wrapper:hover {
          transform: scale(1.08);
          box-shadow: 0 15px 40px rgba(51, 144, 255, 0.4);
        }

        .get-started-wrapper:active {
          transform: scale(0.95);
        }

        .get-started-inner {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        /* Pulse rings */
        .pulse-ring {
          position: absolute;
          border: 2px solid rgba(51, 144, 255, 0.3);
          border-radius: 50%;
          pointer-events: none;
          animation: pulse-ring 2.5s ease-out infinite;
        }

        .ring-1 {
          width: 110%;
          height: 110%;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 125%;
          height: 125%;
          animation-delay: 0.8s;
        }

        .ring-3 {
          width: 140%;
          height: 140%;
          animation-delay: 1.6s;
        }

        /* Particles */
        .particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(51, 144, 255, 0.6);
          border-radius: 50%;
          animation: float-particle 3s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(51, 144, 255, 0.8);
        }

        /* Shimmer overlay */
        .shimmer-overlay {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          animation: shimmer-sweep 3s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
        }

        .get-started-top {
          position: relative;
          z-index: 3;
        }

        /* Arrow animation */
        .arrow-icon {
          transition: transform 0.3s ease;
          filter: drop-shadow(0 0 4px rgba(51, 144, 255, 0.5));
          display: inline-block;
          vertical-align: middle;
        }

        .arrow-bounce {
          animation: bounce-arrow 0.6s ease-in-out infinite;
        }

        .get-started-wrapper:hover .arrow-icon {
          filter: drop-shadow(0 0 8px rgba(51, 144, 255, 0.8));
        }

        /* Animations */
        @keyframes float-button {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-ring {
          0% {
            opacity: 0.6;
            transform: scale(0.85);
          }
          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) scale(1.3);
            opacity: 1;
          }
        }

        @keyframes shimmer-sweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(50%) translateY(50%) rotate(45deg);
          }
        }

        @keyframes bounce-arrow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(4px, -4px);
          }
        }

        /* Hover enhancements */
        .get-started-wrapper:hover .particle {
          animation-duration: 2s;
        }

        .get-started-wrapper:hover .shimmer-overlay {
          animation-duration: 2s;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .get-started-wrapper {
            width: 120px;
            height: 120px;
          }

          .pulse-ring {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default GetStarted;
