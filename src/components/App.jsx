import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import NoPage from "../pages/noPage";
import Projects from "../pages/projects";
import SharedLayout from "../pages/sharedLayout";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
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
