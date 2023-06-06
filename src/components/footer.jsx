import githubIconWhite from "../assets/github2.svg";
import githubIconBlack from "../assets/github.svg";
import twitterIcon from "../assets/twitter.svg";
import tictokIcon from "../assets/tictok.svg";
import linkedinIcon from "../assets/linkedin.svg";

function Footer({ darkMode }) {
  let year = new Date().getFullYear();
  return (
    <div className="footer flex flex-col items-center p-3  w-screen shadow-c-1-top bg-gray-300  dark:bg-neutral-900 lg:pt-4 text-teal-600 ">
      <div className="footer-links flex justify-center gap-x-8 lg:gap-x-12 hover:cursor-pointer mb-16 mt-2">
        <a href="https://github.com/chucksn" rel="noreferrer" target="_blank">
          <img
            src={darkMode ? githubIconWhite : githubIconBlack}
            alt="github"
          />
        </a>
        <a
          href="https://twitter.com/chuckfugee?t=fDFd4mEuIOOvFJLhSXnFNA&s=09"
          rel="noreferrer"
          target="_blank"
        >
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a
          href="https://www.tiktok.com/@chuckx892?_t=8YbFb8cvrSI&_r=1"
          rel="noreferrer"
          target="_blank"
        >
          <img src={tictokIcon} alt="tictok" />
        </a>
        <a
          href="https://www.linkedin.com/in/chucksn611/"
          rel="noreferrer"
          target="_blank"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </div>
      <div className="footer-text flex flex-col items-center  lg:mt-4">
        <span className=" block text-xs">
          Designed and Developed By Chucks N &#169;{year}
        </span>
      </div>
    </div>
  );
}

export default Footer;
