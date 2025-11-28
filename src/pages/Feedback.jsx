import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Feedback = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div
      className="relative min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 py-24 text-white flex items-center justify-center overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* PARTICLE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
        <div className="particle p4"></div>
      </div>

      {/* Soft Glow Auras */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-[170px]" />
      <div className="absolute top-1/2 left-1/3 w-52 h-52 bg-pink-500/10 blur-[120px]" />

      {/* FEEDBACK CARD */}
      <div className="relative max-w-xl w-full glass-card p-8 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
          Share Your Feedback
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Help us improve Gozy by sharing your thoughts!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              className="input-box"
              placeholder="Your name"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="input-box"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-300">Feedback</label>
            <textarea
              className="input-box resize-none h-32"
              placeholder="Write your feedback..."
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="cta-btn w-full flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <FaPaperPlane className="text-white" />
            Send Feedback
          </button>
        </form>

        {/* SUCCESS MESSAGE */}
        {sent && (
          <div className="success-popup">
            <p>Thank you! Your feedback has been submitted.</p>
          </div>
        )}
      </div>

      {/* CUSTOM CSS */}
      <style>{`
        /* GLASS CARD */
        .glass-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          animation: entry 0.8s ease forwards;
        }

        @keyframes entry {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* INPUT FIELDS */
        .input-box {
          width: 100%;
          margin-top: 6px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          color: white;
          outline: none;
          transition: 0.3s;
          font-size: 1rem;
        }
        .input-box:focus {
          border-color: rgba(168,85,247,0.8);
          box-shadow: 0 0 18px rgba(168,85,247,0.35);
          background: rgba(255,255,255,0.12);
        }

        /* CTA BUTTON */
        .cta-btn {
          background: linear-gradient(90deg,#a855f7,#6366f1);
          padding: 14px;
          border-radius: 14px;
          box-shadow: 0 0 20px rgba(99,102,241,0.4);
          transition: 0.3s;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(168,85,247,0.6);
        }

        /* SUCCESS POPUP */
        .success-popup {
          margin-top: 20px;
          text-align: center;
          padding: 14px;
          border-radius: 12px;
          background: rgba(34,197,94,0.15);
          border: 1px solid rgba(34,197,94,0.4);
          backdrop-filter: blur(10px);
          animation: popup 0.4s ease;
        }
        @keyframes popup {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* PARTICLE ANIMATIONS */
        .particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.18);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 12s infinite linear;
        }
        .p1 { top: 20%; left: 15%; animation-duration: 10s; }
        .p2 { top: 70%; left: 80%; animation-duration: 13s; }
        .p3 { top: 85%; left: 35%; animation-duration: 15s; }
        .p4 { top: 40%; left: 65%; animation-duration: 18s; }

        @keyframes float {
          0% { transform: translate(0,0); opacity: 0.7; }
          50% { transform: translate(20px,-30px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0.7; }
        }

      `}</style>
    </div>
  );
};

export default Feedback;
