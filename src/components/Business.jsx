// // import React from "react";
// // import { features } from "../constants";
// // import styles, { layout } from "../style";
// // import Button from "./Button";
// // const FeatureCard = ({ icon, title, content, index }) => (
// //   <div
// //     className={`flex flex-row p-6 rounded-[20px] ${
// //       index !== features.length - 1 ? "mb-6" : "mb-0"
// //     } feature-card`}
// //   >
// //     <div
// //       className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
// //     >
// //       <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
// //     </div>
// //     <div className="flex-1 flex flex-col ml-3">
// //       <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
// //         {title}
// //       </h4>
// //       <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
// //         {content}
// //       </p>
// //     </div>
// //   </div>
// // );

// // const Business = () => {
// //   return (
// //     <section
// //       id="features"
// //       className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32`}
// //     >
// //       <div className={layout.sectionInfo}>
// //         <h2 className={styles.heading2}>
// //           You live your life, <br className="sm:block hidden" /> Gozy makes
// //           everything simpler.
// //         </h2>
// //         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
// //           **You live your life, we’ll simplify everything around it.** With
// //           Gozy, you no longer need to jump between multiple apps to get things
// //           done. We streamline your daily digital routine by bringing essential
// //           services into one smooth, connected ecosystem — fast, secure, and
// //           designed to make life effortless. Instead of managing dozens of
// //           platforms, tabs, and accounts, Gozy keeps everything organized,
// //           accessible, and beautifully simple.
// //         </p>
// //         <Button styles="mt-10" />
// //       </div>
// //       <div className={`${layout.sectionImg} flex-col`}>
// //         {features.map((feature, index) => (
// //           <FeatureCard key={feature.id} {...feature} index={index} />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Business;
// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaRocket,
//   FaChartBar,
//   FaLock,
//   FaBolt,
//   FaHeadphones,
//   FaGlobe,
// } from "react-icons/fa";
// import styles, { layout } from "../style";

// const FeatureCard = ({ icon, title, content, index, isVisible }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     if (!isVisible || !cardRef.current) return;

//     const card = cardRef.current;
//     card.style.opacity = "1";
//     card.style.transform = "translateY(0) rotateX(0)";
//   }, [isVisible]);

//   return (
//     <div
//       ref={cardRef}
//       className="feature-business-card group"
//       style={{
//         opacity: 0,
//         transform: "translateY(40px) rotateX(20deg)",
//         transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
//           index * 0.1
//         }s`,
//       }}
//     >
//       <div className="feature-card-inner">
//         <div className="feature-icon-glow">{icon}</div>
//         <h4 className="feature-title-business">{title}</h4>
//         <p className="feature-content-business">{content}</p>
//         <div className="feature-line-accent" />
//       </div>
//     </div>
//   );
// };

// const Business = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const features = [
//     {
//       icon: <FaRocket className="feature-biz-icon" />,
//       title: "Super Fast Setup",
//       content:
//         "Get started in minutes, no complex configurations required. Instant activation.",
//     },
//     {
//       icon: <FaChartBar className="feature-biz-icon" />,
//       title: "Real-Time Analytics",
//       content:
//         "Track everything happening across your digital workspace with live insights.",
//     },
//     {
//       icon: <FaLock className="feature-biz-icon" />,
//       title: "Enterprise Security",
//       content:
//         "Military-grade encryption protects every interaction and transaction.",
//     },
//     {
//       icon: <FaBolt className="feature-biz-icon" />,
//       title: "Lightning Performance",
//       content:
//         "Optimized infrastructure delivers millisecond response times consistently.",
//     },
//     {
//       icon: <FaHeadphones className="feature-biz-icon" />,
//       title: "24/7 Support",
//       content:
//         "Expert support team ready to help anytime, anywhere, any question.",
//     },
//     {
//       icon: <FaGlobe className="feature-biz-icon" />,
//       title: "Global Reach",
//       content: "Available worldwide with local support in over 150 countries.",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="features"
//       className="relative py-16 md:py-24 text-white overflow-hidden"
//       style={{
//         background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
//       }}
//     >
//       <div
//         className="gradient-orb"
//         style={{
//           left: `${mousePos.x}%`,
//           top: `${mousePos.y}%`,
//         }}
//       />

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="grid-bg" />
//       </div>

