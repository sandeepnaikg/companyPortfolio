// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "../style";
// import { logo } from "../assets";
// import { footerLinks } from "../constants";
// import {
//   FaHome,
//   FaInfoCircle,
//   FaCogs,
//   FaBriefcase,
//   FaEnvelope,
//   FaQuestionCircle,
//   FaHandsHelping,
//   FaExclamationTriangle,
//   FaCommentDots,
//   FaUserShield,
//   FaFileContract,
//   FaHandshake,
//   FaUserPlus,
// } from "react-icons/fa";
// import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full py-6 flex flex-col justify-center items-start bg-[#1a1333] text-white text-sm relative px-6 md:px-12">
//       <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
//         <div className="flex-[1] flex flex-col justify-start mr-6">
//           <img
//             src={logo}
//             alt="Gozy logo"
//             className="w-[200px] h-[60px] object-contain"
//           />
//           <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
//             A unified, faster, and more convenient way to handle your daily
//             digital life — powered by Gozy.
//           </p>
//         </div>

//         <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-6">
//           {footerLinks.map((link) => (
//             <div
//               key={link.title}
//               className="flex flex-col ss:my-0 my-4 min-w-[170px]"
//             >
//               <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white flex items-center gap-2">
//                 {link.title.includes("Support") && (
//                   <FaHandsHelping className="inline-block text-lg" />
//                 )}
//                 {link.title}
//               </h4>
//               <ul className="list-none mt-4">
//                 {link.links
//                   .filter((item) => item.name !== "Home")
//                   .map((item, index, arr) => {
//                     let icon = null;
//                     if (item.name === "About Gozy")
//                       icon = <FaInfoCircle className="inline-block" />;
//                     else if (item.name === "How Gozy Works")
//                       icon = <FaCogs className="inline-block" />;
//                     else if (item.name === "Careers")
//                       icon = <FaBriefcase className="inline-block" />;
//                     else if (item.name === "Contact Us")
//                       icon = <FaEnvelope className="inline-block" />;
//                     else if (item.name === "Help Center")
//                       icon = <FaHandsHelping className="inline-block" />;
//                     else if (item.name === "FAQ")
//                       icon = <FaQuestionCircle className="inline-block" />;
//                     else if (item.name === "Report an Issue")
//                       icon = <FaExclamationTriangle className="inline-block" />;
//                     else if (item.name === "Feedback")
//                       icon = <FaCommentDots className="inline-block" />;
//                     else if (item.name === "Privacy Policy")
//                       icon = <FaUserShield className="inline-block" />;
//                     else if (item.name === "Terms & Services")
//                       icon = <FaFileContract className="inline-block" />;
//                     else if (item.name === "Become a Partner")
//                       icon = <FaUserPlus className="inline-block" />;
//                     return (
//                       <li
//                         key={item.name}
//                         className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer flex items-center gap-2 ${
//                           index !== arr.length - 1 ? "mb-4" : "mb-0"
//                         }`}
//                       >
//                         <Link
//                           to={item.link}
//                           className="flex items-center gap-2"
//                         >
//                           {icon}
//                           {item.name}
//                         </Link>
//                       </li>
//                     );
//                   })}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Eco-friendly and Social Impact badge removed as requested */}
//       </div>

//       <style>{`
//         .animate-fadeIn { animation: fadeIn .3s cubic-bezier(.2,.9,.4,1); }
//         @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
//       `}</style>

