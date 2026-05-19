import "../App.css"

import html2pdf from "html2pdf.js"

import { useState } from "react"



function Builder() {

  const [name, setName] = useState("Rahul fulara")

  const [email, setEmail] = useState("rahul@gmail.com")

  const [skills, setSkills] = useState("React, CSS, JavaScript")

  const [image, setImage] = useState(null)

  const [college, setCollege] = useState("DIT University")

  const [degree, setDegree] = useState("BCA")

  const [year, setYear] = useState("2026")

  const [company, setCompany] = useState("Google")

  const [role, setRole] = useState("Frontend Developer")

  const [experience, setExperience] = useState(
    "2 Years Experience in React Development"
  )

  const [projectTitle, setProjectTitle] = useState(
    "Resume Builder Website"
  )

  const [projectDesc, setProjectDesc] = useState(
    "Built a modern resume builder using React."
  )

  const [theme, setTheme] = useState("dark")

  const [template, setTemplate] = useState("modern")



  const downloadPDF = () => {

  const element = document.querySelector(
    ".resume-preview-box"
  )

  const options = {

    margin: 0.5,

    filename: `${name}_Resume.pdf`,

    image: {
      type: "jpeg",
      quality: 1
    },

    html2canvas: {
      scale: 2
    },

    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait"
    }

  }

  html2pdf()
    .set(options)
    .from(element)
    .save()

}



  const handleImage = (e) => {

    const file = e.target.files[0]

    if(file){
      setImage(URL.createObjectURL(file))
    }

  }



  const resetResume = () => {

    setName("")

    setEmail("")

    setSkills("")

    setImage(null)

    setCollege("")

    setDegree("")

    setYear("")

    setCompany("")

    setRole("")

    setExperience("")

    setProjectTitle("")

    setProjectDesc("")

  }



  return (

    <div className={`builder-page ${theme}`}>

      <div className="form-section">

        <h1>Resume Builder</h1>



        <button
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
        >
          Change Theme
        </button>



        <select
          value={template}
          onChange={(e) =>
            setTemplate(e.target.value)
          }
        >

          <option value="modern">
            Modern
          </option>

          <option value="professional">
            Professional
          </option>

          <option value="simple">
            Simple
          </option>

        </select>



        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />



        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />



        <textarea
          placeholder="Enter Skills"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
        ></textarea>



        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />



        <input
          type="text"
          placeholder="College Name"
          value={college}
          onChange={(e) =>
            setCollege(e.target.value)
          }
        />



        <input
          type="text"
          placeholder="Degree"
          value={degree}
          onChange={(e) =>
            setDegree(e.target.value)
          }
        />



        <input
          type="text"
          placeholder="Passing Year"
          value={year}
          onChange={(e) =>
            setYear(e.target.value)
          }
        />



        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
        />



        <input
          type="text"
          placeholder="Job Role"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        />



        <textarea
          placeholder="Experience Details"
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        ></textarea>



        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) =>
            setProjectTitle(e.target.value)
          }
        />



        <textarea
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) =>
            setProjectDesc(e.target.value)
          }
        ></textarea>



        <button onClick={downloadPDF}>
          Download PDF
        </button>



        <button onClick={resetResume}>
          Reset Resume
        </button>

      </div>





      <div className="preview-section">

        <div
          className={`resume-preview-box ${template}`}
        >

          {
            image && (

              <img
                src={image}
                alt="profile"
                className="profile-img"
              />

            )
          }



          <h1>{name}</h1>

          <p>{email}</p>



          {
            skills && (

              <>

                <h3>🛠 Skills</h3>

                <div className="skills-box">

                  {
                    skills.split(",").map(
                      (skill, index) => (

                        <span
                          className="skill-badge"
                          key={index}
                        >
                          {skill}
                        </span>

                      )
                    )
                  }

                </div>

              </>

            )
          }





          {
            (degree || college || year) && (

              <>

                <h3>🎓 Education</h3>

                {
                  degree &&
                  <p>{degree}</p>
                }

                {
                  college &&
                  <p>{college}</p>
                }

                {
                  year && (

                    <p>
                      Passing Year: {year}
                    </p>

                  )
                }

              </>

            )
          }





          {
            (role || company || experience) && (

              <>

                <h3>💼 Experience</h3>

                {
                  role &&
                  <p>{role}</p>
                }

                {
                  company &&
                  <p>{company}</p>
                }

                {
                  experience &&
                  <p>{experience}</p>
                }

              </>

            )
          }





          {
            (projectTitle || projectDesc) && (

              <>

                <h3>🚀 Projects</h3>

                {
                  projectTitle && (

                    <p>
                      <strong>
                        {projectTitle}
                      </strong>
                    </p>

                  )
                }

                {
                  projectDesc &&
                  <p>{projectDesc}</p>
                }

              </>

            )
          }

        </div>

      </div>

    </div>

  )
}

export default Builder