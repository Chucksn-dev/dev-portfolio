function GetInTouch() {
  return (
    <div className="get-in-touch-container p-4 md:p-8 bg-slate-300/95 dark:bg-neutral-900/90 w-4/5 mx-auto mt-8">
      <span className="block font-prosto font-medium text-lg md:text-xl text-center">
        Get in touch
      </span>
      <div className="location text-center font-ubuntu text-sm sm:text-base mt-4">
        <i className="fa-solid fa-location-dot text-red-500"></i>
        {"  "}
        <span className="inline-block">Houston, TX. USA</span>
      </div>
      <div className="email text-center font-ubuntu text-sm sm:text-base mt-2">
        <i className="fa-regular fa-envelope text-sky-600"></i>{" "}
        <a className="inline-block" href="mailto:chucksn611@gmail.com">
          chucksn611@gmail.com
        </a>
      </div>
      <div className=" text-center font-ubuntu text-sm sm:text-base mt-2">
        <span className="block">Also reach me through the links below</span>{" "}
        <i className="text-2xl text-yellow-800 dark:text-yellow-500 fa-regular fa-hand-point-down"></i>
      </div>
    </div>
  );
}

export default GetInTouch;
