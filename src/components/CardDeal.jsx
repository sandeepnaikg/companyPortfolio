// import React from "react";
// import gozy3_image from "../assets/gozy3_image.png";
// import Button from "./Button";
// import styles, { layout } from "../style";

// const CardDeal = () => {
//   return (
//     <section className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32`}>
//       <div className={layout.sectionInfo}>
//         <h2 className={styles.heading2}>
//           Make better decisions <br className="sm:block hidden" />
//           with a single tap .
//         </h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Gozy helps you navigate your digital needs with clarity and ease. Our
//           unified platform guides you through simple, effortless steps — letting
//           you find the best options without complexity or confusion.
//         </p>
//         <Button styles="mt-10" />
//       </div>
//       <div className={layout.sectionImg}>
//         <img
//           src={gozy3_image}
//           alt="Gozy illustration"
//           className="w-full max-h-[360px] object-contain ml-[-12px] md:ml-0"
//         />
//       </div>
//     </section>
//   );
// };

// export default CardDeal;
import React, { useEffect, useState, useRef } from "react";
import {
  FaCheckCircle,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import gozy3_image from "../assets/gozy3_image.png";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaCheckCircle className="benefit-icon" />,
      text: "Instant decision-making",
    },
    {
      icon: <FaLightbulb className="benefit-icon" />,
      text: "Smart recommendations",
    },
    {
      icon: <FaClock className="benefit-icon" />,
      text: "Save hours every week",
    },
  ];

  const stats = [
    { icon: <FaRocket />, value: "10x", label: "Faster" },
    { icon: <FaChartLine />, value: "99%", label: "Accuracy" },
    { icon: <FaShieldAlt />, value: "100%", label: "Secure" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 text-white overflow-hidden"
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

      <div className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32 relative z-10`}>
        {/* Text Content */}
        <div
          className={layout.sectionInfo}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="content-wrapper">
            {/* Floating badge */}
            <div className="floating-badge">
              <FaLightbulb className="badge-icon" />
              <span>Smart Decision Engine</span>
            </div>

            <h2 className={`${styles.heading2} enhanced-heading`}>
              Make better decisions <br className="sm:block hidden" />
              with a <span className="gradient-text">single tap</span>
            </h2>

            <p className={`${styles.paragraph} enhanced-paragraph max-w-[470px] mt-5`}>
              Gozy helps you navigate your digital needs with clarity and ease.
              Our unified platform guides you through simple, effortless steps —
              letting you find the best options without complexity or confusion.
            </p>

            {/* Benefits list */}
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="benefit-item"
                  style={{
                    animationDelay: `${0.4 + index * 0.15}s`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Stats cards */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card"
                  style={{
                    animationDelay: `${0.6 + index * 0.1}s`,
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  <div className="stat-icon-wrapper">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button styles="mt-10" />
          </div>
        </div>

        {/* Image section with enhanced effects */}
        <div
          className={layout.sectionImg}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease-out 0.3s",
          }}
        >
          <div className="image-wrapper">
            {/* Floating decoration cards */}
            <div className="floating-card card-top">
              <FaCheckCircle className="card-icon text-green-400" />
              <span className="card-text">Decision Made</span>
            </div>

            <div className="floating-card card-bottom">
              <FaRocket className="card-icon text-purple-400" />
              <span className="card-text">Lightning Fast</span>
            </div>

            {/* Main image */}
            <div className="main-image-container">
              <img
                src={gozy3_image}
                alt="Gozy illustration"
                className="main-image"
              />

              {/* Animated rings */}
              <div className="pulse-ring ring-1" />
              <div className="pulse-ring ring-2" />
              <div className="pulse-ring ring-3" />
            </div>
          </div>
        </div>
      </div>

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

        /* Content wrapper */
        .content-wrapper {
          position: relative;
        }

        /* Floating badge */
        .floating-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(147, 51, 234, 0.15);
          border: 1px solid rgba(147, 51, 234, 0.3);
          border-radius: 30px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          animation: slideInLeft 0.6s ease-out;
        }

        .badge-icon {
          color: #fbbf24;
          font-size: 18px;
          animation: pulse-icon 2s ease-in-out infinite;
        }

        .floating-badge span {
          color: #e9d5ff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Enhanced heading */
        .enhanced-heading {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          animation: slideInLeft 0.8s ease-out;
        }

        .gradient-text {
          background: linear-gradient(135deg, #c084fc 0%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .enhanced-paragraph {
          color: #d3cae8;
          line-height: 1.8;
          font-size: 1.05rem;
          animation: slideInLeft 1s ease-out;
        }

        /* Benefits list */
        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 32px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          animation: slideInLeft 0.6s ease-out backwards;
        }

        .benefit-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(147, 51, 234, 0.4);
          transform: translateX(8px);
        }

        .benefit-icon {
          font-size: 24px;
          color: #10b981;
          flex-shrink: 0;
        }

        .benefit-item span {
          color: #e9d5ff;
          font-size: 1rem;
          font-weight: 500;
        }

        /* Stats grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 32px;
        }

        .stat-card {
          text-align: center;
          padding: 20px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(147, 51, 234, 0.4);
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(147, 51, 234, 0.2);
        }

        .stat-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 8px;
          font-size: 28px;
          color: #c084fc;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #d3cae8;
          font-weight: 500;
        }

        /* Image wrapper */
        .image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Main image container */
        .main-image-container {
          position: relative;
          animation: floatImage 4s ease-in-out infinite;
        }

        .main-image {
          width: 100%;
          max-height: 360px;
          object-contain;
          position: relative;
          z-index: 10;
          filter: drop-shadow(0 20px 40px rgba(147, 51, 234, 0.3));
        }

        /* Pulse rings */
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 50%;
          animation: pulse-ring 3s ease-out infinite;
        }

        .ring-1 {
          width: 120%;
          height: 120%;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 140%;
          height: 140%;
          animation-delay: 1s;
        }

        .ring-3 {
          width: 160%;
          height: 160%;
          animation-delay: 2s;
        }

        /* Floating cards */
        .floating-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          backdrop-filter: blur(15px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          animation: floatCard 3s ease-in-out infinite;
        }

        .card-top {
          top: 10%;
          right: -5%;
          animation-delay: 0s;
        }

        .card-bottom {
          bottom: 15%;
          left: -5%;
          animation-delay: 1.5s;
        }

        .card-icon {
          font-size: 24px;
        }

        .card-text {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
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

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulse-ring {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .enhanced-heading {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .floating-card {
            display: none;
          }

          .pulse-ring {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CardDeal;