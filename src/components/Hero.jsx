// import styles from "../style";
// import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className={`flex md:flex-row flex-col ${styles.paddingY} px-6 md:px-16 lg:px-24 xl:px-32`}
//     >
//       <div
//         className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
//       >
//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             All Your <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Daily Needs</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0 items-center">
//             <GetStarted />
//           </div>
//         </div>
//         <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
//           In One App
//         </h1>
//         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//           At Gozy, our team follows a clear, user-centric approach to understand
//           what people truly need in their everyday digital life. Instead of
//           making users depend on multiple scattered platforms, we study how
//           individuals manage their daily tasks, interact with online services,
//           and navigate digital spaces — and we bring all essential experiences
//           together into one smooth, unified ecosystem.
//         </p>
//       </div>
//       <div
//         className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
//         style={{ marginRight: "32px" }}
//       >
//         <img
//           src={robot}
//           alt="billing"
//           className="w-[100%] h-[100%] relative z-[5]"
//         />
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//       </div>
//       <div className={`ss:hidden ${styles.flexCenter} gap-4`}>
//         <GetStarted />
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import GozyGalaxyBackground from "../components/GozyGalaxyBackground"; // ⭐ ADD THIS

const Hero = () => {
  return (
    <section
      id="home"
      className={`relative flex md:flex-row flex-col ${styles.paddingY} px-6 md:px-16 lg:px-24 xl:px-32`}
    >
      {/* ⭐ GALAXY BACKGROUND */}
      <GozyGalaxyBackground />

      {/* LEFT CONTENT */}
      <div
        className={`relative z-10 flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            All Your <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Daily Needs</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0 items-center">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          In One App
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At Gozy, our team follows a clear, user-centric approach to understand
          what people truly need in their everyday digital life. Instead of
          making users depend on multiple scattered platforms, we study how
          individuals manage their daily tasks, interact with online services,
          and navigate digital spaces — and we bring all essential experiences
          together into one smooth, unified ecosystem.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className={`relative z-10 flex-1 flex ${styles.flexCenter} md:my-0 my-10`}
        style={{ marginRight: "32px" }}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Your original gradients – untouched */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      {/* MOBILE GET STARTED */}
      <div className={`relative z-10 ss:hidden ${styles.flexCenter} gap-4`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
