import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <p className="text-lg text-gray-600 mb-10">
          Feel free to connect with me for internships,
          collaborations, hackathons, or AI projects.
        </p>

        <div className="space-y-5 text-lg">

          <p>
            <FaEnvelope className="inline text-blue-600 mr-3" />
            vaishusudhakar5@gmail.com
          </p>

          <p>
            <FaPhone className="inline text-blue-600 mr-3" />
            8778313490
          </p>

          <p>
            <FaGithub className="inline text-blue-600 mr-3" />
            github.com/vaishusudhakar5
          </p>

          <p>
            <FaLinkedin className="inline text-blue-600 mr-3" />
            linkedin.com/in/vaishnavi-sudhakar-940b1b329
          </p>

        </div>

      </div>
    </section>
  );
}

export default Contact;