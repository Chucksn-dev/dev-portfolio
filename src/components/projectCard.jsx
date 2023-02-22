function ProjectCard() {
  return (
    <div className="project-card w-96 h-64 sm:h-72 md:h-80 dark:bg-slate-500 bg-slate-400 flex flex-col rounded-xl p-2">
      <img
        src="../src/assets/me/portfolio.png"
        alt="proj_img"
        className="rounded-md"
      />
    </div>
  );
}

export default ProjectCard;
