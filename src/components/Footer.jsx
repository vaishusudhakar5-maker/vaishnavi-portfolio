import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-14 pb-8 border-t border-slate-700 transition-colors duration-500">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl font-bold">
            Vaishnavi S.
          </h2>

          <p className="mt-3 text-gray-400 text-lg">
            AI & Data Science Student
          </p>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-7">
            Passionate about Artificial Intelligence,
            Machine Learning, Computer Vision,
            Data Science and Full Stack Development.
            Always eager to learn, innovate and build
            impactful solutions.
          </p>

          {/* Social Icons */}

          <div className="flex justify-center gap-8 mt-10">

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://github.com/vaishusudhakar5-maker"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-3xl text-gray-300 hover:text-blue-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="https://www.linkedin.com/in/vaishnavi-sudhakar-940b1b329"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-3xl text-gray-300 hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -5 }}
              href="mailto:vaishusudhakar5@gmail.com"
              aria-label="Email"
              className="text-3xl text-gray-300 hover:text-blue-500 transition"
            >
              <FaEnvelope />
            </motion.a>

          </div>

          {/* Divider */}

          <div className="border-t border-slate-700 my-10"></div>

          {/* Bottom */}

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Vaishnavi S. All Rights Reserved.
            </p>

            <p className="text-gray-500 text-sm text-center">
              Built with ❤️ using React, Tailwind CSS & Framer Motion
            </p>

            <motion.button
              whileHover={{
                scale: 1.15,
                y: -3,
              }}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition"
              aria-label="Back to Top"
            >
              <FaArrowUp />
            </motion.button>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;