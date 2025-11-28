import React from "react";
import {
  FaLaptopCode,
  FaBullhorn,
  FaUsers,
  FaPalette,
  FaRocket,
  FaHeartbeat,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

const Careers = () => {
  return (
    <div
      className="relative min-h-screen text-white pt-28 pb-20 overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* BACKGROUND LIGHTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[160px]" />

      {/* HERO SECTION */}
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Careers at <span className="text-purple-400">Gozy</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
          Join the mission to build India’s most intelligent and unified
          superapp. Work with innovators, creators, and designers shaping the
          future of digital India.
        </p>
      </div>

      {/* OPEN ROLES SECTION */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Open Positions 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* ENGINEERS */}
          <div className="job-card">
            <FaLaptopCode className="job-icon text-purple-400" />
            <h3 className="job-title">Software Engineer</h3>
            <p className="job-desc">
              Full-stack & mobile engineers with passion for building scalable
              experiences.
            </p>
          </div>

          {/* DESIGN */}
          <div className="job-card">
            <FaPalette className="job-icon text-pink-400" />
            <h3 className="job-title">Product Designer</h3>
            <p className="job-desc">
              Build intuitive, minimalistic and futuristic designs for millions
              of users.
            </p>
          </div>

          {/* MARKETING */}
          <div className="job-card">
            <FaBullhorn className="job-icon text-yellow-400" />
            <h3 className="job-title">Marketing & Growth</h3>
            <p className="job-desc">
              Help scale Gozy’s brand and reach across India.
            </p>
          </div>

          {/* OPERATIONS */}
          <div className="job-card">
            <FaUsers className="job-icon text-blue-400" />
            <h3 className="job-title">Operations Specialist</h3>
            <p className="job-desc">
              Manage partnerships, logistics, and smooth product operations.
            </p>
          </div>

          {/* PRODUCT */}
          <div className="job-card">
            <FaLightbulb className="job-icon text-green-400" />
            <h3 className="job-title">Product Manager</h3>
            <p className="job-desc">
              Drive product strategy and define the future of Gozy.
            </p>
          </div>

          {/* BUSINESS DEVELOPMENT */}
          <div className="job-card">
            <FaHandshake className="job-icon text-orange-400" />
            <h3 className="job-title">Business Development</h3>
            <p className="job-desc">
              Build relationships and grow Gozy’s nationwide ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* WHY WORK AT GOZY */}
      <div className="max-w-6xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Work With <span className="text-purple-400">Gozy?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="benefit-card">
            <FaRocket className="benefit-icon text-purple-300" />
            <h4 className="benefit-title">Build the Future</h4>
            <p>We’re shaping India’s next digital revolution.</p>
          </div>

          <div className="benefit-card">
            <FaHeartbeat className="benefit-icon text-pink-300" />
            <h4 className="benefit-title">Healthy Work Culture</h4>
            <p>A culture that values creativity, honesty & ownership.</p>
          </div>

          <div className="benefit-card">
            <FaChartLine className="benefit-icon text-green-300" />
            <h4 className="benefit-title">Massive Growth</h4>
            <p>Grow fast in a high-energy, high-impact environment.</p>
          </div>

          <div className="benefit-card">
            <FaGlobe className="benefit-icon text-blue-300" />
            <h4 className="benefit-title">Nationwide Impact</h4>
            <p>Your work will touch millions across India.</p>
          </div>

          <div className="benefit-card">
            <FaLaptopCode className="benefit-icon text-yellow-300" />
            <h4 className="benefit-title">Best Tools & Tech</h4>
            <p>Work with modern tools, modern code, modern teams.</p>
          </div>

          <div className="benefit-card">
            <FaUsers className="benefit-icon text-purple-300" />
            <h4 className="benefit-title">Collaborative Teams</h4>
            <p>You’ll work with passionate builders & creators.</p>
          </div>
        </div>
      </div>

      {/* APPLY CTA */}
      <div className="text-center mt-28 px-6">
        <h2 className="text-3xl font-bold">
          Ready to Build the Future with{" "}
          <span className="text-purple-400">Gozy?</span>
        </h2>
        <p className="text-gray-300 text-lg mt-3 mb-6">
          We’re hiring across multiple roles! Be part of something
          extraordinary.
        </p>

        <a
          href="mailto:careers@gozy.in"
          className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold"
        >
          Apply Now →
        </a>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        .job-card {
          background: rgba(255,255,255,0.04);
          padding: 26px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          transition: 0.3s;
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }
        .job-card:hover {
          transform: translateY(-10px);
          border-color: rgba(168,85,247,0.5);
        }
        .job-icon {
          font-size: 42px;
          margin-bottom: 14px;
        }
        .job-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .job-desc {
          color: #ccc;
          font-size: 0.95rem;
        }

        .benefit-card {
          text-align: center;
          padding: 28px;
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(12px);
          transition: 0.3s;
        }
        .benefit-card:hover {
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-8px);
        }
        .benefit-icon {
          font-size: 42px;
          margin-bottom: 12px;
        }
        .benefit-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
};

export default Careers;
