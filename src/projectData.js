import portfolioImg from "../src/assets/me/portfolio.png";
import analogClockProjImg from "../src/assets/me/analog-clock.png";
import calculatorProjImg from "../src/assets/me/calculator-app.png";
import movieAppProjImg from "../src/assets/me/movie-app.png";
import radioAppProjImg from "../src/assets/me/radio-2.jpg";
import weatherAppProjImg from "../src/assets/me/weather-app.png";
import quizAppProjImg from "../src/assets/me/quiz-app.png";

export const projectData = [
  {
    name: "World Radio",
    url: "https://chucksn.github.io/World-Radio/",
    image: radioAppProjImg,
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, REST-API.",
    description:
      "A web-based application that allows users to listen to radio stations from around the world. Streams Over 20,000 Internet Radio Stations in real time. Easy to use and has 'Search Country' and 'Add to favorite' features.",
  },
  {
    name: "Movie Hub",
    url: "https://movie-app-chi-nine.vercel.app/",
    image: movieAppProjImg,
    tech: "JavaScript, React.js, Redux,chakra-ui, Framer-motion, Swiper.js, REST-API.",
    description:
      "Movie streaming web application that can access a huge library of movies from different genres. Users can also browse movies by categories, search for specific titles, and create personalized watchlists.",
  },
  {
    name: "Trivia Titan",
    url: "https://trivia-titans.vercel.app/",
    image: quizAppProjImg,
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, REST-API.",
    description:
      "A dynamic quiz web app that offers users the opportunity to test their knowledge on a variety of subjects. The app typically features a range of quizzes, each with a set of questions and multiple choice answers.",
  },

  {
    name: "Weather App",
    url: "http://weather-app-react-lyart.vercel.app/",
    image: weatherAppProjImg,
    tech: "JavaScript, React.js, Redux, Context-API, REST-API, Geo-location API, swiper.js.",
    description:
      "A web application that provides users with real-time weather information based on their current location. The app uses a geo-location API to automatically detect the user's location and provide weather updates for that specific area.",
  },
  {
    name: "Personal Portfolio",
    url: "https://chucksn-portfolio.vercel.app/",
    image: portfolioImg,
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, Intersection-observer API ",
    description:
      "Personal portfolio website. Includes, info about me, my technical abilities, projects and contact info",
  },
  {
    name: "Calculator App",
    url: "https://calculator-app-chucksn.vercel.app/",
    image: calculatorProjImg,
    tech: "HTML, Vanilla CSS, JavaScript",
    description:
      "A Calculator web application that functions just like a real calculator.",
  },
  {
    name: "Analog Clock Web App",
    url: "https://analog-clock-chucksn.vercel.app/",
    image: analogClockProjImg,
    tech: "HTML, Vanilla CSS, JavaScript",
    description: "Analog clock web application with manual setting adjustment.",
  },
];
