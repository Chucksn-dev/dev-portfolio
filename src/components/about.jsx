import myPic from "../assets/me/me.jpg";

function About() {
  return (
    <div>
      <span className="block text-center text-2xl md:text-3xl font-ubuntu font-semibold text-teal-700 dark:text-teal-500 mb-4 md:mb-6 ">
        ABOUT ME
      </span>
      <div className="about-content flex text-center  sm:justify-center flex-wrap xl:flex-nowrap w-full sm:text-justify">
        <div className="img-container min-w-72 rounded-xl p-4 mb-4  dark:bg-slate-800 sm:w-3/5 xl:w-full xl:max-w-72 flex items-center">
          <img src={myPic} alt="me" className="rounded-full" />
        </div>
        <div className="about-text px-4 lg:px-8 mb-4 text-sm sm:text-lg font-medium">
          <span className="block">
            I'm a Full-Stack Developer with a passionate for creating innovative
            web applications that solve complex problems and provide value to
            end-users. I have a solid foundation in web development technologies
            such as HTML, CSS, and JavaScript, and have extensive experience
            working with frameworks such as React.js, Node.js, and Express.js.
            My expertise also includes working with databases such as MongoDB
            and MySQL, as well as developing and implementing RESTful APIs, and
            utilizing state management tools such as Redux. As a quick learner
            and problem-solver, I am constantly seeking new challenges to
            improve my skills and knowledge.
            <br />
            <br />
            I believe that great application development is all about striking a
            balance between functionality, usability, and aesthetics. That's why
            I strive to create applications that are not only easy to use and
            navigate but also visually appealing. My projects are built with
            attention to detail, ensuring that they're accessible and
            user-friendly across all devices and platforms.
            <br />
            <br />
            In addition to my technical skills, I possess excellent
            communication, problem-solving, and time management skills. I am a
            dedicated and hard-working individual who takes pride in delivering
            high-quality work that meets or exceeds client expectations.
            <br />
            Overall, I am committed to providing exceptional web development
            services and solutions that help businesses and individuals achieve
            their goals. I look forward to collaborating with you on your next
            project.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
