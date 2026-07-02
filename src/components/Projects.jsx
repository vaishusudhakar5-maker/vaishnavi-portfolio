import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title:"AI-Powered Emergency Blood Finder",
      image:hero,
      description:"AI-powered emergency blood donor matching platform with real-time alerts and hospital dashboard.",
      technologies:["Flutter","FastAPI","Python","PostgreSQL"],
      github:"https://github.com/vaishusudhakar5-maker",
      live:"#",
      featured:true
    },

    {
      title:"Mental Health App",
      image:hero,
      description:"Flutter application for mood tracking, emotional wellness and daily mental health support.",
      technologies:["Flutter","Firebase","Dart"],
      github:"https://github.com/vaishusudhakar5-maker",
      live:"#",
    },

    {
      title:"Face Detection & Face Blur",
      image:hero,
      description:"Computer Vision application using OpenCV for automatic face detection and privacy protection.",
      technologies:["Python","OpenCV"],
      github:"https://github.com/vaishusudhakar5-maker",
      live:"#",
    },

    {
      title:"Full Stack Web Development",
      image:hero,
      description:"Responsive web application built with frontend and backend technologies.",
      technologies:["HTML","CSS","JavaScript","Python"],
      github:"https://github.com/vaishusudhakar5-maker",
      live:"#",
    }

  ];

  return (

<section id="projects" className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center">
Featured Projects
</h2>

<p className="text-center text-gray-500 mt-5 mb-16">
Projects that showcase my skills in AI, Machine Learning and Full Stack Development.
</p>

<div className="grid lg:grid-cols-2 gap-10">

{projects.map((project,index)=>(

<motion.div

key={index}

whileHover={{
y:-10,
scale:1.02
}}

transition={{duration:.3}}

className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl"
>

<img

src={project.image}

alt={project.title}

className="w-full h-64 object-cover"
/>

<div className="p-8">

{project.featured && (

<span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">

⭐ Featured Project

</span>

)}

<h3 className="text-3xl font-bold mt-5">

{project.title}

</h3>

<p className="text-gray-600 leading-7 mt-5">

{project.description}

</p>

<div className="flex flex-wrap gap-3 mt-6">

{project.technologies.map((tech)=>(

<span

key={tech}

className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

>

{tech}

</span>

))}

</div>

<div className="flex gap-4 mt-8">

<a

href={project.github}

target="_blank"

rel="noreferrer"

className="bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-600 transition"

>

<FaGithub/>

GitHub

</a>

<a

href={project.live}

className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition"

>

<FaExternalLinkAlt/>

Live Demo

</a>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

  );

}

export default Projects;