//       <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mt-6">
//         <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
//           © {new Date().getFullYear()} Gozy. All Rights Reserved.
//         </p>
//         <div className="flex flex-row md:mt-0 mt-6 gap-6 text-2xl">
//           <a
//             href="https://www.instagram.com/gozysuperapp?igsh=MWcwZm84ZWxkcWJkbA=="
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//           >
//             <FaInstagram className="hover:text-secondary transition-colors" />
//           </a>
//           <a
//             href="https://www.facebook.com/profile.php?id=61584560934055"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//           >
//             <FaFacebook className="hover:text-secondary transition-colors" />
//           </a>
//           <a
//             href="https://x.com/gozysuperapp?t=eIAWMo5qw0vpr00ooMgnFw&s=09"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//           >
//             <FaTwitter className="hover:text-secondary transition-colors" />
//           </a>
//           <a
//             href="https://www.linkedin.com/company/gozy4/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin className="hover:text-secondary transition-colors" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";
import {
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBriefcase,
  FaEnvelope,
  FaQuestionCircle,
  FaHandsHelping,
  FaExclamationTriangle,
  FaCommentDots,
  FaUserShield,
  FaFileContract,
  FaHandshake,
  FaUserPlus,
  FaArrowUp,
} from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full py-16 text-white overflow-hidden"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob1" />
        <div className="blob2" />
        <div className="blob3" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 pb-12">
          {/* Logo and Description */}
          <div className="flex-[1] flex flex-col justify-start">
            <div className="logo-wrapper">
              <img
                src={logo}
                alt="Gozy logo"
                className="w-[200px] h-[60px] object-contain footer-logo"
              />
            </div>
            <p className="footer-description mt-6 max-w-[310px]">
              A unified, faster, and more convenient way to handle your daily
              digital life — powered by Gozy.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-row gap-4 mt-8">
              <a
                href="https://www.instagram.com/gozysuperapp?igsh=MWcwZm84ZWxkcWJkbA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon instagram-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584560934055"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon facebook-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/gozysuperapp?t=eIAWMo5qw0vpr00ooMgnFw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon twitter-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/gozy4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon linkedin-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((link) => (
              <div key={link.title} className="footer-column">
                <h4 className="footer-column-title">
                  {link.title.includes("Support") && (
                    <FaHandsHelping className="title-icon" />
                  )}
                  {link.title}
                </h4>
                <ul className="footer-links-list">
                  {link.links
                    .filter((item) => item.name !== "Home")
                    .map((item) => {
                      let icon = null;
                      if (item.name === "About Gozy")
                        icon = <FaInfoCircle className="link-icon" />;
                      else if (item.name === "How Gozy Works")
                        icon = <FaCogs className="link-icon" />;
                      else if (item.name === "Careers")
                        icon = <FaBriefcase className="link-icon" />;
                      else if (item.name === "Contact Us")
                        icon = <FaEnvelope className="link-icon" />;
                      else if (item.name === "Help Center")
                        icon = <FaHandsHelping className="link-icon" />;
                      else if (item.name === "FAQ")
                        icon = <FaQuestionCircle className="link-icon" />;
                      else if (item.name === "Report an Issue")
                        icon = <FaExclamationTriangle className="link-icon" />;
                      else if (item.name === "Feedback")
                        icon = <FaCommentDots className="link-icon" />;
                      else if (item.name === "Privacy Policy")
                        icon = <FaUserShield className="link-icon" />;
                      else if (item.name === "Terms & Services")
                        icon = <FaFileContract className="link-icon" />;
                      else if (item.name === "Become a Partner")
                        icon = <FaUserPlus className="link-icon" />;

                      return (
                        <li key={item.name} className="footer-link-item">
                          <Link to={item.link} className="footer-link">
                            {icon}
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-8 gap-4">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Gozy. All Rights Reserved.
          </p>

          {/* Footer badges removed as requested */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <style>{`


        /* Floating gradient blobs */
        .blob1 {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: rgba(147, 51, 234, 0.2);
          filter: blur(120px);
          animation: float 8s infinite ease-in-out;
        }
        .blob2 {
          position: absolute;
          bottom: 15%;
          right: 8%;
          width: 450px;
          height: 450px;
          background: rgba(59, 130, 246, 0.2);
          filter: blur(150px);
          animation: pulse-blob 7s infinite ease-in-out;
        }
        .blob3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 350px;
          height: 350px;
          background: rgba(236, 72, 153, 0.15);
          filter: blur(130px);
          animation: float 6s infinite ease-in-out reverse;
        }

        /* Logo */
        .logo-wrapper {
          animation: fadeIn 1s ease-out;
        }

        .footer-logo {
          filter: drop-shadow(0 4px 12px rgba(192, 132, 252, 0.3));
          transition: transform 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        /* Description */
        .footer-description {
          color: #d3cae8;
          font-size: 1rem;
          line-height: 1.7;
          animation: fadeIn 1.2s ease-out;
        }

        /* Social Icons */
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #d3cae8;
          font-size: 22px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-icon:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 12px 24px rgba(147, 51, 234, 0.3);
        }

        .instagram-icon:hover {
          background: linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          border-color: #bc1888;
          color: white;
        }

        .facebook-icon:hover {
          background: #1877f2;
          border-color: #1877f2;
          color: white;
        }

        .twitter-icon:hover {
          background: #1da1f2;
          border-color: #1da1f2;
          color: white;
        }

        .linkedin-icon:hover {
          background: #0077b5;
          border-color: #0077b5;
          color: white;
        }

        /* Footer Columns */
        .footer-column {
          animation: fadeIn 1.4s ease-out;
        }

        .footer-column-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .title-icon {
          color: #c084fc;
          font-size: 20px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-link-item {
          margin-bottom: 12px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #d3cae8;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 6px 0;
        }

        .footer-link:hover {
          color: #c084fc;
          transform: translateX(4px);
        }

        .link-icon {
          font-size: 16px;
          color: #a78bfa;
        }

        /* Divider */
        .footer-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(192, 132, 252, 0.3),
            transparent
          );
          margin: 32px 0 0 0;
        }

        /* Copyright */
        .footer-copyright {
          font-size: 1rem;
          color: #d3cae8;
          text-align: center;
        }

        /* Footer Badges */
        .footer-badges {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(192, 132, 252, 0.1);
          border: 1px solid rgba(192, 132, 252, 0.3);
          border-radius: 30px;
          backdrop-filter: blur(10px);
          font-size: 0.875rem;
          color: #e9d5ff;
          font-weight: 600;
        }

        .badge-icon-footer {
          color: #c084fc;
          font-size: 16px;
        }

        /* Scroll to Top Button */
        .scroll-to-top {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #c084fc 0%, #8b5cf6 100%);
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(192, 132, 252, 0.4);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          pointer-events: none;
          z-index: 1000;
        }

        .scroll-to-top.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .scroll-to-top:hover {
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 12px 32px rgba(192, 132, 252, 0.6);
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-blob {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-badges {
            width: 100%;
            flex-direction: column;
          }

          .footer-badge {
            width: 100%;
            justify-content: center;
          }

          .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 48px;
            height: 48px;
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