//       <div
//         className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32 relative z-10`}
//       >
//         <div className={layout.sectionInfo}>
//           <h2
//             ref={titleRef}
//             className={`${styles.heading2} feature-heading`}
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateX(0)" : "translateX(-50px)",
//               transition: "all 0.8s ease-out",
//             }}
//           >
//             You live your life, <br className="sm:block hidden" /> Gozy makes
//             everything simpler.
//           </h2>

//           <p
//             ref={descRef}
//             className={`${styles.paragraph} max-w-[470px] mt-5 feature-description`}
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateX(0)" : "translateX(-50px)",
//               transition: "all 0.8s ease-out 0.2s",
//             }}
//           >
//             You live your life, we'll simplify everything around it. With Gozy,
//             you no longer need to jump between multiple apps to get things done.
//             We streamline your daily digital routine by bringing essential
//             services into one smooth, connected ecosystem.
//           </p>

//           <div
//             className="cta-button-group"
//             style={{
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible ? "translateY(0)" : "translateY(20px)",
//               transition: "all 0.8s ease-out 0.4s",
//             }}
//           >
//             <button className="btn-primary-business">Get Started</button>
//             <button className="btn-secondary-business">Learn More</button>
//           </div>
//         </div>

//         <div className={`${layout.sectionImg} flex-col`}>
//           <div className="features-showcase">
//             {features.slice(0, 3).map((feature, index) => (
//               <FeatureCard
//                 key={index}
//                 {...feature}
//                 index={index}
//                 isVisible={isVisible}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mt-16 relative z-10">
//         <div className="features-grid">
//           {features.slice(3).map((feature, index) => (
//             <FeatureCard
//               key={index + 3}
//               {...feature}
//               index={index + 3}
//               isVisible={isVisible}
//             />
//           ))}
//         </div>
//       </div>

//       <style>{`
//         /* Gradient orb cursor */
//         .gradient-orb {
//           position: fixed;
//           width: 250px;
//           height: 250px;
//           border-radius: 50%;
//           background: radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent 70%);
//           pointer-events: none;
//           filter: blur(50px);
//           z-index: 1;
//           transform: translate(-50%, -50%);
//           transition: left 0.2s ease-out, top 0.2s ease-out;
//         }

//         /* Grid background */
//         .grid-bg {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-image:
//             linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
//           background-size: 50px 50px;
//           opacity: 0.3;
//         }

//         /* Feature heading animation */
//         .feature-heading {
//           font-size: 2.5rem;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ffffff 0%, #a78bfa 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .feature-description {
//           color: #d1d5db;
//           line-height: 1.8;
//           font-size: 1.05rem;
//         }

//         /* CTA Buttons */
//         .cta-button-group {
//           display: flex;
//           gap: 16px;
//           flex-wrap: wrap;
//           margin-top: 32px;
//         }

//         .btn-primary-business {
//           padding: 14px 32px;
//           background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
//           color: white;
//           border: none;
//           border-radius: 12px;
//           font-weight: 600;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
//           position: relative;
//           overflow: hidden;
//         }

//         .btn-primary-business:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 32px rgba(59, 130, 246, 0.5);
//         }

//         .btn-primary-business:active {
//           transform: translateY(0);
//         }

//         .btn-secondary-business {
//           padding: 14px 32px;
//           background: transparent;
//           color: #3b82f6;
//           border: 2px solid #3b82f6;
//           border-radius: 12px;
//           font-weight: 600;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .btn-secondary-business:hover {
//           background: rgba(59, 130, 246, 0.1);
//           border-color: #60a5fa;
//         }

//         /* Features showcase */
//         .features-showcase {
//           display: flex;
//           flex-direction: column;
//           gap: 20px;
//         }

//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 20px;
//         }

//         /* Feature card */
//         .feature-business-card {
//           perspective: 1000px;
//         }

//         .feature-card-inner {
//           background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
//           border: 1px solid rgba(255, 255, 255, 0.12);
//           padding: 28px 24px;
//           border-radius: 16px;
//           backdrop-filter: blur(10px);
//           cursor: pointer;
//           transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           min-height: 220px;
//         }

