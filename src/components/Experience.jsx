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
        "Worked on Machine Learning and Deep Learning models, data preprocessing and AI applications.",
    },
    {
      year: "2025",
      company: "Phoenix Softech",
      role: "Full Stack Web Development Intern",
      duration: "14 Jul 2025 - 28 Jul 2025",
      description:
        "Built responsive web applications and learned frontend-backend integration using modern web technologies.",
    },
  ];

  return (
    <section id="experience" className="py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-20">
          Internship Experience
        </h2>

        <div className="relative border-l-4 border-blue-600 ml-6">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
              className="mb-16 ml-10"
            >

              <div className="absolute -left-6 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white">
                <FaBriefcase />
              </div>

              <span className="text-blue-600 font-bold">
                {exp.year}
              </span>

              <h3 className="text-3xl font-bold mt-2">
                {exp.role}
              </h3>

              <p className="font-semibold text-gray-700">
                {exp.company}
              </p>

              <p className="text-gray-500 mt-2">
                {exp.duration}
              </p>

              <p className="text-gray-600 mt-5 leading-7">
                {exp.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;