import React, { useState } from "react";
import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState([
    {
      title: "Vidya Setu",
      desc: `Built a full-stack MERN eLearning platform featuring user registration, course purchases, and structured video lectures. Implemented secure JWT authentication with role-based access for students and admins. Integrated Razorpay for smooth course payments and created dedicated user/admin dashboards for progress tracking and content management. Added real-time group chat via Socket.io and used the Gemini API to power an AI assistant and auto-generate quizzes. Designed optimized RESTful APIs and MongoDB schemas for efficient handling of users, courses, lectures, and quizzes.`,
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "React Router",
        "Socket.io",
        "JWT",
        "MongoDB",
        "Mongoose",
        "JWT Authentication",
        "Multer",
      ],
      github: "https://github.com/amankrsingh207/vidyaSetu-frontend",
      highlight: true,
      editMode: false,
    },

    {
      title: "Win Predictor",
      desc: ` Developed a machine learning model to predict real-time win probability in IPL cricket matches using historical
 match data. Engineered feature inputs (runs, wickets, overs, target) and applied probabilistic modeling techniques to estimate
 match outcomes.`,
      tech: [
        "Python", "Pandas", "Scikit-learn", "Streamlit"
      ],
      github: "https://github.com/amankrsingh207/IPL-Win-predictor",
      highlight: true,
      editMode: false,
    },
    
  ]);

  const [devMode, setDevMode] = useState(false); // Only you can toggle edit mode
  const [devKey, setDevKey] = useState(""); // Your developer key

  // Check developer key
  const handleDevLogin = () => {
    if (devKey === "Aman") {
      // Change to your secret key
      setDevMode(true);
      setDevKey("");
    } else {
      alert("Invalid developer key!");
    }
  };

  // Toggle project edit mode
  const toggleEditMode = (index) => {
    const updated = [...projects];
    updated[index].editMode = !updated[index].editMode;
    setProjects(updated);
  };

  // Update project details
  const handleUpdateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  // Add a new project
  const addProject = () => {
    setProjects([
      ...projects,
      {
        title: "New Project",
        desc: "Describe your project here",
        tech: ["Tech1", "Tech2"],
        github: "#",
        highlight: false,
        editMode: true,
      },
    ]);
  };

  // Remove a project
  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">🚀 Personal Projects</h2>
      <p className="projects-subtitle">
        A collection of my projects demonstrating my skills in full-stack
        development.
      </p>

      {/* Developer login */}
      {!devMode && (
        <div className="dev-login">
          <input
            type="password"
            placeholder="Enter developer key..."
            value={devKey}
            onChange={(e) => setDevKey(e.target.value)}
          />
          <button onClick={handleDevLogin}>Unlock Admin</button>
        </div>
      )}

      <div className="projects-container">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`project-card ${p.highlight ? "highlight" : ""}`}
          >
            {/* Remove button visible only to dev */}
            {devMode && (
              <button className="remove-btn" onClick={() => removeProject(i)}>
                ✕
              </button>
            )}

            {p.editMode && devMode ? (
              <div className="add-project">
                <input
                  type="text"
                  value={p.title}
                  onChange={(e) =>
                    handleUpdateProject(i, "title", e.target.value)
                  }
                  placeholder="Project Title"
                />
                <textarea
                  value={p.desc}
                  onChange={(e) =>
                    handleUpdateProject(i, "desc", e.target.value)
                  }
                  placeholder="Project Description"
                  rows="4"
                />
                <input
                  type="text"
                  value={p.tech.join(", ")}
                  onChange={(e) =>
                    handleUpdateProject(
                      i,
                      "tech",
                      e.target.value.split(",").map((t) => t.trim())
                    )
                  }
                  placeholder="Technologies (comma separated)"
                />
                <input
                  type="text"
                  value={p.demo}
                  onChange={(e) =>
                    handleUpdateProject(i, "demo", e.target.value)
                  }
                  placeholder="Demo Link"
                />
                <input
                  type="text"
                  value={p.github}
                  onChange={(e) =>
                    handleUpdateProject(i, "github", e.target.value)
                  }
                  placeholder="GitHub Link"
                />
                <button
                  className="btn update"
                  onClick={() => toggleEditMode(i)}
                >
                  ✅ Update Project
                </button>
              </div>
            ) : (
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tech-stack">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="tech-item">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {/* <a href={p.demo} target="_blank" rel="noopener noreferrer">🔗 Live Demo</a> */}
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    💻 GitHub
                  </a>
                </div>
                {devMode && (
                  <div className="project-actions">
                    <button
                      className="btn update"
                      onClick={() => toggleEditMode(i)}
                    >
                      ✏️ Edit Project
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add new project button visible only to dev */}
      {devMode && (
        <div className="project-actions">
          <button className="btn add" onClick={addProject}>
            ➕ Add Project
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
