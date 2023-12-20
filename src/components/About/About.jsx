import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return(
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>

    <div className={styles.content}>
        <img 
            src={getImageUrl("about/aboutImage.png")}
            alt = "Me sitting with a laptop"
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt= "Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I'm a frontend dev blah blah I love coding yey
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt= "Server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                    I can also do backend lol but i wanna be better
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt= "UI icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>
                        I wish I was a designer omg
                    </p>
                </div>
            </li>
        </ul>
    </div>
 </section>
  );
};
