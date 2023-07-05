import portfolioImg from "../src/assets/me/portfolio.png";
import analogClockProjImg from "../src/assets/me/analog-clock.png";
import calculatorProjImg from "../src/assets/me/calculator-app.png";
import movieAppProjImg from "../src/assets/me/movie-app2.jpg";
import radioAppProjImg from "../src/assets/me/radio-3.png";
import weatherAppProjImg from "../src/assets/me/weather-app.png";
import quizAppProjImg from "../src/assets/me/quiz-app.png";

export const projectData = [
  {
    name: "Mv-Hub",
    url: "https://movie-app-chi-nine.vercel.app/",
    image: movieAppProjImg,
    features:
      "Authentication-(Login/Sign-up), Authorization(powered by JWT), Logout, Delete user account, Watchlist(CRUD), User-profile menu, Video modal",
    tech: "JavaScript, React.js, Redux, Tailwind, Swiper-react, REST-API, Node.js, Express.js, MongoDB, Mongoose.",
    description:
      "A full-stack (MERN) movie streaming web app that can access a huge library of movies from different genres. Users browse movies by categories or search for specific titles. Users can also create and delete personalized watchlists.",
  },
  {
    name: "World Radio",
    url: "https://world-radio.vercel.app/",
    image: radioAppProjImg,
    features:
      "Authentication-(Google Login, Email Login/Sign-up), Authorization(powered by JWT), Google-Auth, Logout, Delete user account, Search feature, Favorites(CRUD), User-profile menu",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, RTK-Query, Framer-motion, REST-API, Node.js, Express.js, MongoDB, Mongoose.",
    description:
      "A Full-stack (MERN) web-based application that allows users to listen to radio stations from around the world. Streams Over 20,000 Internet Radio Stations in real time. Easy to use with search feature.",
  },
  {
    name: "Trivia Titan",
    url: "https://trivia-titans.vercel.app/",
    image: quizAppProjImg,
    features: "Search feature, Timer feature",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, REST-API.",
    description:
      "A dynamic quiz web app that offers users the opportunity to test their knowledge on a variety of subjects. The app typically features a range of quizzes, each with a set of questions and multiple choice answers.",
  },

  {
    name: "Weather App",
    url: "http://weather-app-react-lyart.vercel.app/",
    image: weatherAppProjImg,
    features: "Automatic location detection, Search feature",
    tech: "JavaScript, React.js, Redux, Context-API, REST-API, Geo-location API, swiper.js.",
    description:
      "A web application that provides users with real-time weather information based on their current location. The app uses a geo-location API to automatically detect the user's location and provide weather updates for that specific area.",
  },
  {
    name: "Personal Portfolio",
    url: "https://chucksn-portfolio.vercel.app/",
    image: portfolioImg,
    features: "About, Skills, Portfolio Projects, Contact",
    tech: "JavaScript, React.js, Redux-Toolkit, Tailwind, Framer-motion, Intersection-observer API ",
    description:
      "Personal portfolio website. Includes, info about me, my technical abilities, projects and contact info",
  },
  {
    name: "Calculator App",
    url: "https://calculator-app-chucksn.vercel.app/",
    image: calculatorProjImg,
    features: "Continuous calculation feature",
    tech: "HTML, Vanilla CSS, JavaScript",
    description:
      "A Calculator web application that functions just like a real calculator.",
  },
];
