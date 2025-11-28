import React from "react";
import { apple, google } from "../assets";
import gozy_image from "../assets/gozy_image.png";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} px-6 md:px-16 lg:px-24 xl:px-32`}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src={gozy_image}
          alt="Gozy illustration"
          className="w-full max-h-[420px] relative z-[5] object-contain"
        />
        <div className="absolute z-[3] -left-1/3 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/3 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Effortlessly manage <br className="sm:block hidden" /> your daily
          digital actions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Gozy brings clarity and simplicity to your everyday digital workflow.
          No more juggling multiple platforms — we keep essential interactions
          organized, connected, and effortless, so you can focus on what truly
          matters.”
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="app-store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google-play"
            className="w-[128px] h-[42px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
