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
      className="relative min-h-screen text-white pt-28 pb-16 overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* Floating background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[160px]" />

      {/* PAGE TITLE */}
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
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
            Merchants, retailers, and brands looking to expand digitally and
            reach more customers.
          </p>
        </div>

        {/* 2 */}
        <div className="partner-card">
          <FaCogs className="partner-icon text-blue-400" />
          <h3 className="card-title">Service Partners</h3>
          <p className="text-gray-300">
            Service providers for travel, food, finance, utilities, or logistics
            — integrate seamlessly with Gozy.
          </p>
        </div>

        {/* 3 */}
        <div className="partner-card">
          <FaPuzzlePiece className="partner-icon text-green-400" />
          <h3 className="card-title">Tech & API Partners</h3>
          <p className="text-gray-300">
            Companies offering APIs, payments, mapping, identity, AI, or
            infrastructure solutions.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Partner with <span className="text-purple-400">Gozy?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="benefit-item">
            <FaChartLine className="benefit-icon text-blue-300" />
            <div>
              <h4 className="benefit-title">Expand your reach</h4>
              <p className="benefit-desc">
                Get access to Gozy’s rapidly growing user base across India.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <FaUsers className="benefit-icon text-purple-300" />
            <div>
              <h4 className="benefit-title">Better user engagement</h4>
              <p className="benefit-desc">
                Integrated experiences keep users active, loyal, and returning.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <FaHandshake className="benefit-icon text-green-300" />
            <div>
              <h4 className="benefit-title">Collaborative opportunities</h4>
              <p className="benefit-desc">
                Co-build campaigns, integrations, and innovations.
              </p>
            </div>
          </div>

          <div className="benefit-item">
            <FaRocket className="benefit-icon text-orange-300" />
            <div>
              <h4 className="benefit-title">Boost your growth</h4>
              <p className="benefit-desc">
                Use Gozy’s infrastructure, analytics, and partner tools to scale
                faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP STEPS — Minimal timeline */}
      <section className="max-w-4xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Partnership Process
        </h2>

        <div className="timeline-container">
          <div className="step">
            <div className="step-circle">1</div>
            <p className="step-label">Tell us your business needs</p>
          </div>

          <div className="step-line" />

          <div className="step">
            <div className="step-circle">2</div>
            <p className="step-label">Integration & onboarding</p>
          </div>

          <div className="step-line" />

          <div className="step">
            <div className="step-circle">3</div>
            <p className="step-label">Go Live on Gozy</p>
          </div>

          <div className="step-line" />

          <div className="step">
            <div className="step-circle">4</div>
            <p className="step-label">Scale with Gozy</p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-3xl mx-auto mt-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Partner with <span className="text-purple-400">Gozy?</span>
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Let’s build India’s digital future together.
        </p>

        <a
          href="mailto:partners@gozy.in"
          className="inline-block px-8 py-4 rounded-full text-lg font-semibold bg-purple-600 hover:bg-purple-700 transition"
        >
          Contact Us →
        </a>
      </section>

      {/* CUSTOM CSS */}
      <style>{`
        .partner-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 24px;
          border-radius: 16px;
          transition: 0.35s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .partner-card:hover {
          transform: translateY(-10px);
          border-color: rgba(168,85,247,0.5);
          box-shadow: 0 20px 50px rgba(168,85,247,0.15);
        }
        .partner-icon {
          font-size: 44px;
          margin-bottom: 14px;
        }
        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .benefit-item {
          display: flex;
          gap: 14px;
          padding: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          transition: 0.3s;
        }
        .benefit-item:hover {
          border-color: rgba(255,255,255,0.25);
          transform: translateY(-6px);
        }
        .benefit-icon {
          font-size: 36px;
        }
        .benefit-title {
          font-weight: 700;
          margin-bottom: 4px;
        }
        .benefit-desc {
          color: #ccc;
        }

        /* TIMELINE */
        .timeline-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .step {
          text-align: center;
        }
        .step-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 3px solid rgba(168,85,247,0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 auto 10px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(10px);
        }
        .step-label {
          color: #ccc;
          font-size: 0.95rem;
        }
        .step-line {
          flex: 1;
          height: 3px;
          background: linear-gradient(90deg, rgba(168,85,247,0.3), rgba(96,165,250,0.3));
        }

        @media (max-width: 768px) {
          .timeline-container {
            flex-direction: column;
          }
          .step-line {
            width: 3px;
            height: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default BecomePartner;
