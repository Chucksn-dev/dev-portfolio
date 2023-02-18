function Icon({ icon_name, icon_path }) {
  return (
    <div className="icon flex flex-col justify-between items-center text-center px-2 pt-2 w-20 min-h-28">
      <img src={`../src/assets/icons/${icon_path}`} alt="icon" />
      <span>{icon_name}</span>
    </div>
  );
}

export default Icon;
