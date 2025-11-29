// import React from "react";
// import { apple, google } from "../assets";
// import gozy_image from "../assets/gozy_image.png";
// import styles, { layout } from "../style";

// const Billing = () => {
//   return (
//     <section
//       id="product"
//       className={`${layout.sectionReverse} px-6 md:px-16 lg:px-24 xl:px-32`}
//     >
//       <div className={layout.sectionImgReverse}>
//         <img
//           src={gozy_image}
//           alt="Gozy illustration"
//           className="w-full max-h-[420px] relative z-[5] object-contain"
//         />
//         <div className="absolute z-[3] -left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//         <div className="absolute z-[0] -left-1/3 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
//       </div>
//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>
//           Effortlessly manage <br className="sm:block hidden" /> your daily
//           digital actions.
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Gozy brings clarity and simplicity to your everyday digital workflow.
//           No more juggling multiple platforms — we keep essential interactions
//           organized, connected, and effortless, so you can focus on what truly
//           matters.”
//         </p>
//         <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//           <img
//             src={apple}
//             alt="app-store"
//             className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
//           />
//           <img
//             src={google}
//             alt="google-play"
//             className="w-[128px] h-[42px] object-contain cursor-pointer"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Billing;
import React, { useEffect, useState } from "react";
import {
  FaBolt,
  FaMobileAlt,
  FaShieldAlt,
  FaLayerGroup,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import { apple, google } from "../assets";
import gozy_image from "../assets/gozy_image.png";
import styles, { layout } from "../style";

const Billing = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const features = [
    {
      icon: <FaLayerGroup className="feature-icon text-purple-400" />,
      title: "All-in-One Platform",
      description: "Everything you need in a single, unified interface",
    },
    {
      icon: <FaBolt className="feature-icon text-yellow-400" />,
      title: "Lightning Speed",
      description: "Instant access to all your digital needs",
    },
    {
      icon: <FaShieldAlt className="feature-icon text-green-400" />,
      title: "Bank-Level Security",
      description: "Your data protected with enterprise-grade encryption",
    },
    {
      icon: <FaClock className="feature-icon text-blue-400" />,
      title: "Save Time Daily",
      description: "Stop juggling multiple apps and platforms",
    },
    {
      icon: <FaMobileAlt className="feature-icon text-pink-400" />,
      title: "Seamless Experience",
      description: "Designed for intuitive, effortless interaction",
    },
    {
      icon: <FaCheckCircle className="feature-icon text-indigo-400" />,
      title: "Always Reliable",
      description: "99.9% uptime for uninterrupted service",
    },
  ];

  return (
    <section
      id="product"
      className="relative min-h-screen text-white overflow-hidden pt-20 pb-20"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* Mouse glow effect */}
      <div
        className="mouse-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Floating gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob1" />
        <div className="blob2" />
        <div className="blob3" />
      </div>

      {/* Main content container */}
      <div className={`${layout.sectionReverse} px-6 md:px-16 lg:px-24 xl:px-32 relative z-10`}>
        {/* Image section with enhanced effects */}
        <div className={`${layout.sectionImgReverse} relative`}>
          <div className="product-image-container">
            <img
              src={gozy_image}
              alt="Gozy illustration"
              className="w-full max-h-[420px] relative z-[5] object-contain product-image"
            />
          </div>
          <div className="absolute z-[3] -left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient animate-pulse-slow" />
          <div className="absolute z-[0] -left-1/3 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient animate-float" />
        </div>

        {/* Text and CTA section */}
        <div className={`${layout.sectionInfo} relative z-10`}>
          <h2 className={`${styles.heading2} animated-heading`}>
            Effortlessly manage <br className="sm:block hidden" /> your daily
            digital actions.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300 animated-text`}>
            Gozy brings clarity and simplicity to your everyday digital workflow.
            No more juggling multiple platforms — we keep essential interactions
            organized, connected, and effortless, so you can focus on what truly
            matters.
          </p>

          {/* App store buttons with hover effects */}
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6 gap-4">
            <img
              src={apple}
              alt="app-store"
              className="w-[128px] h-[42px] object-contain cursor-pointer store-button"
            />
            <img
              src={google}
              alt="google-play"
              className="w-[128px] h-[42px] object-contain cursor-pointer store-button"
            />
          </div>
        </div>
      </div>

      {/* Feature cards grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mt-24 relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 feature-grid-title">
          Why Choose <span className="text-purple-400">Gozy</span>?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles */}
      <style>{`
        /* Mouse glow */
        .mouse-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147,51,234,.2), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(60px);
          z-index: 1;
          transition: left 0.15s ease, top 0.15s ease;
        }

        /* Floating gradient blobs */
        .blob1 {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: rgba(147, 51, 234, 0.25);
          filter: blur(120px);
          animation: float 8s infinite ease-in-out;
        }
        .blob2 {
          position: absolute;
          bottom: 15%;
          right: 8%;
          width: 450px;
          height: 450px;
          background: rgba(59, 130, 246, 0.25);
          filter: blur(150px);
          animation: pulse-blob 7s infinite ease-in-out;
        }
        .blob3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 350px;
          height: 350px;
          background: rgba(236, 72, 153, 0.15);
          filter: blur(130px);
          animation: float 6s infinite ease-in-out reverse;
        }

        /* Product image effects */
        .product-image-container {
          position: relative;
          transition: transform 0.4s ease;
        }
        .product-image-container:hover {
          transform: scale(1.05) translateY(-5px);
        }
        .product-image {
          filter: drop-shadow(0 20px 40px rgba(147, 51, 234, 0.3));
        }

        /* Text animations */
        .animated-heading {
          animation: slideInLeft 0.8s ease-out;
        }
        .animated-text {
          animation: slideInLeft 1s ease-out;
        }

        /* Store buttons */
        .store-button {
          transition: all 0.3s ease;
          filter: grayscale(0.3) brightness(0.9);
        }
        .store-button:hover {
          transform: translateY(-4px) scale(1.05);
          filter: grayscale(0) brightness(1.1);
          box-shadow: 0 10px 25px rgba(147, 51, 234, 0.3);
        }

        /* Feature cards */
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 32px 24px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          transition: all 0.4s ease;
          cursor: pointer;
          animation: fadeInUp 0.6s ease-out backwards;
        }
        .feature-card:hover {
          transform: translateY(-12px) scale(1.02);
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.25);
        }

        .feature-icon-wrapper {
          margin-bottom: 16px;
        }
        .feature-icon {
          font-size: 48px;
          animation: float 3s infinite ease-in-out;
        }
        .feature-card:nth-child(2) .feature-icon {
          animation-delay: 0.5s;
        }
        .feature-card:nth-child(3) .feature-icon {
          animation-delay: 1s;
        }

        .feature-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
        }
        .feature-description {
          color: #d3cae8;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .feature-grid-title {
          animation: fadeIn 1s ease-out;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes animate-pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default Billing;
