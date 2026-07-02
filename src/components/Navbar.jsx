import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {

const {dark,setDark}=useTheme();

return(

<nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 shadow">

<div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

<h1 className="text-3xl font-bold text-blue-600">

Vaishnavi.

</h1>

<ul className="hidden md:flex gap-8">

<li><a href="#about">About</a></li>

<li><a href="#skills">Skills</a></li>

<li><a href="#projects">Projects</a></li>

<li><a href="#experience">Experience</a></li>

<li><a href="#contact">Contact</a></li>

</ul>

<button

onClick={()=>setDark(!dark)}

className="text-2xl"

>

{dark?<FaSun/>:<FaMoon/>}

</button>

</div>

</nav>

)

}

export default Navbar;