// import React, { useState } from "react";
// import { close, logo, menu } from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   const navigateTo = (e, id) => {
//     e && e.preventDefault();
//     // If not on root, navigate to root so sections exist
//     if (window.location.pathname !== "/") {
//       window.history.pushState(null, "", "/");
//       window.dispatchEvent(new PopStateEvent("popstate"));
//       // wait briefly for the app to render the home sections
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }, 80);
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const onLogoClick = () => {
//     if (window.location.pathname !== "/") {
//       window.history.pushState(null, "", "/");
//       window.dispatchEvent(new PopStateEvent("popstate"));
//     }
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       <button onClick={onLogoClick} aria-label="Go to home">
//         <img src={logo} alt="Gozy" className="w-[124px] h-[32px]" />
//       </button>
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, i) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               i === navLinks.length - 1 ? "mr-0" : "mr-10"
//             } text-white mr-10`}
//           >
//             <a href={`#${nav.id}`} onClick={(e) => navigateTo(e, nav.id)}>
//               {nav.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle((previous) => !previous)}
//         />
//         <div
//           className={`${
//             toggle ? "flex" : "hidden"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex flex-col justify-end items-center flex-1">
//             {navLinks.map((nav, i) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-normal cursor-pointer text-[16px] ${
//                   i === navLinks.length - 1 ? "mr-0" : "mb-4"
//                 } text-white mr-10`}
//               >
//                 <a href={`#${nav.id}`} onClick={(e) => { navigateTo(e, nav.id); setToggle(false); }}>
//                   {nav.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(nav => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (e, id) => {
    e && e.preventDefault();
    if (window.location.pathname !== "/") {
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setToggle(false);
  };

  const onLogoClick = () => {
    if (window.location.pathname !== "/") {
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
        {/* Gradient border effect */}
        <div className="navbar-gradient-line" />
        
        <div className="navbar-content">
          {/* Logo with hover effect */}
          <button onClick={onLogoClick} aria-label="Go to home" className="logo-button">
            <div className="logo-glow" />
            <img src={logo} alt="Gozy" className="logo-image" />
          </button>

          {/* Desktop Navigation */}
          <ul className="desktop-nav">
            {navLinks.map((nav, i) => (
              <li key={nav.id} className="nav-item">
                <a
                  href={`#${nav.id}`}
                  onClick={(e) => navigateTo(e, nav.id)}
                  className={`nav-link ${activeSection === nav.id ? "nav-link-active" : ""}`}
                >
                  <span className="nav-link-text">{nav.title}</span>
                  <span className="nav-link-underline" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="mobile-menu-wrapper">
            <button
              onClick={() => setToggle(!toggle)}
              className="mobile-menu-button"
              aria-label="Toggle menu"
            >
              <div className="menu-icon-wrapper">
                <img
                  src={toggle ? close : menu}
                  alt="menu"
                  className={`menu-icon ${toggle ? "menu-icon-close" : ""}`}
                />
              </div>
            </button>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${toggle ? "mobile-menu-open" : ""}`}>
              {/* Background particles */}
              <div className="mobile-menu-particles">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="menu-particle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>

              <ul className="mobile-nav-list">
                {navLinks.map((nav, i) => (
                  <li
                    key={nav.id}
                    className="mobile-nav-item"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <a
                      href={`#${nav.id}`}
                      onClick={(e) => navigateTo(e, nav.id)}
                      className={`mobile-nav-link ${
                        activeSection === nav.id ? "mobile-nav-link-active" : ""
                      }`}
                    >
                      <span className="mobile-nav-icon">✨</span>
                      <span className="mobile-nav-text">{nav.title}</span>
                      <span className="mobile-nav-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        /* ========== Navbar Wrapper ========== */
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 40;
          width: 100%;
          padding: 1.5rem 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-scrolled {
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(139, 92, 246, 0.2);
          padding: 1rem 0;
        }

        .navbar-gradient-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(139, 92, 246, 0.5),
            rgba(236, 72, 153, 0.5),
            rgba(139, 92, 246, 0.5),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .navbar-scrolled .navbar-gradient-line {
          opacity: 1;
        }

        .navbar-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ========== Logo Styles ========== */
        .logo-button {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform 0.3s ease;
        }

        .logo-button:hover {
          transform: scale(1.05);
        }

        .logo-button:active {
          transform: scale(0.98);
        }

        .logo-glow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.3),
            transparent
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
          filter: blur(15px);
        }

        .logo-button:hover .logo-glow {
          opacity: 1;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .logo-image {
          width: 124px;
          height: 32px;
          position: relative;
          z-index: 1;
        }

        /* ========== Desktop Navigation ========== */
        .desktop-nav {
          display: none;
          list-style: none;
          gap: 2.5rem;
          align-items: center;
          margin: 0;
          padding: 0;
        }

        @media (min-width: 640px) {
          .desktop-nav {
            display: flex;
          }
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          position: relative;
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          cursor: pointer;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: white;
        }

        .nav-link-text {
          position: relative;
          z-index: 1;
        }

        .nav-link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #8b5cf6, #ec4899);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }

        .nav-link:hover .nav-link-underline,
        .nav-link-active .nav-link-underline {
          width: 100%;
        }

        .nav-link-active {
          color: white;
          font-weight: 600;
        }

        /* ========== Mobile Menu ========== */
        .mobile-menu-wrapper {
          display: flex;
          position: relative;
        }

        @media (min-width: 640px) {
          .mobile-menu-wrapper {
            display: none;
          }
        }

        .mobile-menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-button:hover {
          background: rgba(139, 92, 246, 0.2);
          transform: scale(1.05);
        }

        .mobile-menu-button:active {
          transform: scale(0.95);
        }

        .menu-icon-wrapper {
          position: relative;
          width: 28px;
          height: 28px;
        }

        .menu-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .menu-icon-close {
          transform: rotate(90deg);
        }

        .mobile-menu {
          position: absolute;
          top: calc(100% + 1rem);
          right: 0;
          width: 280px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(109, 40, 217, 0.95));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
          padding: 1.5rem;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .mobile-menu-open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .mobile-menu-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .menu-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          animation: float-particle 3s ease-in-out infinite;
        }

        .mobile-nav-list {
          position: relative;
          z-index: 1;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        .mobile-nav-item {
          opacity: 0;
          animation: slideInRight 0.4s ease-out forwards;
        }

        .mobile-menu-open .mobile-nav-item {
          animation: slideInRight 0.4s ease-out forwards;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .mobile-nav-link-active {
          background: rgba(236, 72, 153, 0.2);
          border-color: rgba(236, 72, 153, 0.4);
        }

        .mobile-nav-icon {
          font-size: 1.125rem;
          flex-shrink: 0;
        }

        .mobile-nav-text {
          flex: 1;
        }

        .mobile-nav-arrow {
          font-size: 1.25rem;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover .mobile-nav-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ========== Animations ========== */
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-8px) translateX(-8px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-20px) translateX(4px);
            opacity: 0.7;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ========== Responsive Adjustments ========== */
        @media (max-width: 768px) {
          .navbar-content {
            padding: 0 1rem;
          }

          .logo-image {
            width: 100px;
            height: 26px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            width: calc(100vw - 2rem);
            right: -1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;