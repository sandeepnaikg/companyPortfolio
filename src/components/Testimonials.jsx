// import React from "react";
// import { feedback } from "../constants";
// import styles from "../style";
// import Feedback from "./Feedback";

// const Testimonials = () => {
//   return (
//     <section
//       id="clients"
//       className={`${styles.paddingY} ${styles.flexce} flex-col relative px-6 md:px-16 lg:px-24 xl:px-32`}
//     >
//       <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
//       <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
//         <h2 className={styles.heading2}>
//           Gozy is the next step <br className="sm:block hidden" /> in digital
//           convenience.{" "}
//         </h2>
//         <div className="w-full md:mt-0 mt-6">
//           <p className={`${styles.paragraph} text-left max-w-[450px]`}>
//             Gozy is designed to change the way people manage their daily digital
//             life. As we grow, our goal is to deliver a smooth, unified, and
//             intelligent experience that users will love and businesses will
//             trust.
//           </p>
//           <div className="mt-6">
//             <button
//               type="button"
//               onClick={() => {
//                 window.history.pushState(null, "", "/invest-now");
//                 window.dispatchEvent(new PopStateEvent("popstate"));
//               }}
//               className="py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-[10px] font-poppins font-medium hover:opacity-90"
//             >
//               Know More
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
//         {feedback.map((card) => (
//           <Feedback key={card.id} {...card} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React, { useState, useEffect, useRef } from "react";
import { feedback, stats } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";
import { FiUsers, FiTrendingUp, FiGlobe } from "react-icons/fi";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef(null);

  /* Detect scroll & trigger animation */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  /* Animate counters like Stats.jsx */
  useEffect(() => {
    if (!isVisible) return;

    stats.forEach((stat, index) => {
      const target = parseInt(stat.value.replace(/[^0-9]/g, ""));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, duration / steps);
    });
  }, [isVisible]);

  const icons = [FiUsers, FiGlobe, FiTrendingUp];

  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-6 md:px-16 lg:px-24 xl:px-32`}
    >
      {/* Background decorative blob */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      {/* Heading */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Gozy is the next step <br className="sm:block hidden" />
          in digital convenience.
        </h2>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Gozy is designed to change the way people manage their daily digital
            life. As we grow, our goal is to deliver a smooth, unified, and
            intelligent experience that users will love and businesses will
            trust.
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => {
                window.history.pushState(null, "", "/invest-now");
                window.dispatchEvent(new PopStateEvent("popstate"));
              }}
              className="py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-[10px] font-poppins font-medium hover:opacity-90"
            >
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* NEW — Stats Style UI Block */}
      <div
        ref={statsRef}
        className="grid sm:grid-cols-3 grid-cols-1 gap-6 w-full mb-12 relative z-[2]"
      >
        {stats.map((s, i) => {
          const Icon = icons[i % icons.length];
          const suffix = s.value.replace(/[0-9]/g, "").trim();

          return (
            <div
              key={s.id}
              className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-purple-400/20 hover:border-purple-400/40 transition-all shadow-lg hover:shadow-purple-500/20"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-xl opacity-50 pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-600/20 border border-purple-500/40 text-purple-300 mb-4 text-3xl">
                <Icon />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-bold text-white">
                {isVisible ? counters[i] : 0}
                {suffix}
              </h3>

              {/* Title */}
              <p className="text-purple-200 uppercase tracking-wide text-sm mt-2">
                {s.title}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-[4px] mt-4 bg-purple-500/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-[grow_1.6s_ease-out_forwards]"
                  style={{ animationDelay: `${i * 0.25}s` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Testimonials Cards */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes grow {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
