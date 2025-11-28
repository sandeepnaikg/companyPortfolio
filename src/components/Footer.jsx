import React from "react";
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
} from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col justify-center items-start bg-[#1a1333] text-white text-sm relative px-6 md:px-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="flex-[1] flex flex-col justify-start mr-6">
          <img
            src={logo}
            alt="Gozy logo"
            className="w-[200px] h-[60px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A unified, faster, and more convenient way to handle your daily
            digital life — powered by Gozy.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-6">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col ss:my-0 my-4 min-w-[170px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white flex items-center gap-2">
                {link.title.includes("Support") && (
                  <FaHandsHelping className="inline-block text-lg" />
                )}
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links
                  .filter((item) => item.name !== "Home")
                  .map((item, index, arr) => {
                    let icon = null;
                    if (item.name === "About Gozy")
                      icon = <FaInfoCircle className="inline-block" />;
                    else if (item.name === "How Gozy Works")
                      icon = <FaCogs className="inline-block" />;
                    else if (item.name === "Careers")
                      icon = <FaBriefcase className="inline-block" />;
                    else if (item.name === "Contact Us")
                      icon = <FaEnvelope className="inline-block" />;
                    else if (item.name === "Help Center")
                      icon = <FaHandsHelping className="inline-block" />;
                    else if (item.name === "FAQ")
                      icon = <FaQuestionCircle className="inline-block" />;
                    else if (item.name === "Report an Issue")
                      icon = <FaExclamationTriangle className="inline-block" />;
                    else if (item.name === "Feedback")
                      icon = <FaCommentDots className="inline-block" />;
                    else if (item.name === "Privacy Policy")
                      icon = <FaUserShield className="inline-block" />;
                    else if (item.name === "Terms & Services")
                      icon = <FaFileContract className="inline-block" />;
                    else if (item.name === "Become a Partner")
                      icon = <FaUserPlus className="inline-block" />;
                    return (
                      <li
                        key={item.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer flex items-center gap-2 ${
                          index !== arr.length - 1 ? "mb-4" : "mb-0"
                        }`}
                      >
                        <Link
                          to={item.link}
                          className="flex items-center gap-2"
                        >
                          {icon}
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
          ))}
        </div>

        {/* Eco-friendly and Social Impact badge removed as requested */}
      </div>

      <style>{`
        .animate-fadeIn { animation: fadeIn .3s cubic-bezier(.2,.9,.4,1); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
      `}</style>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] mt-6">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © {new Date().getFullYear()} Gozy. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-6 text-2xl">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="hover:text-secondary transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="hover:text-secondary transition-colors" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="hover:text-secondary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="hover:text-secondary transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
