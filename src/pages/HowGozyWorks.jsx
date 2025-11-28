import React from "react";
import {
  FaMobileAlt,
  FaMagic,
  FaStore,
  FaBolt,
  FaShoppingCart,
  FaMapMarkedAlt,
  FaUserFriends,
} from "react-icons/fa";

const HowGozyWorks = () => {
  return (
    <div
      className="relative min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32 py-24 overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* Particles (Option B) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
      </div>

      {/* Glow Layers */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 blur-[130px]" />

      {/* HERO SECTION */}
      <div className="relative max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          How Gozy Works
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Gozy brings everything into one smart ecosystem — food, travel,
          tickets, shopping, events, payments, and more.
          <br />
          Simple. Intelligent. Unified.
        </p>
      </div>

      {/* STEP-BY-STEP TIMELINE */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-24">
        {/* STEP 1 */}
        <div className="step-card fx-3d">
          <FaMobileAlt className="step-icon text-purple-300" />
          <h3 className="step-title">1. One Super-App</h3>
          <p className="step-desc">
            Download Gozy and access all services from a single home screen.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="step-card fx-3d">
          <FaMagic className="step-icon text-blue-300" />
          <h3 className="step-title">2. Smart Personalization</h3>
          <p className="step-desc">
            AI curates recommendations: food, travel, events, shopping & more.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="step-card fx-3d">
          <FaMapMarkedAlt className="step-icon text-green-300" />
          <h3 className="step-title">3. Location-Driven Services</h3>
          <p className="step-desc">
            Nearby restaurants, events, stores, rides, and local experiences.
          </p>
        </div>

        {/* STEP 4 */}
        <div className="step-card fx-3d">
          <FaBolt className="step-icon text-orange-300" />
          <h3 className="step-title">4. Real-Time Integrations</h3>
          <p className="step-desc">
            Fast APIs connect merchants, delivery, maps, and ticketing in
            real-time.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-6xl mx-auto mt-20 mb-28">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Everything Works Seamlessly Together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* FOOD + SHOPPING */}
          <div className="feature-card">
            <FaShoppingCart className="feature-icon text-blue-300" />
            <h3 className="feature-title">Unified Shopping & Food</h3>
            <p className="feature-desc">
              Order food, buy essentials, browse products — all inside Gozy.
            </p>
          </div>

          {/* STORES */}
          <div className="feature-card">
            <FaStore className="feature-icon text-green-300" />
            <h3 className="feature-title">Store + Merchant Integration</h3>
            <p className="feature-desc">
              Local stores sync inventory, pricing, and orders instantly.
            </p>
          </div>

          {/* SOCIAL */}
          <div className="feature-card">
            <FaUserFriends className="feature-icon text-purple-300" />
            <h3 className="feature-title">Social + Community</h3>
            <p className="feature-desc">
              Follow friends, share lists, discover trending places & events.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <div className="text-center mt-20">
        <h3 className="text-3xl font-extrabold mb-4">
          Experience the Future with{" "}
          <span className="text-purple-400">Gozy</span>
        </h3>
        <p className="text-gray-300 mb-6">
          Everything you need. One smart ecosystem.
        </p>

        <a
          href="#"
          className="cta-btn inline-block px-10 py-4 rounded-full text-lg font-semibold"
        >
          Get Started →
        </a>
      </div>

      {/* STYLING */}
      <style>{`
        /* STEP CARDS */
        .step-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 26px;
          border-radius: 18px;
          text-align: center;
          transition: 0.35s;
        }
        .step-card:hover {
          border-color: rgba(168,85,247,0.7);
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 22px 55px rgba(168,85,247,0.25);
        }
        .step-icon {
          font-size: 48px;
          margin-bottom: 14px;
        }
        .step-title {
          font-weight: 700;
          font-size: 1.3rem;
          margin-bottom: 6px;
        }
        .step-desc {
          color: #ccc;
          font-size: 0.95rem;
        }

        /* FEATURES */
        .feature-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 26px;
          border-radius: 18px;
          transition: 0.35s;
        }
        .feature-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: rgba(168,85,247,0.7);
          box-shadow: 0 22px 55px rgba(168,85,247,0.25);
        }
        .feature-icon {
          font-size: 46px;
          margin-bottom: 10px;
        }
        .feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .feature-desc {
          color: #ccc;
        }

        /* CTA BUTTON */
        .cta-btn {
          background: linear-gradient(90deg,#a855f7,#6366f1);
          box-shadow: 0 0 22px rgba(99,102,241,0.5);
          transition: 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 33px rgba(168,85,247,0.7);
        }

        /* 3D FX */
        .fx-3d:hover {
          transform: translateY(-10px) rotateX(8deg) rotateY(-8deg);
        }

        /* PARTICLES */
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
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

export default HowGozyWorks;
