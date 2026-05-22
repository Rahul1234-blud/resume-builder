import "../App.css"
import { useNavigate } from "react-router-dom"

function Templates() {

  const navigate = useNavigate()

  return (

    <div className="templates-page">

      <h1 className="templates-heading">
        Choose Your Resume Template
      </h1>





      <div className="templates-container">



        {/* TEMPLATE 1 */}

        <div className="template-card">

          <img
            src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=800&auto=format&fit=crop"
            alt=""
            className="template-image"
          />

          <h2>
            Modern Resume
          </h2>

          <p>
            Clean modern design for
            developers and students.
          </p>

          <button
            className="template-btn"
            onClick={() => navigate("/builder")}
          >
            Use Template
          </button>

        </div>





        {/* TEMPLATE 2 */}

        <div className="template-card">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
            alt=""
            className="template-image"
          />

          <h2>
            Professional Resume
          </h2>

          <p>
            Perfect template for office
            and corporate jobs.
          </p>

          <button
            className="template-btn"
            onClick={() => navigate("/builder")}
          >
            Use Template
          </button>

        </div>





        {/* TEMPLATE 3 */}

        <div className="template-card">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
            alt=""
            className="template-image"
          />

          <h2>
             Resume
          </h2>

          <p>
            Simple
            
          </p>

          <button
            className="template-btn"
            onClick={() => navigate("/builder")}
          >
            Use Template
          </button>

        </div>





      </div>

    </div>

  )
}

export default Templates