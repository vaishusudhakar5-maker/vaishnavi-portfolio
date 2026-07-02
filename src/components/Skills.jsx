import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFastapi,
  SiOpencv,
  SiPostgresql,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <SiOpencv />,
      name: "OpenCV",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ];

  const technologies = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Power BI",
    "HTML",
    "CSS",
    "JavaScript",
    "Firebase",
    "REST API",
    "VS Code",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-100 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-5 mb-16 max-w-3xl mx-auto">
            Technologies and tools that I use to build intelligent,
            scalable and user-friendly applications.
          </p>
        </motion.div>

        {/* Skills */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-slate-700 transition-all duration-300"
            >

              <div className="text-6xl text-blue-600 mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

        {/* Other Technologies */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Other Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            {technologies.map((tech) => (

              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                className="px-6 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition cursor-default"
              >
                {tech}
              </motion.span>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;