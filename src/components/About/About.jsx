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
                    <p>
                        I'm currently a Computing Intern @ the Lawrence Livermore National Laboratory. 
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt= "Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <p>
                    I'm an aspiring Software/Data Engineer with experience in full stack development, computer vision, and AI/deep learning concepts. I am dedicated to leaving a lasting creative imprint through the realm of software development.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt= "UI icon"/>
                <div className={styles.aboutItemText}>
                    <p>
                        When I'm not coding, I enjoy dancing, reading about new scientific developments, and going on nature hikes.
                    </p>
                </div>
            </li>
        </ul>
    </div>
 </section>
  );
};
