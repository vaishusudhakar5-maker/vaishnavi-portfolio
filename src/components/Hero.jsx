import profile from "../assets/profile.jpeg";
import FloatingIcons from "./FloatingIcons";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  const stats = [
    { value: "4+", label: "Projects" },
    { value: "2", label: "Internships" },
    { value: "10+", label: "Certificates" },
    { value: "8.46", label: "CGPA" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24
      bg-gradient-to-br
      from-white
      via-sky-50
      to-blue-100
      dark:from-slate-950
      dark:via-slate-900
      dark:to-slate-800
      transition-colors duration-500"
    >
      <FloatingIcons />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-blue-600 text-xl font-semibold">
              👋 Hello, I'm
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Vaishnavi S.
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              AI & Data Science Student
            </h2>

            <span className="block mt-5 text-blue-600 text-xl md:text-2xl font-semibold">
              Machine Learning • Deep Learning • Full Stack Development
            </span>

            <p className="mt-8 max-w-xl leading-8 text-lg text-gray-600 dark:text-gray-300">
              Passionate about Artificial Intelligence, Machine Learning,
              Deep Learning, Computer Vision and Full Stack Development.
              I enjoy building intelligent applications that solve
              real-world problems.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-white hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300"
              >
                Resume Preview
              </a>

              <a
                href="/resume.pdf"
                download="Vaishnavi_S_Resume.pdf"
                className="px-8 py-4 rounded-xl bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600 hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white dark:border-slate-700 p-5 text-center"
                >

                  <h2 className="text-3xl font-bold text-blue-600">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {item.label}
                  </p>

                </motion.div>

              ))}

            </div>

            {/* Social Icons */}

            <div className="flex gap-8 mt-12">

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/vaishusudhakar5-maker"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-700 dark:text-white hover:text-blue-600 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/vaishnavi-sudhakar-940b1b329"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-700 dark:text-white hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="mailto:vaishusudhakar5@gmail.com"
                className="text-4xl text-gray-700 dark:text-white hover:text-blue-600 transition"
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <motion.img
              src={profile}
              alt="Vaishnavi"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              whileHover={{
                scale: 1.05,
              }}
              className="w-80 h-80 lg:w-[460px] lg:h-[460px] rounded-full object-cover border-8 border-blue-600 shadow-[0_0_90px_rgba(37,99,235,0.45)]"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;