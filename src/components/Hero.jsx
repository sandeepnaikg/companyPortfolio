// import styles from "../style";
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className={`flex md:flex-row flex-col ${styles.paddingY} px-6 md:px-16 lg:px-24 xl:px-32`}
//     >
//       <div
//         className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
//       >
//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             All Your <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Daily Needs</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0 items-center">
//             <GetStarted />
//           </div>
//         </div>
//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
//           In One App
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           At Gozy, our team follows a clear, user-centric approach to understand
//           what people truly need in their everyday digital life. Instead of
//           making users depend on multiple scattered platforms, we study how
//           individuals manage their daily tasks, interact with online services,
//           and navigate digital spaces — and we bring all essential experiences
//           together into one smooth, unified ecosystem.
//         </p>
//       </div>
//       <div
//         className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
//         style={{ marginRight: "32px" }}
//       >
//         <img
//           src={robot}
//           alt="billing"
//           className="w-[100%] h-[100%] relative z-[5]"
//         />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>
//       <div className={`ss:hidden ${styles.flexCenter} gap-4`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState, useRef } from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = ({ setWaitlistOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`flex md:flex-row flex-col ${styles.paddingY} px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="floating-orb orb-1"
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
        />
        <div
          className="floating-orb orb-2"
          style={{
            transform: `translate(${mousePos.x * -15}px, ${
              mousePos.y * -15
            }px)`,
          }}
        />
        <div
          className="floating-orb orb-3"
          style={{
            transform: `translate(${mousePos.x * 25}px, ${mousePos.y * -20}px)`,
          }}
        />
      </div>

      {/* Left Content Section */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative z-10`}
      >
        {/* Discount Badge */}
        <div
          className="hero-badge"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="badge-text">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* Main Heading */}
        <div className="flex flex-row justify-between items-center w-full mt-6">
          <h1
            className="hero-heading"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            }}
          >
            All Your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Daily Needs</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 items-center hero-button-desktop">
            <GetStarted setOpen={setWaitlistOpen} />
          </div>
        </div>

        {/* Subheading */}
        <h1
          className="hero-subheading"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
          }}
        >
          In One App
        </h1>

        {/* Description */}
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 hero-description`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          At Gozy, our team follows a clear, user-centric approach to understand
          what people truly need in their everyday digital life. Instead of
          making users depend on multiple scattered platforms, we study how
          individuals manage their daily tasks, interact with online services,
          and navigate digital spaces — and we bring all essential experiences
          together into one smooth, unified ecosystem.
        </p>
      </div>

      {/* Right Image Section */}
      <div
        className={`flex-1 flex ${styles.flexCenter} flex-col md:my-0 my-10 relative md:mr-8`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(50px)",
        }}
      >
        {/* Image container with floating animation */}
        <div className="robot-container">
          <img
            src={robot}
            alt="Gozy App Interface"
            className="w-[100%] max-h-[400px] relative z-[5] robot-image object-contain"
          />

          {/* Animated gradient overlays */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient gradient-pulse" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 gradient-rotate" />
          <div
            className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient gradient-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Floating particles */}
          <div className="particle particle-1" />
          <div className="particle particle-2" />
          <div className="particle particle-3" />
          <div className="particle particle-4" />
        </div>

        {/* Feature highlights below image */}
        <div
          className="feature-highlights-bottom"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <div className="feature-item">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span>All-in-one platform</span>
          </div>
          <div className="feature-item" style={{ animationDelay: "0.1s" }}>
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span>User-centric design</span>
          </div>
          <div className="feature-item" style={{ animationDelay: "0.2s" }}>
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <span>Seamless experience</span>
          </div>
        </div>
      </div>

      {/* Mobile GetStarted Button */}
      <div className={`ss:hidden ${styles.flexCenter} gap-4 mt-8`}>
        <GetStarted setOpen={setWaitlistOpen} />
      </div>

      <style>{`
        /* Floating background orbs */
        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          transition: transform 0.3s ease-out;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: rgba(147, 51, 234, 0.15);
          top: -10%;
          left: 10%;
          animation: float-orb 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: rgba(59, 130, 246, 0.12);
          bottom: -15%;
          right: 5%;
          animation: float-orb 10s ease-in-out infinite reverse;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: rgba(236, 72, 153, 0.1);
          top: 40%;
          left: 50%;
          animation: float-orb 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Hero badge */
        .hero-badge {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          transition: all 0.6s ease-out;
          animation: slideInDown 0.8s ease-out;
        }

        .badge-text {
          font-family: Poppins, sans-serif;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
        }

        /* Hero headings */
        .hero-heading {
          flex: 1;
          font-family: Poppins, sans-serif;
          font-weight: 600;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          color: white;
          line-height: 1.4;
          transition: all 0.8s ease-out 0.2s;
        }

        .hero-subheading {
          font-family: Poppins, sans-serif;
          font-weight: 600;
          font-size: clamp(2.5rem, 5vw, 4.25rem);
          color: white;
          line-height: 1.47;
          width: 100%;
          transition: all 0.8s ease-out 0.4s;
        }

        .hero-description {
          transition: all 0.8s ease-out 0.6s;
          line-height: 1.8;
        }

        /* Feature highlights */
        .feature-highlights-bottom {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
          transition: all 0.8s ease-out 1s;
          max-width: 100%;
        }

        .feature-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(147, 51, 234, 0.25);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          animation: slideInLeft 0.6s ease-out backwards;
          cursor: default;
        }

        .feature-item:hover {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(59, 130, 246, 0.15));
          border-color: rgba(147, 51, 234, 0.4);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 24px rgba(147, 51, 234, 0.4);
        }

        .feature-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          border-radius: 50%;
          color: white;
          flex-shrink: 0;
        }

        .feature-item span {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          font-family: Poppins, sans-serif;
          font-weight: 500;
        }

        /* Robot container */
        .robot-container {
          position: relative;
          width: 100%;
          max-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.8s ease-out 0.5s;
        }

        .robot-image {
          animation: float-robot 4s ease-in-out infinite;
          filter: drop-shadow(0 20px 40px rgba(147, 51, 234, 0.3));
        }

        /* Gradient animations */
        .gradient-pulse {
          animation: pulse-gradient 3s ease-in-out infinite;
        }

        .gradient-rotate {
          animation: rotate-gradient 8s linear infinite;
        }

        /* Floating particles */
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(147, 51, 234, 0.6);
          border-radius: 50%;
          animation: float-particle 3s ease-in-out infinite;
          z-index: 3;
          box-shadow: 0 0 12px rgba(147, 51, 234, 0.8);
        }

        .particle-1 {
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .particle-2 {
          top: 60%;
          left: 20%;
          animation-delay: 1s;
        }

        .particle-3 {
          top: 30%;
          right: 15%;
          animation-delay: 1.5s;
        }

        .particle-4 {
          bottom: 25%;
          right: 20%;
          animation-delay: 2s;
        }

        /* Animations */
        @keyframes float-orb {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -30px);
          }
        }

        @keyframes slideInDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-robot {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-gradient {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @keyframes rotate-gradient {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.2);
            opacity: 1;
          }
        }

        /* Hover effects */
        .hero-button-desktop {
          animation: slideInRight 0.8s ease-out;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-orb {
            display: none;
          }

          .feature-highlights-bottom {
            margin-top: 20px;
            justify-content: center;
          }

          .particle {
            display: none;
          }

          .hero-badge {
            font-size: 0.85rem;
          }

          .robot-container {
            max-height: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
