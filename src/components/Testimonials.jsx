import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexce} flex-col relative px-6 md:px-16 lg:px-24 xl:px-32`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Gozy is the next step <br className="sm:block hidden" /> in digital
          convenience.{" "}
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
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
