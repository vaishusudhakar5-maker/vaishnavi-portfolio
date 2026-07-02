function Certifications() {
  const certificates = [
    {
      title: "Getting Started with Artificial Intelligence",
      organization: "IBM SkillsBuild",
    },
    {
      title: "Operating Systems Basics",
      organization: "Cisco Networking Academy",
    },
    {
      title: "Introduction to Machine Learning",
      organization: "Infosys Springboard",
    },
    {
      title: "Power BI Data Modelling Basics",
      organization: "Microsoft",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.organization}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;