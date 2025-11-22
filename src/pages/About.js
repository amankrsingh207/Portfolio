import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-intro">
          Hi 👋, I'm <span className="highlight">Aman</span> — a passionate{" "}
          <strong>Full Stack Developer</strong> and
          <strong> B.Tech student at MNNIT Allahabad</strong>, driven by the
          goal of building clean, efficient, and impactful digital experiences.
        </p>

        <div className="about-content">
          {/* ABOUT TEXT */}
          <div className="about-text">
            <p>
              I enjoy crafting responsive and visually appealing user interfaces
              using
              <strong> React, JavaScript, and modern UI/UX principles</strong>.
              With a background in Computer Science and Engineering, I combine
              analytical thinking with creative problem-solving to build
              products that are both functional and user-friendly.
            </p>

            <p>
              I’ve built full-stack projects such as
              <strong> Vidya Setu MERN App</strong> and
              <strong> Win Predictor</strong>, where I worked on authentication,
              APIs, and UI development. I'm constantly learning and exploring
              technologies that enhance my capabilities as a developer.
            </p>

            <p>
              Outside of coding, I love mentoring juniors, contributing to tech
              events, and participating in hackathons. I aim to grow into a
              well-rounded developer who builds tools that simplify real-world
              problems.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="about-boxes">
            <div className="info-box">
              <h3>🎓 Education</h3>
              <p>
                B.Tech in <strong>Computer Science and Engineering</strong>
                <br /> <strong>MNNIT Allahabad (2022–2026)</strong>
                <br /> CGPA: 8.33
              </p>
            </div>

            <div className="info-box">
              <h3>💡 Technical Skills</h3>
              <p>
                C · C++ · Java · React · JavaScript · HTML · CSS · Node.js · SQL
                Express.js
                <br />
                MongoDB · Git · Responsive Design
              </p>
            </div>

            <div className="info-box">
              <h3>🚀 Projects</h3>
              <p>
                VidyaSetu MERN App ·
                <p>
                  </p> Win Predictor
                <br />
                Auth Systems · APIs · Real-Time Chat · Video Streaming
              </p>
            </div>

            <div className="info-box">
              <h3>🏅 Achievements</h3>
              <p>
                Top 3 in CodeSangam 2024
                
                
                <br /> Knight in LeetCode
              </p>
            </div>

            <div className="info-box">
              <h3>📌 Roles</h3>
              <p>
                 Mentor — Guided 50+ students, helped them navigate
                academics and high-stress scenarios effectively.
              </p>
            </div>

            <div className="info-box">
              <h3>🌟 Interests</h3>
              <p>
                Web Development · DSA ·
                <br /> Open Source · Problem Solving
                <br /> Artificial intelligence · Machine learning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
