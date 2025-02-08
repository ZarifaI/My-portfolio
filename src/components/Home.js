import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import "../styles/Home.css";

export default function Home() {
  const fullText = "Zaarifa Ibrahimzada"; // Full text to write
  const [writtenText, setWrittenText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setWrittenText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, Math.random() * (250 - 100) + 100); // Random delay for natural writing effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      {/* Centered Animated Text */}
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to My 3D Portfolio
        </motion.h1>

        {/* Handwriting effect for the name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="handwriting-text"
        >
          {writtenText}
        </motion.p>

        {/* Button to About Me */}
        <Link to="/about">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
            className="learn-more"
          >
            About Me
          </motion.button>
        </Link>
      </div>

      {/* Centered Spline Object */}
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/la-AIMEjvEsdUdF4/scene.splinecode" />
      </div>
    </div>
  );
}
