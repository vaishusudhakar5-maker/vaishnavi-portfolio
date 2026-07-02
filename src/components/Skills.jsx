import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
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
      level: "90%",
      width: "90%",
    },
    {
      icon: <FaJava />,
      name: "Java",
      level: "80%",
      width: "80%",
    },
    {
      icon: <FaDatabase />,
      name: "SQL",
      level: "85%",
      width: "85%",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
      level: "85%",
      width: "85%",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
      level: "80%",
      width: "80%",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      level: "75%",
      width: "75%",
    },
    {
      icon: <SiOpencv />,
      name: "OpenCV",
      level: "85%",
      width: "85%",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      level: "75%",
      width: "75%",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center">
            Technical Skills
          </h2>

          <p className="text-center text-gray-600 mt-4 mb-16">
            Technologies and tools that I use to build
            intelligent and scalable applications.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">

                  <div className="text-3xl text-blue-600">
                    {skill.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>

                </div>

                <span className="font-bold text-blue-600">
                  {skill.level}
                </span>

              </div>

              <div className="mt-5 bg-gray-200 rounded-full h-3">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.width }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="bg-blue-600 h-3 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-20">

          <h3 className="text-3xl font-bold text-center mb-10">
            Other Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            {[
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
            ].map((tech) => (

              <motion.span
                whileHover={{
                  scale: 1.1,
                }}
                key={tech}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md"
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