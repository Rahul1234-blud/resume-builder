// src/pages/Toolkit.jsx

import "../App.css";

import {
  FaFileAlt,
  FaUserTie,
  FaLightbulb,
  FaRoad,
  FaSearchDollar,
  FaDownload,
} from "react-icons/fa";

function Toolkit() {

  return (

    <div className="toolkit-page">

      {/* HERO */}

      <div className="toolkit-hero">

        <h1>
          Career Toolkit
        </h1>

        <p>
          Everything you need to build
          a successful career.
        </p>

      </div>





      {/* TOOLKIT GRID */}

      <div className="toolkit-grid">





        {/* ATS CHECKER */}

        <div className="toolkit-card">

          <FaFileAlt className="toolkit-icon" />

          <h2>
            ATS Resume Checker
          </h2>

          <p>
            Check whether your resume
            is ATS-friendly and improve
            your chances of getting hired.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://resumeworded.com",
                "_blank"
              )
            }
          >
            Check Resume
          </button>

        </div>





        {/* INTERVIEW QUESTIONS */}

        <div className="toolkit-card">

          <FaUserTie className="toolkit-icon" />

          <h2>
            Interview Questions
          </h2>

          <p>
            Practice important interview
            questions for frontend,
            backend and HR rounds.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.geeksforgeeks.org/interview-corner-gq/",
                "_blank"
              )
            }
          >
            Start Practice
          </button>

        </div>





        {/* RESUME TIPS */}

        <div className="toolkit-card">

          <FaLightbulb className="toolkit-icon" />

          <h2>
            Resume Tips
          </h2>

          <p>
            Learn professional resume
            writing tips used by top
            companies.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://resume.io/blog/resume-tips",
                "_blank"
              )
            }
          >
            Learn More
          </button>

        </div>





        {/* ROADMAPS */}

        <div className="toolkit-card">

          <FaRoad className="toolkit-icon" />

          <h2>
            Career Roadmaps
          </h2>

          <p>
            Follow structured developer
            roadmaps to become job ready
            faster.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://roadmap.sh",
                "_blank"
              )
            }
          >
            Explore Roadmaps
          </button>

        </div>





        {/* SALARY */}

        <div className="toolkit-card">

          <FaSearchDollar className="toolkit-icon" />

          <h2>
            Salary Insights
          </h2>

          <p>
            Explore salary ranges for
            different tech roles and
            companies.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://www.glassdoor.co.in/Salaries/index.htm",
                "_blank"
              )
            }
          >
            View Salaries
          </button>

        </div>





        {/* FREE RESOURCES */}

        <div className="toolkit-card">

          <FaDownload className="toolkit-icon" />

          <h2>
            Free Resources
          </h2>

          <p>
            Download resume templates,
            cheat sheets and career PDFs.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://github.com/topics/resume-template",
                "_blank"
              )
            }
          >
            Download
          </button>

        </div>

      </div>

    </div>

  );
}

export default Toolkit;