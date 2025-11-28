import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaRocket,
  FaChartLine,
  FaPuzzlePiece,
  FaStore,
  FaCogs,
} from "react-icons/fa";

const BecomePartner = () => {
  return (
    <div
      className="relative min-h-screen text-white pt-28 pb-16 overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* FLOATING PARTICLE GLOW BACKGROUND (Option B) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* HERO GLOW AURAS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 blur-[150px]" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/10 blur-[120px]" />

      {/* PAGE TITLE */}
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-[0_0_25px_rgba(150,90,255,0.45)]">
          Become a <span className="text-purple-400">Gozy Partner</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Collaborate with Gozy and tap into India’s fastest-growing digital
          ecosystem. Together, we build smarter experiences for millions.
        </p>
      </div>

      {/* PARTNER TYPE CARDS */}
      <section className="max-w-6xl mx-auto mt-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 1 */}
        <div className="partner-card">
          <FaStore className="partner-icon text-purple-400" />
          <h3 className="card-title">Business Partners</h3>
          <p className="text-gray-300">
            Merchants, retailers, and brands looking to expand digitally.
          </p>
        </div>

        {/* 2 */}
        <div className="partner-card">
          <FaCogs className="partner-icon text-blue-400" />
          <h3 className="card-title">Service Partners</h3>
          <p className="text-gray-300">
            Travel, food, finance, logistics, utilities — integrate seamlessly.
          </p>
        </div>

        {/* 3 */}
        <div className="partner-card">
          <FaPuzzlePiece className="partner-icon text-green-400" />
          <h3 className="card-title">Tech & API Partners</h3>
          <p className="text-gray-300">
            APIs, AI, payments, mapping, infrastructure & more.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="section-title">
          Why Partner with <span className="text-purple-400">Gozy?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="benefit-item fx-hover">
            <FaChartLine className="benefit-icon text-blue-300" />
            <div>
              className="relative min-h-screen px-6 md:px-16 lg:px-24 xl:px-32
              py-24 text-white flex items-center justify-center overflow-hidden"
              <p className="benefit-desc">
                Access Gozy’s rapidly growing user base across India.
              </p>
            </div>
          </div>

          <div className="benefit-item fx-hover">
            <FaUsers className="benefit-icon text-purple-300" />
            <div>
              <h4 className="benefit-title">Better user engagement</h4>
              <p className="benefit-desc">
                Integrated experiences keep users active and loyal.
              </p>
            </div>
          </div>

          <div className="benefit-item fx-hover">
            <FaHandshake className="benefit-icon text-green-300" />
            <div>
              <h4 className="benefit-title">Collaborative opportunities</h4>
              <p className="benefit-desc">
                Co-build campaigns, integrations & innovations.
              </p>
            </div>
          </div>

          <div className="benefit-item fx-hover">
            <FaRocket className="benefit-icon text-orange-300" />
            <div>
              <h4 className="benefit-title">Boost your growth</h4>
              <p className="benefit-desc">
                Use Gozy’s infrastructure & tools to scale instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="section-title">Partnership Process</h2>

        <div className="timeline-container">
          <div className="step fx-3d">
            <div className="step-circle">1</div>
            <p className="step-label">Tell us your needs</p>
          </div>

          <div className="step-line" />

          <div className="step fx-3d">
            <div className="step-circle">2</div>
            <p className="step-label">Integration & onboarding</p>
          </div>

          <div className="step-line" />

          <div className="step fx-3d">
            <div className="step-circle">3</div>
            <p className="step-label">Go Live on Gozy</p>
          </div>

          <div className="step-line" />

          <div className="step fx-3d">
            <div className="step-circle">4</div>
            <p className="step-label">Scale with Gozy</p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center px-6">
        <h2 className="section-title">
          Ready to Partner with <span className="text-purple-400">Gozy?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Let’s build India’s digital future together.
        </p>

        <a href="mailto:partners@gozy.in" className="cta-button">
          Contact Us →
        </a>
      </section>

      {/* CUSTOM CSS */}
      <style>{`
        /* --------------------------
           OPTION A - GLASS UI
        -------------------------- */
        .partner-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          padding: 24px;
          border-radius: 18px;
          transition: 0.35s;
          box-shadow: 0 10px 40px rgba(0,0,0,0.35);
        }
        .partner-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: rgba(168,85,247,0.7);
          box-shadow: 0 25px 60px rgba(168,85,247,0.25);
        }
        .partner-icon {
          font-size: 46px;
          margin-bottom: 14px;
        }
        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        /* BENEFITS */
        .benefit-item {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          transition: 0.3s;
        }

        /* --------------------------
           OPTION B - ADVANCED FX
        -------------------------- */

        /* Hover Glow Trail */
        .fx-hover:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(255,255,255,0.3);
          box-shadow: 0 0 25px rgba(140,100,255,0.35);
        }

        /* 3D floating hover */
        .fx-3d:hover {
          transform: translateY(-10px) rotateX(8deg) rotateY(-8deg);
        }

        /* Timeline glow */
        .step-circle {
          background: rgba(255,255,255,0.08);
          border: 3px solid rgba(168,85,247,0.7);
          backdrop-filter: blur(12px);
          transition: 0.3s;
        }
        .step-circle:hover {
          border-color: rgba(255,255,255,0.7);
          box-shadow: 0 0 25px rgba(168,85,247,0.4);
        }

        /* CTA Button */
        .cta-button {
          display: inline-block;
          padding: 14px 36px;
          border-radius: 999px;
          background: linear-gradient(90deg, #a855f7, #6366f1);
          font-weight: 700;
          font-size: 1.2rem;
          transition: 0.3s;
          box-shadow: 0 0 18px rgba(99,102,241,0.4);
        }
        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 28px rgba(168,85,247,0.7);
        }

        /* SECTION TITLES */
        .section-title {
          font-size: 2.6rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 14px;
          background: linear-gradient(to right, #c084fc, #60a5fa);
          -webkit-background-clip: text;
          color: transparent;
          text-shadow: 0 0 16px rgba(120,80,255,0.25);
        }

        /* --------------------------
           PARTICLE ANIMATIONS
        -------------------------- */
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 12s infinite linear;
        }
        .particle-1 { top: 20%; left: 10%; animation-duration: 9s; }
        .particle-2 { top: 60%; left: 80%; animation-duration: 11s; }
        .particle-3 { top: 80%; left: 30%; animation-duration: 14s; }
        .particle-4 { top: 30%; left: 70%; animation-duration: 16s; }

        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-30px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }

      `}</style>
    </div>
  );
};

export default BecomePartner;
