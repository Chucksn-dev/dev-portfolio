function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer flex flex-col items-center pt-3 pb-28  w-full shadow-c-1-top  dark:bg-neutral-900 lg:pt-4 text-teal-600 ">
      <div className="footer-links flex justify-center gap-x-8 lg:gap-x-12 hover:cursor-pointer    ">
        <a href="https://github.com/chucksn" rel="noreferrer" target="_blank">
          <img src="../src/assets/github.svg" alt="github" />
        </a>
        <a
          href="https://twitter.com/chuckfugee?t=fDFd4mEuIOOvFJLhSXnFNA&s=09"
          rel="noreferrer"
          target="_blank"
        >
          <img src="../src/assets/twitter.svg" alt="twitter" />
        </a>
        <a
          href="https://www.tiktok.com/@chuckx892?_t=8YbFb8cvrSI&_r=1"
          rel="noreferrer"
          target="_blank"
        >
          <img src="../src/assets/tictok.svg" alt="tictok" />
        </a>
        <a href="#" rel="noreferrer" target="_blank">
          <img src="../src/assets/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div className="footer-text flex flex-col items-center mt-2  lg:mt-4">
        <span className=" block text-sm font-medium lg:text-base">
          Developed with ReactJS
        </span>
        <span className=" block text-xs">
          Designed and Developed By Chucks N &#169;{year}
        </span>
      </div>
    </div>
  );
}

export default Footer;
