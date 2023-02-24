function ProjectCard({ project_Img, name, description }) {
  return (
    <a
      href="#"
      target="_blank"
      className="project-card w-96 h-64 sm:h-72 md:h-80 dark:bg-slate-500 bg-slate-400 flex flex-col justify-between rounded-xl p-2"
    >
      <img src={project_Img} alt="proj_img" className="rounded-md mb-1" />
      <div className="text-center">
        <span className="name block text-xl md:text-2xl text-yellow-800 dark:text-gray-200 font-ubuntu ">
          {name}
        </span>
        <span className="description block text-sm md:text-base font-sans font-medium text-slate-600 dark:text-zinc-800 ">
          {description}
        </span>
      </div>
      <span className="click-txt block text-xs text-yellow-300 font-mono text-center">
        CLICK TO GO LIVE
      </span>
    </a>
  );
}

export default ProjectCard;
