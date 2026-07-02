import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBrain } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center text-gray-900">
            About Me
          </h2>

          <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto">
            I am a passionate Artificial Intelligence & Data Science student
            who enjoys building AI-powered applications, solving real-world
            problems and continuously learning new technologies.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center"
          >

            <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              Education
            </h3>

            <p className="text-gray-600 mt-4 leading-7">

              <strong>B.Tech</strong><br />

              Artificial Intelligence & Data Science

              <br /><br />

              SRM TRP Engineering College

              <br /><br />

              CGPA

              <span className="text-blue-600 font-bold">
                {" "}8.46
              </span>

              <br />

              (Up to 3rd Semester)

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center"
          >

            <FaLaptopCode className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              Experience
            </h3>

            <p className="text-gray-600 mt-4 leading-7">

              ✔ Phoenix Softech

              <br />

              Full Stack Web Development

              <br /><br />

              ✔ ElysiumPro

              <br />

              Machine Learning & Deep Learning

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-slate-50 rounded-3xl shadow-lg p-8 text-center"
          >

            <FaBrain className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold">
              Interests
            </h3>

            <p className="text-gray-600 mt-4 leading-7">

              Artificial Intelligence

              <br />

              Machine Learning

              <br />

              Deep Learning

              <br />

              Computer Vision

              <br />

              Full Stack Development

            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;