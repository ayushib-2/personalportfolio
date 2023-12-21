import React from 'react';
import {getImageUrl} from "../../utils";
import styles from "./ProjectCard.module.css";

// ... (previous imports and code)

export const ProjectCard = ({
    project: { title, imageSrc, description, skills, code, report }
}) => {
    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                <a
                    href={code}
                    target="_blank"  // Open the link in a new tab
                    rel="noopener noreferrer"  // Recommended for security reasons
                    className={code ? styles.link : styles.hidden}
                >
                    Code
                </a>
                <a
                    href={report}
                    target="_blank"  // Open the link in a new tab
                    rel="noopener noreferrer"  // Recommended for security reasons
                    className={report ? styles.link : styles.hidden}
                >
                    Report
                </a>
            </div>
        </div>
    );
};

