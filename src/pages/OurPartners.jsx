import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaRocket,
  FaNetworkWired,
  FaGlobeAmericas,
  FaLightbulb,
} from "react-icons/fa";

const OurPartners = () => {
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

      {/* GLOW LAYERS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />

      {/* TITLE */}
      <div className="relative text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Partners & Vision
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Gozy is the vision of two young, dynamic founders who believe the
          world deserves a simpler, smarter, and more connected digital
          experience.
          <br />
          We are now looking to collaborate with partners & investors who share
          our drive to build something truly remarkable.
        </p>
      </div>

      {/* WHY PARTNER WITH US */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="section-title mb-10">Why Connect With Gozy?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="partner-card fx-3d">
            <FaLightbulb className="icon text-yellow-300" />
            <h3 className="card-title">Young, Visionary Founders</h3>
            <p className="card-desc">
              Gozy is led by two bold, future-driven founders building a global
              product from day one.
            </p>
          </div>

          <div className="partner-card fx-3d">
            <FaNetworkWired className="icon text-purple-300" />
            <h3 className="card-title">Strong Partner Ecosystem</h3>
            <p className="card-desc">
              We collaborate with businesses, services, and technologies to make
              everyday life seamless.
            </p>
          </div>

          <div className="partner-card fx-3d">
            <FaRocket className="icon text-blue-300" />
            <h3 className="card-title">Built for Global Scale</h3>
            <p className="card-desc">
              Gozy aims to shine globally and become a universal digital
              ecosystem in 3 years.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE WANT TO CONNECT WITH */}
      <section className="max-w-5xl mx-auto my-24">
        <h2 className="section-title mb-12">We Are Looking To Connect With</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="connect-card">
            <FaHandshake className="text-green-300 text-[42px] mb-3" />
            <h3 className="text-xl font-bold mb-2">Investors</h3>
            <p className="text-gray-300">
              Visionary investors who believe in creating a global impact and
              want to be early in India’s next trillion-dollar ecosystem.
            </p>
          </div>

          <div className="connect-card">
            <FaUsers className="text-blue-300 text-[42px] mb-3" />
            <h3 className="text-xl font-bold mb-2">Business Partners</h3>
            <p className="text-gray-300">
              Companies looking for growth, visibility, and seamless integration
              with millions of users.
            </p>
          </div>

          <div className="connect-card">
            <FaNetworkWired className="text-purple-300 text-[42px] mb-3" />
            <h3 className="text-xl font-bold mb-2">Tech/API Providers</h3>
            <p className="text-gray-300">
              Services like payments, maps, identity, logistics & AI who want to
              power a future super-app.
            </p>
          </div>

          <div className="connect-card">
            <FaGlobeAmericas className="text-orange-300 text-[42px] mb-3" />
            <h3 className="text-xl font-bold mb-2">Global Collaborators</h3>
            <p className="text-gray-300">
              International partners who want to join a rapidly expanding
              ecosystem built for the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-24">
        <h3 className="text-3xl font-extrabold mb-4">
          Let's Build the Future Together
        </h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Gozy is not just an app — it's a movement. A mission to make life
          easier, smarter, and beautifully connected.
        </p>

        <a
          href="mailto:partners@gozy.in"
          className="cta-btn inline-block px-10 py-4 rounded-full text-lg font-semibold"
        >
          Connect With Gozy →
        </a>
      </div>

      {/* STYLING */}
      <style>{`
        .partner-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 26px;
          border-radius: 18px;
          text-align: center;
          transition: 0.35s;
        }
        .partner-card:hover {
          border-color: rgba(168,85,247,0.7);
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 22px 55px rgba(168,85,247,0.25);
        }

        .icon {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .card-desc {
          color: #ccc;
        }

        .connect-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 26px;
          border-radius: 18px;
          transition: 0.3s;
        }
        .connect-card:hover {
          transform: translateY(-8px);
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 18px 50px rgba(168,85,247,0.2);
        }

        .cta-btn {
          background: linear-gradient(90deg,#a855f7,#6366f1);
          box-shadow: 0 0 22px rgba(99,102,241,0.5);
          transition: 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 0 33px rgba(168,85,247,0.7);
        }

        .section-title {
          font-size: 2.6rem;
          font-weight: 800;
          text-align: center;
          background: linear-gradient(to right, #c084fc, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          margin-bottom: 20px;
          text-shadow: 0 0 16px rgba(120,80,255,0.25);
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

export default OurPartners;
