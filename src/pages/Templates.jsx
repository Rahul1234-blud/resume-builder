import "../App.css"
import { useNavigate } from "react-router-dom"

function Templates() {

  const navigate = useNavigate()

  return (

    <div className="template-page">

      <h1 className="page-title">
        Choose Your Resume Template
      </h1>



      <div className="template-grid">




        <div className="resume-box">

          <div className="resume-preview">

            <div className="preview-header"></div>

            <div className="preview-line short"></div>

            <div className="preview-line"></div>

            <div className="preview-line"></div>

            <div className="preview-section"></div>

            <div className="preview-line"></div>

            <div className="preview-line short"></div>

          </div>

          <h2>Modern Resume</h2>

          <button
            onClick={() => navigate("/builder/modern")}
          >
            Use Template
          </button>

        </div>







        <div className="resume-box">

          <div className="resume-preview">

            <div className="preview-header"></div>

            <div className="preview-section"></div>

            <div className="preview-line"></div>

            <div className="preview-line short"></div>

            <div className="preview-line"></div>

            <div className="preview-section"></div>

          </div>

          <h2>Professional Resume</h2>

          <button
            onClick={() => navigate("/builder/professional")}
          >
            Use Template
          </button>

        </div>








        <div className="resume-box">

          <div className="resume-preview">

            <div className="preview-line short"></div>

            <div className="preview-line"></div>

            <div className="preview-line"></div>

            <div className="preview-section"></div>

            <div className="preview-line short"></div>

            <div className="preview-line"></div>

          </div>

          <h2>Simple Resume</h2>

          <button
            onClick={() => navigate("/builder/simple")}
          >
            Use Template
          </button>

        </div>



      </div>

    </div>

  )
}

export default Templates