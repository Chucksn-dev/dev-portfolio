import portfolioImg from "../src/assets/me/portfolio.png";
import analogClockProjImg from "../src/assets/me/analog-clock.png";
import calculatorProjImg from "../src/assets/me/calculator-app.png";
import movieAppProjImg from "../src/assets/me/movie-app2.jpg";
import radioAppProjImg from "../src/assets/me/radio-2.jpg";
import weatherAppProjImg from "../src/assets/me/weather-app.png";
import quizAppProjImg from "../src/assets/me/quiz-app.png";

export const projectData = [
  {
    name: "Mv-Hub",
    url: "https://movie-app-chi-nine.vercel.app/",
    image: movieAppProjImg,
    features: "",
    tech: "JavaScript, React.js, Redux, Tailwind, Swiper-react, REST-API, Node.js, Express.js, MongoDB.",
    description:
      "A full-stack movie streaming web app that can access a huge library of movies from different genres. Users browse movies by categories or search for specific titles. Users can also create and delete personalized watchlists. Also has user login and sign-up features.",
  },
  {
    name: "World Radio",
    url: "https://world-radio.vercel.app/",
    image: radioAppProjImg,
    features: "",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, REST-API.",
    description:
      "A Full-stack web-based application that allows users to listen to radio stations from around the world. Streams Over 20,000 Internet Radio Stations in real time. Easy to use and has 'Search Country' and 'Add to favorite' features.",
  },
  {
    name: "Trivia Titan",
    url: "https://trivia-titans.vercel.app/",
    image: quizAppProjImg,
    features: "",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, REST-API.",
    description:
      "A dynamic quiz web app that offers users the opportunity to test their knowledge on a variety of subjects. The app typically features a range of quizzes, each with a set of questions and multiple choice answers.",
  },

  {
    name: "Weather App",
    url: "http://weather-app-react-lyart.vercel.app/",
    image: weatherAppProjImg,
    features: "",
    tech: "JavaScript, React.js, Redux, Context-API, REST-API, Geo-location API, swiper.js.",
    description:
      "A web application that provides users with real-time weather information based on their current location. The app uses a geo-location API to automatically detect the user's location and provide weather updates for that specific area.",
  },
  {
    name: "Personal Portfolio",
    url: "https://chucksn-portfolio.vercel.app/",
    image: portfolioImg,
    features: "",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, Intersection-observer API ",
    description:
      "Personal portfolio website. Includes, info about me, my technical abilities, projects and contact info",
  },
  {
    name: "Calculator App",
    url: "https://calculator-app-chucksn.vercel.app/",
    image: calculatorProjImg,
    features: "",
    tech: "HTML, Vanilla CSS, JavaScript",
    description:
      "A Calculator web application that functions just like a real calculator.",
  },
  {
    name: "Analog Clock Web App",
    url: "https://analog-clock-chucksn.vercel.app/",
    image: analogClockProjImg,
    features: "",
    tech: "HTML, Vanilla CSS, JavaScript",
    description: "Analog clock web application with manual setting adjustment.",
  },
];
