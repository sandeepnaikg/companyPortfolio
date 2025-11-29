// import React from "react";
// import styles from "../style";
// import Button from "./Button";

// const CTA = () => {
//   return (
//     <section
//       className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow px-6 md:px-16 lg:px-24 xl:px-32`}
//     >
//       <div className="flex-1 flex flex-col">
//         <h2 className={styles.heading2}>Let's try our service now!</h2>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           Everything you need to accept card payments and grow your business
//           anywhere on the planet.
//         </p>
//       </div>
//       <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
//         <Button />
//       </div>
//     </section>
//   );
// };

// export default CTA;
import React, { useEffect, useState, useRef } from "react";
import {
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <FaCheckCircle />, text: "No credit card required" },
    { icon: <FaCheckCircle />, text: "Free 30-day trial" },
    { icon: <FaCheckCircle />, text: "Cancel anytime" },
  ];

  const floatingIcons = [
    { icon: FaRocket, color: "#c084fc", delay: 0 },
    { icon: FaStar, color: "#fbbf24", delay: 0.5 },
    { icon: FaShieldAlt, color: "#10b981", delay: 1 },
    { icon: FaBolt, color: "#60a5fa", delay: 1.5 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 text-white overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <div
          className="cta-container"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Floating decorative icons */}
          <div className="floating-icons-wrapper">
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`floating-icon-cta icon-${index + 1}`}
                style={{
                  animationDelay: `${item.delay}s`,
                }}
              >
                <item.icon style={{ color: item.color }} />
              </div>
            ))}
          </div>

          {/* Main CTA Content */}
          <div className="cta-content">
            <div className="flex-1 flex flex-col">
              {/* Badge */}
              <div className="cta-badge">
                <FaRocket className="badge-rocket" />
                <span>Limited Time Offer</span>
              </div>

              <h2 className="cta-heading">
                Let's try our service{" "}
                <span className="gradient-text-cta">now!</span>
              </h2>

              <p className="cta-paragraph">
                Everything you need to accept card payments and grow your
                business anywhere on the planet. Join thousands of satisfied
                users today.
              </p>

              {/* Features list */}
              <div className="features-list-cta">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-item-cta"
                    style={{
                      animationDelay: `${0.3 + index * 0.1}s`,
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <span className="feature-icon-cta">{feature.icon}</span>
                    <span className="feature-text-cta">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons-wrapper">
              <button className="btn-primary-cta">
                Get Started Free
                <FaArrowRight className="btn-arrow" />
              </button>

              <button className="btn-secondary-cta">
                <FaBolt className="btn-icon" />
                Quick Demo
              </button>

              {/* Trust indicator */}
              <div className="trust-indicator">
                <div className="trust-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="trust-star" />
                  ))}
                </div>
                <span className="trust-text">
                  Rated 4.9/5 by 10,000+ users
                </span>
              </div>
            </div>
          </div>

          {/* Animated border gradient */}
          <div className="cta-border-gradient" />
        </div>

        {/* Bottom floating cards */}
        <div className="bottom-cards">
          <div
            className="info-card-cta card-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            <FaShieldAlt className="info-icon" />
            <div>
              <div className="info-title">Bank-Grade Security</div>
              <div className="info-subtitle">Your data is safe with us</div>
            </div>
          </div>

          <div
            className="info-card-cta card-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.5s",
            }}
          >
            <FaBolt className="info-icon" />
            <div>
              <div className="info-title">Lightning Fast</div>
              <div className="info-subtitle">Setup in under 5 minutes</div>
            </div>
          </div>

          <div
            className="info-card-cta card-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.6s",
            }}
          >
            <FaStar className="info-icon" />
            <div>
              <div className="info-title">24/7 Support</div>
              <div className="info-subtitle">We're here whenever you need</div>
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

        /* CTA Container */
        .cta-container {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 32px;
          padding: 56px 48px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }

        /* Animated border gradient */
        .cta-border-gradient {
          position: absolute;
          inset: -2px;
          border-radius: 32px;
          padding: 2px;
          background: linear-gradient(
            135deg,
            rgba(147, 51, 234, 0.5),
            rgba(59, 130, 246, 0.5),
            rgba(236, 72, 153, 0.5)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          animation: rotate-gradient 6s linear infinite;
        }

        /* Floating decorative icons */
        .floating-icons-wrapper {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .floating-icon-cta {
          position: absolute;
          font-size: 32px;
          opacity: 0.3;
          animation: floatIcon 4s ease-in-out infinite;
        }

        .icon-1 { top: 10%; right: 10%; }
        .icon-2 { top: 20%; left: 8%; }
        .icon-3 { bottom: 15%; right: 12%; }
        .icon-4 { bottom: 20%; left: 10%; }

        /* CTA Content */
        .cta-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          position: relative;
          z-index: 2;
        }

        /* Badge */
        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(236, 72, 153, 0.15);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 30px;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
          width: fit-content;
        }

        .badge-rocket {
          color: #ec4899;
          font-size: 18px;
          animation: pulse-icon 2s ease-in-out infinite;
        }

        .cta-badge span {
          color: #fce7f3;
          font-size: 0.9rem;
          font-weight: 600;
        }

        /* Heading */
        .cta-heading {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
          color: white;
        }

        .gradient-text-cta {
          background: linear-gradient(135deg, #c084fc 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Paragraph */
        .cta-paragraph {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #d3cae8;
          margin-bottom: 24px;
          max-width: 520px;
        }

        /* Features list */
        .features-list-cta {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 24px;
        }

        .feature-item-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          animation: fadeInLeft 0.6s ease-out backwards;
        }

        .feature-icon-cta {
          color: #10b981;
          font-size: 20px;
        }

        .feature-text-cta {
          color: #e9d5ff;
          font-size: 1rem;
        }

        /* CTA Buttons */
        .cta-buttons-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .btn-primary-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 36px;
          background: linear-gradient(135deg, #c084fc 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 14px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(192, 132, 252, 0.4);
          position: relative;
          overflow: hidden;
        }

        .btn-primary-cta::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #e9d5ff 0%, #c084fc 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .btn-primary-cta:hover::before {
          opacity: 1;
        }

        .btn-primary-cta:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 40px rgba(192, 132, 252, 0.6);
        }

        .btn-arrow {
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .btn-primary-cta:hover .btn-arrow {
          transform: translateX(5px);
        }

        .btn-primary-cta span {
          position: relative;
          z-index: 1;
        }

        .btn-secondary-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          background: transparent;
          color: #c084fc;
          border: 2px solid #c084fc;
          border-radius: 14px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary-cta:hover {
          background: rgba(192, 132, 252, 0.1);
          border-color: #e9d5ff;
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 18px;
        }

        /* Trust indicator */
        .trust-indicator {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          margin-top: 8px;
        }

        .trust-stars {
          display: flex;
          gap: 4px;
        }

        .trust-star {
          color: #fbbf24;
          font-size: 16px;
        }

        .trust-text {
          color: #d3cae8;
          font-size: 0.85rem;
        }

        /* Bottom cards */
        .bottom-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 48px;
        }

        .info-card-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .info-card-cta:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(147, 51, 234, 0.4);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(147, 51, 234, 0.2);
        }

        .info-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .card-1 .info-icon { color: #10b981; }
        .card-2 .info-icon { color: #60a5fa; }
        .card-3 .info-icon { color: #fbbf24; }

        .info-title {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .info-subtitle {
          font-size: 0.85rem;
          color: #d3cae8;
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

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes rotate-gradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .cta-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 32px;
          }

          .cta-buttons-wrapper {
            width: 100%;
          }

          .btn-primary-cta,
          .btn-secondary-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .cta-container {
            padding: 40px 28px;
          }

          .cta-heading {
            font-size: 2rem;
          }

          .floating-icon-cta {
            font-size: 24px;
          }

          .bottom-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;