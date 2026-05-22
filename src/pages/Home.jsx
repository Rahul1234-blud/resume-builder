import "../App.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { FiSun, FiMoon } from "react-icons/fi";
import { TbTools } from "react-icons/tb";

function Home() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (

    <div className={darkMode ? "dark-theme" : "light-theme"}>

      {/* NAVBAR */}

      <nav className="navbar">

        <h1 className="logo">
          Resume Builder
        </h1>

        <div className="nav-links">

         

          <a href="/builder">
            Builder
          </a>
           <a href="/toolkit" className="toolkit-btn">
    <TbTools />
  </a>


          <a href="/contact">
            Contact
          </a>
          

          {/* THEME TOGGLE */}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >

            <div
              className={
                darkMode
                  ? "toggle-circle active"
                  : "toggle-circle"
              }
            >

              {darkMode ? <FiSun /> : <FiMoon />}

            </div>

          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

      <div className="container">

        <h1 className="title">
          Build Your{" "}
          <span>
            Professional Resume
          </span>
        </h1>

        <p className="subtitle">
          Create modern and ATS-friendly
          resumes easily.
        </p>

        <button
          className="btn"
          onClick={() =>
            navigate("/builder")
          }
        >
          Get Started
        </button>

      </div>

      {/* TEMPLATE SECTION */}

      <section className="templates">

        <h2 className="template-title">
          Resume Templates
        </h2>

        <div className="template-cards">

          <div className="card">

            <h3>Modern Resume</h3>

            <p>
              Clean and Modern
              template.
            </p>

            <button
              onClick={() =>
                navigate("/templates")
              }
            >
              Use Template
            </button>

          </div>

          <div className="card">

            <h3>Professional Resume</h3>

            <p>
              Professional design for
              corporate jobs.
            </p>

            <button
              onClick={() =>
                navigate("/templates")
              }
            >
              Use Template
            </button>

          </div>

          <div className="card">

            <h3>Simple Resume</h3>

            <p>
              Minimal ATS-friendly
              template.
            </p>

            <button
              onClick={() =>
                navigate("/templates")
              }
            >
              Use Template
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="features">

        <h2 className="feature-heading">
          Why Choose Resume?
        </h2>

        <div className="feature-boxes">

          <div className="feature-card">

            <h3>ATS Friendly</h3>

            <p>
              Create resumes that pass
              ATS systems easily.
            </p>

          </div>

          <div className="feature-card">

            <h3>Easy Editing</h3>

            <p>
              Edit your resume quickly
              with simple tools.
            </p>

          </div>

          <div className="feature-card">

            <h3>PDF Download</h3>

            <p>
              Download professional
              resumes instantly.
            </p>

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}

      <section className="team-section">

        <h2>
          Project Created By
        </h2>

        <div className="team-cards">

          <div className="team-card">
            <h3>Rahul Fulara</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="team-card">
            <h3>Rohit Singh Bora</h3>
            <p>UI Designer</p>
          </div>

          <div className="team-card">
            <h3>Pradeep Bhakuni</h3>
            <p>React Developer</p>
          </div>

          <div className="team-card">
            <h3>Manmohan Singh Chauhan</h3>
            <p>Project Manager</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <h2>
          Resume Builder
        </h2>

        <p>
          Build professional resumes
          easily with modern templates.
        </p>

        <div className="footer-links">

          <a href="/templates">
            Templates
          </a>

          <a href="/builder">
            Builder
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

        <p className="copyright">
          © 2026 Resume Builder.
          All rights reserved.
        </p>

      </footer>

    </div>

  );
}

export default Home;