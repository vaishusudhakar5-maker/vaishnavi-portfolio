function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Who am I?
            </h3>

            <p className="text-gray-600 leading-8 text-lg">
              I'm <strong>Vaishnavi S.</strong>, a B.Tech Artificial
              Intelligence & Data Science student at
              <strong> SRM TRP Engineering College, Trichy</strong>.

              <br /><br />

              I currently have a <strong>CGPA of 8.46 (up to 3rd Semester)</strong>.
              I am passionate about Artificial Intelligence, Machine Learning,
              Computer Vision, Data Science, and Full Stack Development.

              <br /><br />

              I enjoy building AI-powered applications that solve real-world
              problems and continuously enhance my skills through internships,
              hackathons, startup pitching, and technical competitions.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-6">

            <div className="shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
              <h1 className="text-4xl font-bold text-blue-600">
                8.46
              </h1>
              <p className="mt-2 text-gray-600">
                CGPA <br />
                <span className="text-sm">(Up to 3rd Semester)</span>
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
              <h1 className="text-4xl font-bold text-blue-600">
                4+
              </h1>
              <p className="mt-2 text-gray-600">
                Projects
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
              <h1 className="text-4xl font-bold text-blue-600">
                6+
              </h1>
              <p className="mt-2 text-gray-600">
                Certifications
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-8 text-center hover:shadow-xl transition">
              <h1 className="text-4xl font-bold text-blue-600">
                2
              </h1>
              <p className="mt-2 text-gray-600">
                Internships
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;