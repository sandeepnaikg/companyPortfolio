import React, { useState } from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaLock,
  FaUser,
  FaWallet,
} from "react-icons/fa";

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How do I reset my password?",
      a: "You can reset your password from the Profile → Security → Reset Password section.",
    },
    {
      q: "How do I contact support?",
      a: "You can email us anytime at support@gozy.in or raise a ticket through the Help Center.",
    },
    {
      q: "Where can I track my orders?",
      a: "Go to Orders → Recent Activity to view all your current and past orders.",
    },
    {
      q: "How does Gozy protect my data?",
      a: "We use state-of-the-art encryption, secured APIs, and multi-layered security protocols.",
    },
  ];

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div
      className="relative min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 py-24 text-white overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* Particle FX Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
      </div>

      {/* Glow Auras */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[180px]" />

      {/* Page Title */}
      <h1 className="text-center text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Help Center
      </h1>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
        Find answers, explore topics, and get support instantly.
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-16 glass-card p-4 rounded-2xl flex items-center gap-3">
        <FaSearch className="text-purple-300 text-xl" />
        <input
          type="text"
          placeholder="Search help articles, FAQs..."
          className="bg-transparent w-full outline-none text-white placeholder-gray-400"
        />
      </div>

      {/* Quick Help Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="quick-card">
          <FaUser className="quick-icon text-blue-300" />
          <h3 className="quick-title">Account Help</h3>
          <p className="quick-desc">Profile, login, security, and settings.</p>
        </div>

        <div className="quick-card">
          <FaWallet className="quick-icon text-green-300" />
          <h3 className="quick-title">Payments</h3>
          <p className="quick-desc">Refunds, wallets, payment failures, etc.</p>
        </div>

        <div className="quick-card">
          <FaLock className="quick-icon text-purple-300" />
          <h3 className="quick-title">Privacy & Security</h3>
          <p className="quick-desc">Data protection and system security.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="faq-card">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(i)}
              >
                <span className="text-lg font-semibold text-white/90">
                  {item.q}
                </span>

                <span className="text-purple-300 text-2xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`transition-all overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-10">
        <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
        <p className="text-gray-300 mb-6">
          Our support team is always here to assist you.
        </p>

        <a
          href="mailto:support@gozy.in"
          className="cta-btn px-8 py-4 rounded-full text-lg font-semibold inline-block"
        >
          Contact Support →
        </a>
      </div>

      {/* Custom CSS */}
      <style>{`
        
        /* GLASS CARD */
        .glass-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
        }

        /* QUICK HELP CARDS */
        .quick-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          padding: 24px;
          border-radius: 18px;
          text-align: center;
          transition: 0.35s;
        }
        .quick-card:hover {
          transform: translateY(-10px) scale(1.03);
          border-color: rgba(168,85,247,0.7);
          box-shadow: 0 20px 50px rgba(168,85,247,0.25);
        }
        .quick-icon {
          font-size: 42px;
          margin-bottom: 12px;
        }
        .quick-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .quick-desc {
          color: #ccc;
          font-size: 0.95rem;
        }

        /* FAQ */
        .faq-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 16px;
          transition: 0.35s;
        }
        .faq-card:hover {
          border-color: rgba(255,255,255,0.25);
          box-shadow: 0 0 25px rgba(150,110,255,0.25);
        }

        /* CTA BUTTON */
        .cta-btn {
          background: linear-gradient(90deg,#a855f7,#6366f1);
          box-shadow: 0 0 20px rgba(99,102,241,0.4);
          transition: 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(168,85,247,0.6);
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

export default HelpCenter;
