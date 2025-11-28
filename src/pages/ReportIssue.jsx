import React, { useState } from "react";
import { FaBug, FaPaperPlane, FaExclamationTriangle } from "react-icons/fa";

const ReportIssue = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div
      className="relative min-h-screen text-white px-6 md:px-16 lg:px-24 xl:px-32 py-20 overflow-hidden"
      style={{ background: "rgb(18,14,40)" }}
    >
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
      </div>

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[170px]" />

      {/* Title */}
      <div className="relative text-center max-w-4xl mx-auto mb-12">
        <FaBug className="mx-auto text-purple-300 text-5xl mb-4" />
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Report an Issue
        </h1>
        <p className="text-gray-300 text-lg">
          Help us improve Gozy by reporting any bugs, errors, or issues you
          encounter.
        </p>
      </div>

      {/* Report Form */}
      <div className="relative max-w-2xl mx-auto glass-card p-8 rounded-3xl shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Issue Type */}
          <div>
            <label className="text-sm text-gray-300">Issue Type</label>
            <select className="input-box mt-2">
              <option>Bug / Error</option>
              <option>Payment Issue</option>
              <option>Account Problem</option>
              <option>App Crash</option>
              <option>UI/UX Issue</option>
              <option>Feature Not Working</option>
              <option>Other</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label className="text-sm text-gray-300">Priority</label>
            <select className="input-box mt-2">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="text-sm text-gray-300">Issue Title</label>
            <input
              type="text"
              className="input-box"
              placeholder="Short summary of the issue"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              className="input-box resize-none h-32"
              placeholder="Describe the issue in detail..."
              required
            ></textarea>
          </div>

          {/* Screenshot */}
          <div>
            <label className="text-sm text-gray-300">
              Screenshot (optional)
            </label>
            <input type="file" className="input-box mt-2 cursor-pointer" />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="cta-btn w-full flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <FaPaperPlane className="text-white" /> Submit Issue
          </button>
        </form>

        {/* SUCCESS POPUP */}
        {sent && (
          <div className="success-popup">
            <FaExclamationTriangle className="mx-auto text-green-300 text-xl mb-1" />
            <p>Issue submitted successfully! Our team will fix it soon.</p>
          </div>
        )}
      </div>

      {/* Styles */}
      <style>{`
        .glass-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .input-box {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 14px;
          color: white;
          outline: none;
          transition: 0.3s;
        }
        .input-box:focus {
          border-color: rgba(168,85,247,0.7);
          box-shadow: 0 0 18px rgba(168,85,247,0.35);
        }

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

        .success-popup {
          margin-top: 20px;
          text-align: center;
          padding: 14px;
          border-radius: 12px;
          background: rgba(34,197,94,0.2);
          border: 1px solid rgba(34,197,94,0.4);
          backdrop-filter: blur(10px);
          animation: popup 0.4s ease;
          font-size: 0.95rem;
        }

        @keyframes popup {
          0% { opacity: 0; transform: scale(0.92); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Particles */
        .particle {
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.17);
          border-radius: 50%;
          filter: blur(2px);
          animation: float 14s infinite linear;
        }
        .p1 { top: 18%; left: 12%; animation-duration: 11s; }
        .p2 { top: 60%; left: 82%; animation-duration: 15s; }
        .p3 { top: 85%; left: 30%; animation-duration: 18s; }
        .p4 { top: 40%; left: 60%; animation-duration: 20s; }

        @keyframes float {
          0% { transform: translate(0,0); opacity: 0.6; }
          50% { transform: translate(22px,-25px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default ReportIssue;
