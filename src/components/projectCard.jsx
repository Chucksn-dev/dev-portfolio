function ProjectCard({ project_Img, name, description, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="project-card w-96 h-64 sm:h-72 md:h-80 dark:bg-slate-800 bg-slate-400 flex flex-col justify-between rounded-b-xl p-1"
    >
      <img src={project_Img} alt="proj_img" className=" mb-1" />
      <div className="text-center px-3">
        <span className="name block text-xl md:text-2xl text-yellow-700 dark:text-yellow-300 font-ubuntu ">
          {name}
        </span>
        <span className="description block text-sm md:text-base font-sans font-medium text-slate-600 dark:text-zinc-400 ">
          {description}
        </span>
      </div>
      <span className="click-txt block text-xs text-lime-300 font-mono text-center">
        CLICK TO GO LIVE
      </span>
    </a>
  );
}

export default ProjectCard;
