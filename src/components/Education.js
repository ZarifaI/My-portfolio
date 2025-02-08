import React from "react";
import styles from "../styles/Education.module.css";
import { FaGraduationCap, FaCalendarAlt, FaAward, FaPalette, FaBook } from "react-icons/fa"; 

export default function Education() {
  return (
    <div className={styles.educationContainer}>
      <h1 className={styles.heading}>
        <FaGraduationCap className={styles.icon} />
        <span className={styles.typingEffect}>Education</span>
      </h1>
      
      <p className={styles.paragraph}>
        My academic background and achievements in Computer Science and Mathematics.
      </p>

      <div className={styles.card}>
        <ul className={styles.list}>
          <li>
            <FaGraduationCap className={styles.listIcon} /> 
            <strong>Kalamazoo College</strong> - Bachelor of Science in <em>Computer Science & Mathematics</em>
          </li>
          <li>
            <FaCalendarAlt className={styles.listIcon} /> 
            Expected Graduation: 2026
          </li>
          <li>
            <FaAward className={styles.listIcon} /> 
            Merit-based scholarship: $44,000/year
          </li>
          <li>
            <FaPalette className={styles.listIcon} /> 
            Fine Arts scholarship: $5,000/year
          </li>
          <li>
            <FaBook className={styles.listIcon} /> 
            Relevant Coursework:
            <div className={styles.coursesList}>
              <span>Design & Analysis of Algorithms</span>
              <span>Discrete Math</span>
              <span>Web Development</span>
              <span>Machine Learning</span>
              <span>Principles of Programming Languages</span>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.learnMore}>Learn More</button>
      </div>

      <div className={styles.wavyDivider}></div>
      <div className={styles.splineContainer}></div>
    </div>
  );
}
