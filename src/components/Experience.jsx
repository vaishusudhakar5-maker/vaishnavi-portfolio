import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "2026",
      company: "ElysiumPro",
      role: "Machine Learning & Deep Learning Intern",
      duration: "03 Jul 2026 - 12 Jul 2026",
      description:
        "Worked on Machine Learning and Deep Learning models, data preprocessing, model training and AI applications. Gained hands-on experience with Python-based ML workflows and practical implementation of Deep Learning concepts.",
    },

    {
      year: "2025",
      company: "Phoenix Softech",
      role: "Full Stack Web Development Intern",
      duration: "14 Jul 2025 - 28 Jul 2025",
      description:
        "Developed responsive web applications and learned frontend-backend integration using modern web technologies. Improved skills in HTML, CSS, JavaScript and web application development.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-slate-100 dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Internship Experience
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-5 mb-20 max-w-3xl mx-auto">
            My internship journey where I gained practical experience in
            Artificial Intelligence, Machine Learning and Full Stack Web
            Development.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative border-l-4 border-blue-600 ml-5">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
              }}
              className="relative mb-16 ml-10"
            >

              {/* Timeline Icon */}

              <div className="absolute -left-[62px] w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                <FaBriefcase />
              </div>

              {/* Card */}

              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white dark:border-slate-700 shadow-xl p-8">

                <span className="text-blue-600 font-bold text-lg">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">
                  {exp.role}
                </h3>

                <p className="font-semibold text-gray-700 dark:text-gray-300 mt-1">
                  {exp.company}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {exp.duration}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-7 mt-5">
                  {exp.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;