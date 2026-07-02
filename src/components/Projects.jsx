import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Emergency Blood Finder",
      image: hero,
      description:
        "AI-powered emergency blood donor matching platform with real-time alerts, intelligent donor search, hospital dashboard and emergency request management.",
      technologies: ["Flutter", "FastAPI", "Python", "PostgreSQL"],
      github: "https://github.com/vaishusudhakar5-maker",
      live: "#",
      featured: true,
    },

    {
      title: "Mental Health App",
      image: hero,
      description:
        "Flutter application for mood tracking, emotional wellness, daily self-care reminders and mental health monitoring.",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/vaishusudhakar5-maker",
      live: "#",
    },

    {
      title: "Face Detection & Face Blur",
      image: hero,
      description:
        "Computer Vision project using OpenCV that detects faces in real time and automatically blurs them to protect user privacy.",
      technologies: ["Python", "OpenCV"],
      github: "https://github.com/vaishusudhakar5-maker",
      live: "#",
    },

    {
      title: "Full Stack Web Development",
      image: hero,
      description:
        "Responsive web application built using modern frontend and backend technologies with clean UI and scalable architecture.",
      technologies: ["HTML", "CSS", "JavaScript", "Python"],
      github: "https://github.com/vaishusudhakar5-maker",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Featured Projects
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-5 mb-16 max-w-3xl mx-auto">
            Projects showcasing my skills in Artificial Intelligence,
            Machine Learning, Computer Vision and Full Stack Development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-white dark:bg-slate-800 shadow-xl border border-gray-100 dark:border-slate-700"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                {project.featured && (
                  <span className="inline-block mb-5 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Featured Project
                  </span>
                )}

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-7 mt-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex flex-wrap gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="flex items-center gap-2 bg-gray-900 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 transition ${
                      project.live === "#"
                        ? "border-gray-300 text-gray-400 cursor-not-allowed pointer-events-none"
                        : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <FaExternalLinkAlt />
                    Live Demo
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