import { motion } from "framer-motion";

import ibm from "../assets/certificates/ibm.png";
import cisco from "../assets/certificates/cisco.png";
import infosys from "../assets/certificates/infosys.jpg";
import microsoft from "../assets/certificates/microsoft.png";
import phoenix from "../assets/certificates/phoenix.jpg";
import thinklikeeleven from "../assets/certificates/thinklikeeleven.jpg";
import cognizance from "../assets/certificates/cognizance.png";
import womeninnovators from "../assets/certificates/womeninnovators.jpg";
import techutsav from "../assets/certificates/techutsav.jpg";
import tnwise from "../assets/certificates/tnwise.jpg";

function Certifications() {

  const certificates = [

    {
      title: "Getting Started with Artificial Intelligence",
      organization: "IBM SkillsBuild",
      image: ibm,
      badge: "Certification",
    },

    {
      title: "Operating Systems Basics",
      organization: "Cisco Networking Academy",
      image: cisco,
      badge: "Certification",
    },

    {
      title: "Introduction to Machine Learning",
      organization: "Infosys Springboard",
      image: infosys,
      badge: "Certification",
    },

    {
      title: "Power BI Data Modelling Basics",
      organization: "Microsoft",
      image: microsoft,
      badge: "Certification",
    },

    {
      title: "Full Stack Web Development Internship",
      organization: "Phoenix Softech",
      image: phoenix,
      badge: "Internship",
    },

    {
      title: "Think Like Eleven - 3rd Prize",
      organization: "Thiagarajar College of Engineering",
      image: thinklikeeleven,
      badge: "Achievement",
    },

    {
      title: "COGNIZANCE 1.0 Certificate of Merit",
      organization: "SRM TRP Engineering College",
      image: cognizance,
      badge: "Achievement",
    },

    {
      title: "Women Innovators Conclave 2026",
      organization: "SRM TRP Engineering College",
      image: womeninnovators,
      badge: "Achievement",
    },

    {
      title: "TECHUTSAV'26 Workshop & Events",
      organization: "Thiagarajar College of Engineering",
      image: techutsav,
      badge: "Participation",
    },

    {
      title: "TNWISE 2026 Hackathon",
      organization: "TANCAM",
      image: tnwise,
      badge: "Hackathon",
    },

  ];

  return (

    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-500"
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
            Certifications & Achievements
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-300 mt-5 mb-16 max-w-3xl mx-auto">
            Industry certifications, internships, hackathons and technical
            achievements that reflect my continuous learning journey.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white dark:border-slate-700 shadow-xl hover:shadow-blue-400/30 transition-all duration-300"
            >

              <div className="bg-slate-100 dark:bg-slate-900 p-4">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-56 object-contain rounded-xl"
                />

              </div>

              <div className="p-6">

                <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-semibold">
                  {certificate.badge}
                </span>

                <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {certificate.organization}
                </p>

                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  View Certificate →
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Certifications;