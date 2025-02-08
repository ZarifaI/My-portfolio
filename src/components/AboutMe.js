import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AboutMe.module.css";
import Spline from "@splinetool/react-spline";

export default function AboutMe() {
  const [typedHeading, setTypedHeading] = useState(""); // State for typed "About Me"
  const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
  const navigate = useNavigate();

  const heading = "Abbout Me"; // Static heading text
  const content =
    "Hello! I'm Zarifa Ibrahimzada, a passionate Computer Science and Mathematics student at Kalamazoo College. My love for technology drives me to create meaningful and impactful projects, whether it's web development, mobile apps, or solving complex problems. Outside of coding, I enjoy drawing portraits, hiking in nature, and exploring new languages. As a woman from Azerbaijan, I aim to challenge stereotypes and inspire others from underrepresented backgrounds to pursue their dreams in tech. Let's connect and build something extraordinary together!";

  useEffect(() => {
    let index = 0;

    // Typing effect for the heading (Only applies to the heading text)
    const interval = setInterval(() => {
      if (index < heading.length) {
        setTypedHeading((prev) => prev + (heading[index] || ""));
        index += 1;
      } else {
        clearInterval(interval); // Stop once the full text is typed
        setShowCursor(false); // Hide the cursor after typing is complete
      }
    }, 100); // Adjust typing speed for the heading

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [heading]);

  return (
    <div className={styles.aboutContainer}>
      {/* Typing effect for the "About Me" heading */}
      <h1 className={styles.heading}>
        {typedHeading} {/* Typing effect will apply to this */}
        {showCursor && <span className={styles.cursor} />} {/* Conditionally render the cursor */}
      </h1>
      
      <div className={styles.contentContainer}>
        {/* Left side: Text Content */}
        <div className={styles.textContent}>
          <p className={styles.paragraph}>{content}</p>
          <div className={styles.buttonContainer}>
            {/* Learn More button */}
            <button className={styles.learnMore} onClick={() => navigate("/education")}>
              Education
            </button>
          </div>

          <div className={styles.navButtons}>
            {/* Back and Forward Navigation buttons */}
            <button className={styles.navButton} onClick={() => navigate(-1)}>
              &larr; Back
            </button>
            <button className={styles.navButton} onClick={() => navigate("/education")}>
  Forward &rarr;
</button>
          </div>
        </div>

        {/* Right side: Spline 3D Model */}
        <div className={styles.splineContainer}>
          <Spline
        scene="https://prod.spline.design/6AUbPVlto8uGckqL/scene.splinecode" 
        style={{ width: "100%", height: "500px" }} />
        </div>
      </div>
    </div>
  );
}
