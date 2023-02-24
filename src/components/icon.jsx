function Icon({ icon_name, icon }) {
  return (
    <div className="icon flex flex-col justify-between items-center text-sm sm:text-base text-center px-2 pt-2 w-20 min-h-28">
      <img src={icon} alt="icon" />
      <span>{icon_name}</span>
    </div>
  );
}

export default Icon;
