function ProjectCard({ project_Img, name, description, url, tech }) {
  return (
    <a
      href={url}
      target="_blank"
      className="project-card w-96 min-h-64 sm:min-h-72 md:min-h-80 dark:bg-black bg-zinc-900 flex flex-col justify-between rounded-b-xl p-1 "
    >
      <div>
        <img src={project_Img} alt="proj_img" className=" mb-1" />

        <span className="name block text-lg sm:text-xl  text-yellow-600 dark:text-yellow-300 font-sans text-center px-3 my-2">
          {name}
        </span>
      </div>
      <span className="description block text-sm md:text-base text-center px-3 font-sans font-medium text-slate-400 dark:text-zinc-400 ">
        {description}
      </span>
      <span className="block text-sm md:text-base text-center px-3 font-sans font-medium text-orange-300 mt-2">
        <span className="font-semibold text-blue-600">Tech stack:</span> {tech}
      </span>
      <span className="click-txt block text-xs text-lime-300 font-mono text-center m-3">
        CLICK CARD TO GO LIVE
      </span>
    </a>
  );
}

export default ProjectCard;