//         .feature-card-inner::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1), transparent 50%);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .feature-business-card:hover .feature-card-inner {
//           transform: translateY(-8px) scale(1.02);
//           border-color: rgba(59, 130, 246, 0.4);
//           box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
//           background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%);
//         }

//         .feature-business-card:hover .feature-card-inner::before {
//           opacity: 1;
//         }

//         /* Icon glow effect */
//         .feature-icon-glow {
//           position: relative;
//           width: fit-content;
//           margin-bottom: 16px;
//         }

//         .feature-biz-icon {
//           font-size: 40px;
//           color: #3b82f6;
//           filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.4));
//           transition: all 0.3s ease;
//         }

//         .feature-business-card:hover .feature-biz-icon {
//           color: #60a5fa;
//           transform: scale(1.1) rotate(5deg);
//           filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.6));
//         }

//         /* Feature title */
//         .feature-title-business {
//           font-size: 1.25rem;
//           font-weight: 700;
//           color: #ffffff;
//           margin-bottom: 8px;
//           letter-spacing: -0.5px;
//         }

//         /* Feature content */
//         .feature-content-business {
//           font-size: 0.95rem;
//           color: #d1d5db;
//           line-height: 1.6;
//           flex-grow: 1;
//         }

//         /* Line accent */
//         .feature-line-accent {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 2px;
//           width: 0;
//           background: linear-gradient(90deg, #3b82f6 0%, transparent 100%);
//           transition: width 0.4s ease;
//         }

//         .feature-business-card:hover .feature-line-accent {
//           width: 100%;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .feature-heading {
//             font-size: 2rem;
//           }

//           .cta-button-group {
//             flex-direction: column;
//           }

//           .btn-primary-business,
//           .btn-secondary-business {
//             width: 100%;
//           }

//           .features-grid {
//             grid-template-columns: 1fr;
//           }
//         }

