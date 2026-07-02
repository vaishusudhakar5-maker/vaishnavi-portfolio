function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold text-blue-600">
          Vaishnavi.
        </h1>

        <ul className="hidden md:flex gap-10 font-medium">

          <li><a href="#about" className="hover:text-blue-600">About</a></li>

          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>

          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>

          <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>

          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;