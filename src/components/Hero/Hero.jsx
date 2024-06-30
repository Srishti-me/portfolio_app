import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello,<br />
           I'm Srishti</h1>
        <p className={styles.description}>
        Aspiring web developer, passionate about creating dynamic and user-friendly websites. Currently learning HTML, CSS, and JavaScript to bring innovative ideas to life. Eager to grow and contribute.
        </p>
        <a href="https://www.linkedin.com/in/srishti-yadav-223276267/" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
