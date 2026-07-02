import { FaTrophy, FaMedal, FaLightbulb } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      title: "Certificate of Merit",
      description:
        "COGNIZANCE 1.0 - Intra College Technical Fest, SRM TRP Engineering College",
    },
    {
      icon: <FaMedal className="text-4xl text-blue-600" />,
      title: "Certificate of Appreciation",
      description:
        "Think Like Eleven - Data Visualization Quiz & Model Competition",
    },
    {
      icon: <FaLightbulb className="text-4xl text-purple-600" />,
      title: "Startup Pitching",
      description:
        "Presented innovative AI project ideas during technical events and competitions.",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-md p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;