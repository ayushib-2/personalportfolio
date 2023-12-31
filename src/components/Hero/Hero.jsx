import React from 'react';
import {getImageUrl} from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayushi.</h1>
        <p className={styles.description}>
            I'm a 4th year Computer Science student @ UC Davis with a strong interest in Computer Vision, AI, and Cybersecurity.
        </p>
        <a href="mailto:aybhatnagar@ucdavis.edu" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroimg.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className= {styles.topBlur} />
        <div className= {styles.bottomBlur} />

  </section>
};
