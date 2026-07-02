import profile from "../assets/profile.jpeg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white flex items-center pt-24">
      <div className="max-w-7xl mx-auto w-full px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-blue-600 text-xl font-semibold">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-3 text-gray-900">
              Vaishnavi S.
            </h1>

            <div className="mt-5">

              <h2 className="text-2xl md:text-3xl text-gray-600">
                AI & Data Science Student
              </h2>

              <TypeAnimation
                sequence={[
                  "Machine Learning Enthusiast",
                  2000,
                  "Computer Vision Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "AI Explorer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block text-blue-600 text-xl md:text-2xl font-semibold mt-4"
              />

            </div>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Passionate about Artificial Intelligence, Machine Learning,
              Computer Vision, Data Science, and Full Stack Development.
              I enjoy building intelligent applications that solve
              real-world problems.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="bg-blue-600 text-white px-7 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="border-2 border-blue-600 text-blue-600 px-7 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition"
              >
                Download Resume
              </a>

            </div>

            {/* Animated Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-md p-4"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp end={4} duration={3} />+
                </h2>
                <p className="text-gray-600">Projects</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-md p-4"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp end={2} duration={3} />
                </h2>
                <p className="text-gray-600">Internships</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-md p-4"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp end={6} duration={3} />+
                </h2>
                <p className="text-gray-600">Certificates</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white rounded-xl shadow-md p-4"
              >
                <h2 className="text-3xl font-bold text-blue-600">
                  <CountUp end={8.46} decimals={2} duration={3} />
                </h2>
                <p className="text-gray-600">CGPA</p>
              </motion.div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/vaishusudhakar5-maker"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-700 hover:text-blue-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vaishnavi-sudhakar-940b1b329"
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-gray-700 hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:vaishusudhakar5@gmail.com"
                className="text-3xl text-gray-700 hover:text-blue-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.img
              src={profile}
              alt="Vaishnavi"
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border-8 border-blue-600 shadow-[0_0_60px_rgba(37,99,235,0.35)]"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;