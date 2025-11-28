import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="relative min-h-screen text-white pt-28 pb-20 overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[160px]" />

      {/* HEADER */}
      <div className="relative text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Contact <span className="text-purple-400">Gozy</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mt-4 leading-relaxed">
          We’re here to help! Reach out to us for support, partnership queries,
          media requests, career opportunities, or general questions.
        </p>
      </div>

      {/* CONTACT GRID */}
      <div className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* CONTACT CARD */}
        <div className="contact-card">
          <h2 className="text-2xl font-bold mb-6">📩 Get in Touch</h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-300 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Official Email</p>
                <a
                  href="mailto:gozysuperapp@gmail.com"
                  className="text-lg font-semibold text-purple-300 hover:underline"
                >
                  gozysuperapp@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-300 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Support Phone</p>
                <p className="text-lg font-semibold text-gray-200">
                  +91 96522 97686
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaClock className="text-blue-300 text-2xl" />
              <div>
                <p className="text-sm text-gray-400">Working Hours</p>
                <p className="text-lg font-semibold text-gray-200">
                  Mon – Sat (9:30 AM – 6:30 PM)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-300 text-2xl mt-1" />
              <div>
                <p className="text-sm text-gray-400">Registered Location</p>
                <p className="text-lg font-semibold text-gray-200">
                  Hyderabad, Telangana, India
                </p>
                <p className="text-gray-400 text-sm">
                  (Corporate office details will be updated after launch)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOUNDERS CARD */}
        <div className="contact-card">
          <h2 className="text-2xl font-bold mb-6">👑 Founders</h2>

          <div className="space-y-6">
            {/* SANDEEP */}
            <div className="flex items-start gap-4">
              <FaUserTie className="text-yellow-300 text-3xl" />
              <div>
                <p className="text-lg font-bold">Sandeep Naik</p>
                <p className="text-purple-300 text-sm font-semibold">
                  Founder & CEO — Gozy
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Passionate about building futuristic technologies that
                  simplify everyday digital life for millions.
                </p>
                <p className="text-gray-200 mt-1 font-semibold">
                  📞 +91 96522 97686
                </p>
              </div>
            </div>

            {/* NIKSHITHA */}
            <div className="flex items-start gap-4">
              <FaUserTie className="text-pink-300 text-3xl" />
              <div>
                <p className="text-lg font-bold">V Nikshitha</p>
                <p className="text-purple-300 text-sm font-semibold">
                  Founder & CEO — Gozy
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Focused on digital innovation, user experience, and impact
                  creation for modern India.
                </p>
                <p className="text-gray-200 mt-1 font-semibold">
                  📞 +91 93475 56415
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-20 px-6">
        <h2 className="text-3xl font-bold">
          Have a question or proposal?
          <span className="text-purple-400"> Let's talk.</span>
        </h2>
        <p className="text-gray-300 text-lg mt-3 mb-6">
          We reply within 24 hours on working days.
        </p>

        <a
          href="mailto:gozysuperapp@gmail.com"
          className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold shadow-lg"
        >
          Send Message ✉️
        </a>
      </div>

      {/* CUSTOM STYLES */}
      <style>{`
        .contact-card {
          background: rgba(255,255,255,0.04);
          padding: 28px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
          transition: 0.3s;
        }
        .contact-card:hover {
          border-color: rgba(168,85,247,0.4);
          transform: translateY(-6px);
        }
      `}</style>
    </div>
  );
};

export default Contact;
