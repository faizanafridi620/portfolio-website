import projects from "./projectsData";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div
      id="projects"
      className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16 items-center justify-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{color: "#911A1A"}}
        className="text-4xl sm:text-7xl text-black"
      >
        My Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
      >
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            key={project.id}
            rel="noreferrer"
            className="flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600"
          >
            <img
              src={project.image}
              alt="project image"
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col gap-3 bg-blue-900 p-5 transition-colors duration-300 hover:bg-blue-800 flex-grow">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