//         /* Loading state */
//         @keyframes shimmer {
//           0%, 100% { opacity: 0.6; }
//           50% { opacity: 1; }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Business;
import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaChartBar,
  FaLock,
  FaBolt,
  FaHeadphones,
  FaGlobe,
} from "react-icons/fa";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index, isVisible }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !cardRef.current) return;

    const card = cardRef.current;
    card.style.opacity = "1";
    card.style.transform = "translateY(0) rotateX(0)";
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className="feature-business-card group"
      style={{
        opacity: 0,
        transform: "translateY(40px) rotateX(20deg)",
        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${
          index * 0.1
        }s`,
      }}
    >
      <div className="feature-card-inner">
        <div className="feature-icon-glow">{icon}</div>
        <h4 className="feature-title-business">{title}</h4>
        <p className="feature-content-business">{content}</p>
        <div className="feature-line-accent" />
      </div>
    </div>
  );
};

const Business = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const features = [
    {
      icon: <FaRocket className="feature-biz-icon" />,
      title: "Super Fast Setup",
      content:
        "Get started in minutes, no complex configurations required. Instant activation.",
    },
    {
      icon: <FaChartBar className="feature-biz-icon" />,
      title: "Real-Time Analytics",
      content:
        "Track everything happening across your digital workspace with live insights.",
    },
    {
      icon: <FaLock className="feature-biz-icon" />,
      title: "Enterprise Security",
      content:
        "Military-grade encryption protects every interaction and transaction.",
    },
    {
      icon: <FaBolt className="feature-biz-icon" />,
      title: "Lightning Performance",
      content:
        "Optimized infrastructure delivers millisecond response times consistently.",
    },
    {
      icon: <FaHeadphones className="feature-biz-icon" />,
      title: "24/7 Support",
      content:
        "Expert support team ready to help anytime, anywhere, any question.",
    },
    {
      icon: <FaGlobe className="feature-biz-icon" />,
      title: "Global Reach",
      content: "Available worldwide with local support in over 150 countries.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-16 md:py-24 text-white overflow-hidden"
      style={{ background: "rgb(26,19,51)" }}
    >
      {/* Mouse glow effect - same as Billing */}
      <div
        className="mouse-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Floating gradient blobs - same as Billing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob1" />
        <div className="blob2" />
        <div className="blob3" />
      </div>

      <div
        className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32 relative z-10`}
      >
        <div className={layout.sectionInfo}>
          <h2
            ref={titleRef}
            className={`${styles.heading2} feature-heading`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 0.8s ease-out",
            }}
          >
            You live your life, <br className="sm:block hidden" /> Gozy makes
            everything simpler.
          </h2>

          <p
            ref={descRef}
            className={`${styles.paragraph} max-w-[470px] mt-5 feature-description`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            You live your life, we'll simplify everything around it. With Gozy,
            you no longer need to jump between multiple apps to get things done.
            We streamline your daily digital routine by bringing essential
            services into one smooth, connected ecosystem.
          </p>

          <div
            className="cta-button-group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.4s",
            }}
          >
            <button className="btn-primary-business">Get Started</button>
            <button className="btn-secondary-business">Learn More</button>
          </div>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          <div className="features-showcase">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mt-16 relative z-10">
        <div className="features-grid">
          {features.slice(3).map((feature, index) => (
            <FeatureCard
              key={index + 3}
              {...feature}
              index={index + 3}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* Mouse glow - Same as Billing */
        .mouse-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(147,51,234,.2), transparent 70%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          filter: blur(60px);
          z-index: 1;
          transition: left 0.15s ease, top 0.15s ease;
        }

        /* Floating gradient blobs - Same as Billing */
        .blob1 {
          position: absolute;
          top: 15%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: rgba(147, 51, 234, 0.25);
          filter: blur(120px);
          animation: float 8s infinite ease-in-out;
        }
        .blob2 {
          position: absolute;
          bottom: 15%;
          right: 8%;
          width: 450px;
          height: 450px;
          background: rgba(59, 130, 246, 0.25);
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

        /* Feature heading animation */
        .feature-heading {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feature-description {
          color: #d3cae8;
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* CTA Buttons */
        .cta-button-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .btn-primary-business {
          padding: 14px 32px;
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
          position: relative;
          overflow: hidden;
        }

        .btn-primary-business:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.5);
        }

        .btn-primary-business:active {
          transform: translateY(0);
        }

        .btn-secondary-business {
          padding: 14px 32px;
          background: transparent;
          color: #a78bfa;
          border: 2px solid #a78bfa;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary-business:hover {
          background: rgba(167, 139, 250, 0.1);
          border-color: #c4b5fd;
        }

        /* Features showcase */
        .features-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        /* Feature card */
        .feature-business-card {
          perspective: 1000px;
        }

        .feature-card-inner {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 28px 24px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 220px;
        }

        .feature-card-inner::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1), transparent 50%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-business-card:hover .feature-card-inner {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(147, 51, 234, 0.5);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.25);
          background: rgba(255, 255, 255, 0.08);
        }

        .feature-business-card:hover .feature-card-inner::before {
          opacity: 1;
        }

        /* Icon glow effect */
        .feature-icon-glow {
          position: relative;
          width: fit-content;
          margin-bottom: 16px;
        }

        .feature-biz-icon {
          font-size: 48px;
          color: #c084fc;
          filter: drop-shadow(0 0 8px rgba(192, 132, 252, 0.4));
          transition: all 0.3s ease;
          animation: float 3s infinite ease-in-out;
        }

        .feature-business-card:nth-child(2) .feature-biz-icon {
          animation-delay: 0.5s;
        }

        .feature-business-card:nth-child(3) .feature-biz-icon {
          animation-delay: 1s;
        }

        .feature-business-card:hover .feature-biz-icon {
          color: #e9d5ff;
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 0 16px rgba(192, 132, 252, 0.6));
        }

        /* Feature title */
        .feature-title-business {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        /* Feature content */
        .feature-content-business {
          font-size: 0.95rem;
          color: #d3cae8;
          line-height: 1.6;
          flex-grow: 1;
        }

        /* Line accent */
        .feature-line-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #c084fc 0%, transparent 100%);
          transition: width 0.4s ease;
        }

        .feature-business-card:hover .feature-line-accent {
          width: 100%;
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

        /* Responsive */
        @media (max-width: 768px) {
          .feature-heading {
            font-size: 2rem;
          }

          .cta-button-group {
            flex-direction: column;
          }

          .btn-primary-business,
          .btn-secondary-business {
            width: 100%;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Business;
