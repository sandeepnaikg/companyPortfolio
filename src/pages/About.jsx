
import React, { useEffect, useState } from "react";
import {
  FaBolt,
  FaMobileAlt,
  FaLock,
  FaSmile,
  FaLeaf,
  FaSyncAlt,
  FaShieldAlt,
  FaUserFriends,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="relative min-h-screen text-white overflow-hidden pt-28 px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* --- FLOATING BACKGROUND GLOW --- */}
      <div
        className="mouse-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      {/* --- PARALLAX GRADIENT BLOBS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>

      {/* --- TITLE SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
        <h1 className="title">
          About <span className="highlight">Gozy</span>
        </h1>

        <p className="subtitle">
          Gozy is India’s futuristic all-in-one superapp designed to unify
          digital life. Instead of switching between 30+ apps daily, Gozy merges
          travel, payments, shopping, food, utilities, tickets, and more into
          one intelligent ecosystem.
        </p>
      </div>

      {/* --- 3D FLOATING CARDS --- */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20">
        {/* CARD 1 */}
        <div className="info-card card-purple">
          <FaMobileAlt className="card-icon" />
          <h3 className="card-title">Unified Digital Life</h3>
          <p className="card-text">
            One app for everything — travel, shopping, utilities, payments &
            more.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="info-card card-blue">
          <FaBolt className="card-icon text-yellow-400" />
          <h3 className="card-title">Lightning Fast</h3>
          <p className="card-text">
            Faster actions, fewer steps. Built for real-world speed.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="info-card card-green">
          <FaShieldAlt className="card-icon text-green-400" />
          <h3 className="card-title">Secure & Private</h3>
          <p className="card-text">
            Trusted encryption & privacy-first design at every step.
          </p>
        </div>
      </div>

      {/* --- GOZY MISSION CONTENT --- */}
      <div className="max-w-5xl mx-auto px-6 mt-24 space-y-20 relative z-20">
        {/* Purpose */}
        <section className="section">
          <h2 className="section-title">
            <FaLeaf className="icon-green" /> Our Purpose
          </h2>
          <p className="section-text">
            Gozy was created to eliminate digital clutter and build a faster,
            cleaner, and more meaningful technology experience for millions.
          </p>
        </section>

        {/* Philosophy */}
        <section className="section">
          <h2 className="section-title">
            <FaUserFriends className="icon-blue" /> Our Philosophy
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mt-4 philosophy-grid">
            <div>
              <FaSyncAlt className="icon-purple" /> Unified, not fragmented
            </div>
            <div>
              <FaBolt className="icon-yellow" /> Fast, not complicated
            </div>
            <div>
              <FaSmile className="icon-pink" /> Smart, not repetitive
            </div>
            <div>
              <FaLock className="icon-indigo" /> Secure, not risky
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="section">
          <h2 className="section-title">
            <FaRocket className="icon-orange" /> Our Vision
          </h2>
          <p className="section-text">
            Gozy aims to become India’s most trusted digital home — a place
            where tasks happen effortlessly and everything is connected in one
            seamless experience.
          </p>
        </section>
      </div>

      {/* --- CONTACT --- */}
      <div className="text-center mt-20 pb-20 text-gray-400 relative z-20">
        Contact us:{" "}
        <a
          href="mailto:gozysuperapp@gmail.com"
          className="text-purple-300 underline"
        >
          gozysuperapp@gmail.com
        </a>
      </div>

      {/* === INLINE CSS STYLES === */}
      <style>{`
        .title {
          font-size: 3.2rem;
          font-weight: 800;
          animation: fadeIn 1.2s ease;
        }
        .highlight { color: #c084fc; }
        .subtitle {
          color: #d6cde8;
          font-size: 1.2rem;
          margin-top: 12px;
          animation: slideUp .9s ease;
        }

        .blob1 {
          position: absolute; top: 10%; left: 8%;
          width: 320px; height: 320px;
          background: rgba(147, 51, 234, 0.3);
          filter: blur(120px);
          animation: float 6s infinite ease-in-out;
        }
        .blob2 {
          position: absolute; bottom: 10%; right: 5%;
          width: 380px; height: 380px;
          background: rgba(59, 130, 246, 0.3);
          filter: blur(150px);
          animation: pulse 5s infinite ease-in-out;
        }

        .info-card {
          position: relative;
          background: rgba(255,255,255,0.06);
          padding: 28px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(15px);
          transition: 0.4s ease;
          cursor: pointer;
        }
        .info-card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
        }
        .card-icon {
          font-size: 48px;
          margin-bottom: 14px;
          animation: float 3s infinite ease-in-out;
        }
        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .card-text {
          color: #d3cae8;
          line-height: 1.5;
        }

        /* Section Animations */
        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-text { color: #d3cae8; font-size: 1rem; }

        /* Mouse glow */
        .mouse-glow {
          position: fixed;
          width: 250px; height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147,51,234,.25), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(50px);
          z-index: 1;
        }

        /* Icon colors */
        .icon-green { color: #4ade80; }
        .icon-blue { color: #60a5fa; }
        .icon-purple { color: #c084fc; }
        .icon-yellow { color: #facc15; }
        .icon-pink { color: #fb7185; }
        .icon-indigo { color: #818cf8; }
        .icon-orange { color: #fb923c; }

        /* Animations */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0%,100% { opacity: .6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default About;
