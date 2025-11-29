import React, { useState, useEffect, useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
// 1. Import icons
import { FaUserFriends, FaGlobe, FaBriefcase, FaStar } from "react-icons/fa";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach((stat, index) => {
        // Extract number from string (e.g., "3800+" -> 3800)
        const target = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
        
        // If no number found (e.g. just text), skip animation
        if (target === 0) return;

        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    };

    animateCounters();
  }, [isVisible]);

  const formatValue = (value, index) => {
    // Get non-numeric suffix (e.g., "+" or "M")
    const suffix = stats[index].value.replace(/[0-9]/g, '').trim();
    return `${value}${suffix}`;
  };

  // 2. Helper to get icon based on index
  const getIcon = (index) => {
    switch (index) {
      case 0: return <FaUserFriends />; // Was 👥
      case 1: return <FaGlobe />;       // Was 🌍
      case 2: return <FaBriefcase />;   // Was 💼
      default: return <FaStar />;
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 px-6 md:px-16 lg:px-24 xl:px-32 stats-section`}
      >
        {/* Animated background elements */}
        <div className="stats-bg-gradient" />
        <div className="stats-particles">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="stat-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-card ${isVisible ? 'stat-card-visible' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Card glow effect */}
              <div className="stat-card-glow" />
              
              {/* Animated border */}
              <div className="stat-card-border" />

              {/* Icon Decoration (React Icons) */}
              <div className="stat-icon-wrapper">
                <span className="stat-icon">
                  {getIcon(index)}
                </span>
              </div>

              {/* Content */}
              <div className="stat-content">
                <div className="stat-value-wrapper">
                  <h4 className="stat-value">
                    {isVisible ? formatValue(counters[index], index) : '0'}
                  </h4>
                  {/* Sparkle Icon */}
                  <div className="stat-sparkle"><FaStar /></div>
                </div>
                
                <p className="stat-title">
                  {stat.title}
                </p>

                {/* Progress bar */}
                <div className="stat-progress-wrapper">
                  <div 
                    className="stat-progress-bar"
                    style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="stat-decorations">
                <div className="stat-dot stat-dot-1" />
                <div className="stat-dot stat-dot-2" />
                <div className="stat-dot stat-dot-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="stats-accent-line" />
      </section>

      <style>{`
        /* ========== Stats Section ========== */
        .stats-section {
          position: relative;
          padding-top: 4rem;
          padding-bottom: 4rem;
          overflow: hidden;
        }

        .stats-bg-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(139, 92, 246, 0.08),
            transparent 70%
          );
          pointer-events: none;
        }

        .stats-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .stat-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          opacity: 0.4;
          animation: float-particle-stats 5s ease-in-out infinite;
        }

        /* ========== Stats Grid ========== */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ========== Stat Card ========== */
        .stat-card {
          position: relative;
          padding: 2rem;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.05),
            rgba(236, 72, 153, 0.05)
          );
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 24px;
          backdrop-filter: blur(10px);
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
        }

        .stat-card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .stat-card-glow {
          position: absolute;
          inset: -50%;
          background: radial-gradient(
            circle at center,
            rgba(139, 92, 246, 0.15),
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: pulse-glow-stats 3s ease-in-out infinite;
        }

        .stat-card:hover .stat-card-glow {
          opacity: 1;
        }

        .stat-card-border {
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 2px;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(139, 92, 246, 0.5),
            transparent
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: rotate-border 4s linear infinite;
        }

        .stat-card:hover .stat-card-border {
          opacity: 1;
        }

        /* ========== Icon ========== */
        .stat-icon-wrapper {
          position: absolute;
          top: -20px;
          right: 20px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
          border: 2px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          backdrop-filter: blur(10px);
          transform: rotate(-10deg);
          transition: transform 0.4s ease;
        }

        .stat-card:hover .stat-icon-wrapper {
          transform: rotate(0deg) scale(1.1);
        }

        .stat-icon {
          font-size: 2rem;
          color: #ec4899; /* Icon color */
          animation: bounce-icon 2s ease-in-out infinite;
          display: flex; /* Centers react-icon */
        }

        /* ========== Content ========== */
        .stat-content {
          position: relative;
          z-index: 1;
        }

        .stat-value-wrapper {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 12px;
        }

        .stat-value {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #c7d2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.2;
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-value {
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transform: scale(1.05);
        }

        .stat-sparkle {
          font-size: 1.2rem;
          color: #fbbf24;
          opacity: 0;
          transform: scale(0) rotate(0deg);
          animation: sparkle 2s ease-in-out infinite;
          display: flex;
        }

        .stat-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(0.875rem, 2vw, 1.125rem);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        /* ========== Progress Bar ========== */
        .stat-progress-wrapper {
          width: 100%;
          height: 4px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .stat-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          border-radius: 2px;
          width: 0;
          animation: fill-progress 1.5s ease-out forwards;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        /* ========== Decorations ========== */
        .stat-decorations {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .stat-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          border-radius: 50%;
          opacity: 0.3;
        }

        .stat-dot-1 {
          top: 30%;
          left: 10%;
          animation: float-dot 3s ease-in-out infinite;
        }

        .stat-dot-2 {
          bottom: 25%;
          right: 15%;
          animation: float-dot 3s ease-in-out infinite 0.5s;
        }

        .stat-dot-3 {
          top: 60%;
          left: 80%;
          animation: float-dot 3s ease-in-out infinite 1s;
        }

        /* ========== Accent Line ========== */
        .stats-accent-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.5),
            rgba(236, 72, 153, 0.5),
            transparent
          );
          opacity: 0.5;
        }

        /* ========== Animations ========== */
        @keyframes float-particle-stats {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(90deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-10px) translateX(-10px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-25px) translateX(5px) rotate(270deg);
            opacity: 0.6;
          }
        }

        @keyframes pulse-glow-stats {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes rotate-border {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-icon {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes fill-progress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes float-dot {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }

        /* ========== Responsive ========== */
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .stat-card {
            padding: 1.5rem;
          }

          .stat-icon-wrapper {
            width: 50px;
            height: 50px;
            top: -15px;
            right: 15px;
          }

          .stat-icon {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          .stat-value {
            font-size: 2rem;
          }

          .stat-title {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </>
  );
};

export default Stats;