import React from "react";
import {
  FaChartLine,
  FaRocket,
  FaGlobeAsia,
  FaUsers,
  FaMagic,
  FaBolt,
  FaCrown,
} from "react-icons/fa";

const InvestNow = () => {
  return (
    <div
      className="relative min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32 py-24 overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
      </div>

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 blur-[130px]" />

      {/* HERO TAGLINE */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(150,90,255,0.45)]">
          Invest Now — Don’t Regret Later
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Gozy isn’t just another app. It’s a revolution. The super-app that
          will **conquer India**, scale globally, and evolve into a
          **world-leading digital ecosystem** within 3 years.
        </p>
      </div>

      {/* WHAT GOZY DOES */}
      <section className="max-w-6xl mx-auto mb-28">
        <h2 className="section-title mb-10">What is Gozy Going to Do?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="info-card fx-3d">
            <FaMagic className="info-icon text-purple-300" />
            <h3 className="info-title">One App. Everything.</h3>
            <p className="info-desc">
              Food, travel, tickets, events, shopping, payments — all inside one
              unified super-app.
            </p>
          </div>

          <div className="info-card fx-3d">
            <FaUsers className="info-icon text-blue-300" />
            <h3 className="info-title">One User Base for All Services</h3>
            <p className="info-desc">
              Every category shares the same audience — giving Gozy exponential
              network effects.
            </p>
          </div>

          <div className="info-card fx-3d">
            <FaBolt className="info-icon text-orange-300" />
            <h3 className="info-title">Lightning Fast APIs</h3>
            <p className="info-desc">
              World-class performance with real-time data syncing & scalable
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* THE BIG PROMISE */}
      <section className="max-w-5xl mx-auto text-center my-24">
        <FaCrown className="mx-auto text-yellow-300 text-5xl mb-4" />
        <h2 className="text-4xl font-bold mb-4">
          Gozy Will Conquer the World in 3 Years
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          India has no true super-app. The world’s next biggest digital
          ecosystem will rise from here. Gozy is built to scale across
          categories, industries, and countries — making it a global platform
          capable of **dominating Asia, Europe, and the Middle East** with one
          universal user experience.
        </p>
      </section>

      {/* WHY INVEST NOW */}
      <section className="max-w-6xl mx-auto mt-20 mb-28">
        <h2 className="section-title mb-12">Why Invest in Gozy?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="info-card fx-3d">
            <FaChartLine className="info-icon text-green-300" />
            <h3 className="info-title">Hypergrowth Potential</h3>
            <p className="info-desc">
              Multiple industries. One engine. Infinite revenue streams.
            </p>
          </div>

          <div className="info-card fx-3d">
            <FaRocket className="info-icon text-blue-300" />
            <h3 className="info-title">Ready to Scale</h3>
            <p className="info-desc">
              Architecture built for 1M users → 100M without redesign.
            </p>
          </div>

          <div className="info-card fx-3d">
            <FaGlobeAsia className="info-icon text-purple-300" />
            <h3 className="info-title">Global Market Fit</h3>
            <p className="info-desc">
              Travel, shopping, food, events — universal needs everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-24">
        <h3 className="text-3xl font-extrabold mb-4">
          Be Part of Something Historic
        </h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Early investors will own a piece of India’s next trillion-dollar tech
          revolution.
        </p>

        <a
          href="mailto:invest@gozy.in"
          className="cta-btn inline-block px-10 py-4 rounded-full text-lg font-semibold"
        >
          Invest in Gozy →
        </a>
      </div>

      {/* STYLING */}
      <style>{`
        /* CARD STYLES */
        .info-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 26px;
          border-radius: 18px;
          text-align: center;
          transition: 0.35s;
        }
        .info-card:hover {
          border-color: rgba(168,85,247,0.7);
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 22px 55px rgba(168,85,247,0.25);
        }
        .info-icon { font-size: 48px; margin-bottom: 14px; }
        .info-title { font-size: 1.4rem; font-weight: 700; margin-bottom: 6px; }
        .info-desc { color: #ccc; }

        /* CTA BUTTON */
        .cta-btn {
          background: linear-gradient(90deg,#a855f7,#6366f1);
          box-shadow: 0 0 22px rgba(99,102,241,0.5);
          transition: 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 0 33px rgba(168,85,247,0.7);
        }

        /* SECTION TITLE */
        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(to right, #c084fc, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 16px rgba(120,80,255,0.25);
        }

        /* 3D FX */
        .fx-3d:hover {
          transform: translateY(-10px) rotateX(8deg) rotateY(-8deg);
        }

        /* PARTICLES */
        .particle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.18);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 12s infinite linear;
        }
        .p1 { top: 20%; left: 10%; animation-duration: 10s; }
        .p2 { top: 70%; left: 80%; animation-duration: 14s; }
        .p3 { top: 85%; left: 30%; animation-duration: 15s; }
        .p4 { top: 40%; left: 60%; animation-duration: 18s; }

        @keyframes float {
          0% { transform: translate(0,0); opacity: 0.7; }
          50% { transform: translate(20px,-30px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default InvestNow;
