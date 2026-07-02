function Skills() {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "Machine Learning",
    "Computer Vision",
    "OpenCV",
    "FastAPI",
    "Flutter",
    "PostgreSQL",
    "Power BI",
    "Git & GitHub",
    "HTML",
    "CSS",
    "JavaScript",
    "Data Structures",
    "DBMS",
    "Operating Systems",
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-700">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;