import "../App.css"

function Contact() {

  return (

    <div className="contact-page">

      <div className="contact-box">

        <h1>Contact Us</h1>

        <p>
          Have questions? Send us a message.
        </p>


        <input
          type="text"
          placeholder="Enter Your Name"
        />


        <input
          type="email"
          placeholder="Enter Your Email"
        />


        <textarea
          placeholder="Enter Your Message"
        ></textarea>


        <button>
          Send Message
        </button>

      </div>

    </div>

  )
}

export default Contact