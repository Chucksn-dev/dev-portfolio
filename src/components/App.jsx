import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NoPage from "../pages/noPage";
import Projects from "../pages/projects";
import SharedLayout from "../pages/sharedLayout";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-260357159-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
