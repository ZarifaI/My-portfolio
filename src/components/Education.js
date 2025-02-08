import React from "react";
import styles from "../styles/Education.module.css"; 

export default function Education() {
  return (
    <div className={styles.educationContainer}>
      <h1 className={styles.heading}>Education</h1>
      <p className={styles.paragraph}>
        This is the education page where you can list your academic background.
      </p>
      <div className={styles.card}>
        <h2>Academic Background</h2>
        <p className={styles.paragraph}>
          I'm currently studying at Kalamazoo College, pursuing a degree in Computer Science and Mathematics.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.learnMore}>Learn More</button>
      </div>
      <div className={styles.wavyDivider}></div>
      <div className={styles.splineContainer}>
      </div>
    </div>
  );
}
