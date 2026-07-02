import { useState } from "react";
import {
  FaLaptopCode,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, setDark } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/70 dark:bg-slate-900/80
      backdrop-blur-xl
      border-b border-gray-200 dark:border-slate-700
      shadow-lg
      transition-all duration-300
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3 text-3xl font-extrabold text-blue-600 hover:scale-105 transition"
        >
          <FaLaptopCode />
          Vaishnavi
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-medium">

          {navItems.map((item) => (

            <li key={item.label}>

              <a
                href={item.href}
                className="
                  text-gray-700
                  dark:text-white
                  hover:text-blue-600
                  transition-colors duration-300
                "
              >
                {item.label}
              </a>

            </li>

          ))}

        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Dark Mode */}

          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle Theme"
            className="
              text-2xl
              text-blue-600
              hover:rotate-180
              transition duration-500
            "
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="lg:hidden text-3xl text-blue-600"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all duration-300
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-white dark:bg-slate-900 shadow-xl">

          <ul className="flex flex-col items-center gap-6 py-8 font-medium">

            {navItems.map((item) => (

              <li key={item.label}>

                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    text-gray-700
                    dark:text-white
                    hover:text-blue-600
                    transition
                  "
                >
                  {item.label}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;