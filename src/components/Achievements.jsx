import { motion } from "framer-motion";
import {
  FaMedal,
  FaTrophy,
  FaAward,
  FaLaptopCode,
} from "react-icons/fa";

function Achievements() {

  const achievements = [

    {
      icon: <FaMedal />,
      title: "2nd Prize",
      subtitle: "Women Innovators Conclave 2026",
      description:
        "Secured Second Place in the Knowledge Exchange Forum organized by the Women Empowerment Cell, SRM TRP Engineering College.",
      color: "text-yellow-500",
    },

    {
      icon: <FaTrophy />,
      title: "3rd Prize",
      subtitle: "Think Like Eleven",
      description:
        "Won Third Prize in the Data Visualization Quiz & Model Competition at TECHUTSAV'26, Thiagarajar College of Engineering.",
      color: "text-orange-500",
    },

    {
      icon: <FaAward />,
      title: "Certificate of Merit",
      subtitle: "COGNIZANCE 1.0",
      description:
        "Received Certificate of Merit during the Intra College Technical Fest conducted by the Department of CSE, SRM TRP Engineering College.",
      color: "text-blue-600",
    },

    {
      icon: <FaLaptopCode />,
      title: "Hackathon Participant",
      subtitle: "TNWISE 2026",
      description:
        "Participated in the Tamil Nadu Women in Science & Engineering Hackathon organized by TANCAM.",
      color: "text-green-500",
    },

  ];

  return (

    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white">
            Achievements
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-300 mt-5 mb-16 max-w-3xl mx-auto">
            Awards, competitions and recognitions that showcase my academic,
            technical and innovation journey.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300 p-8"
            >

              <div className={`text-5xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
                {item.title}
              </h3>

              <h4 className="text-blue-600 font-semibold mt-2">
                {item.subtitle}
              </h4>

              <p className="text-gray-600 dark:text-gray-300 leading-7 mt-5">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Achievements;