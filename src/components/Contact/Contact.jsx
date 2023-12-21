import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>    
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                <a href="mailto:ayushibhatnagar242@gmail.com">ayushibhatnagar242@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
                <a href="https://www.linkedin.com/in/ayushi-bhatnagar-1064911b8/">linkedin.com/ayushi-bhatnagar-1064911b8</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon"/>
                <a href="https://github.com/ayushib-2">github.com/ayushib-2</a>
            </li>

        </ul>
    </footer>
  )
};
