import React from "react";
import gozy3_image from "../assets/gozy3_image.png";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={`${layout.section} px-6 md:px-16 lg:px-24 xl:px-32`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Make better decisions <br className="sm:block hidden" />
          with a single tap .
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Gozy helps you navigate your digital needs with clarity and ease. Our
          unified platform guides you through simple, effortless steps — letting
          you find the best options without complexity or confusion.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img
          src={gozy3_image}
          alt="Gozy illustration"
          className="w-full max-h-[360px] object-contain ml-[-12px] md:ml-0"
        />
      </div>
    </section>
  );
};

export default CardDeal;
