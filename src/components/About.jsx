import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaBrain } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-5 max-w-3xl mx-auto leading-8">
            Passionate Artificial Intelligence & Data Science student with a
            strong interest in Machine Learning, Deep Learning, Computer Vision,
            Data Science and Full Stack Development. I enjoy building
            intelligent applications that solve real-world problems.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Education */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-slate-700 rounded-3xl shadow-xl p-8 text-center transition-all duration-300"
          >

            <FaGraduationCap className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-5">

              <strong>B.Tech</strong>

              <br />

              Artificial Intelligence & Data Science

              <br /><br />

              SRM TRP Engineering College

              <br /><br />

              CGPA

              <span className="font-bold text-blue-600">
                {" "}8.46
              </span>

              <br />

              (Up to 3rd Semester)

            </p>

          </motion.div>

          {/* Experience */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-slate-700 rounded-3xl shadow-xl p-8 text-center transition-all duration-300"
          >

            <FaLaptopCode className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experience
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-5">

              ✔ Phoenix Softech

              <br />

              Full Stack Web Development

              <br /><br />

              ✔ ElysiumPro

              <br />

              Machine Learning & Deep Learning

            </p>

          </motion.div>

          {/* Interests */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="bg-white/70 dark:bg-slate-800/80 backdrop-blur-xl border border-white dark:border-slate-700 rounded-3xl shadow-xl p-8 text-center transition-all duration-300"
          >

            <FaBrain className="text-5xl text-blue-600 mx-auto mb-6" />

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Interests
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mt-5">

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