import hero from "../assets/hero.png";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Emergency Blood Finder",
      image: hero,
      description:
        "AI-powered emergency blood donor matching system with real-time donor alerts and hospital dashboard.",
      technologies: ["Flutter", "FastAPI", "Python", "PostgreSQL"],
      github: "#",
    },

    {
      title: "Mental Health App",
      image: hero,
      description:
        "A mobile application that helps users monitor emotional well-being and practice self-care.",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "#",
    },

    {
      title: "Face Detection & Face Blurring",
      image: hero,
      description:
        "Detects faces in real time and automatically blurs them to protect user privacy.",
      technologies: ["Python", "OpenCV"],
      github: "#",
    },

    {
      title: "Full Stack Web Development",
      image: hero,
      description:
        "Responsive full stack web application built using modern frontend and backend technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Projects showcasing Artificial Intelligence,
          Machine Learning and Full Stack Development.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;