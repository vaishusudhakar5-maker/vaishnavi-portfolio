import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-14">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">
          Vaishnavi S.
        </h2>

        <p className="text-gray-400 mt-3">
          AI & Data Science Student
        </p>

        <div className="flex justify-center gap-8 mt-8 text-3xl">

          <a
            href="https://github.com/vaishusudhakar5-maker"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vaishnavi-sudhakar-940b1b329"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:vaishusudhakar5@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <p className="mt-10 text-gray-500">
          © 2026 Vaishnavi S. • Built with React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;