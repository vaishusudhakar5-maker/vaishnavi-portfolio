function Experience() {
  const internships = [
    {
      company: "ElysiumPro",
      role: "Machine Learning & Deep Learning Intern",
      duration: "03 Jul 2026 – 12 Jul 2026",
      description:
        "Worked on Machine Learning and Deep Learning concepts, model development, data preprocessing, and practical AI applications."
    },
    {
      company: "Phoenix Softech",
      role: "Full Stack Web Development Intern",
      duration: "14 Jul 2025 – 28 Jul 2025",
      description:
        "Developed responsive web pages using Python and web technologies while learning frontend-backend integration and real-world development practices."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Internship Experience
        </h2>

        <div className="space-y-8">

          {internships.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-2xl font-bold text-blue-600">
                    {item.role}
                  </h3>

                  <p className="text-lg font-medium text-gray-700">
                    {item.company}
                  </p>
                </div>

                <p className="text-gray-500 mt-2 md:mt-0">
                  {item.duration}
                </p>

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;