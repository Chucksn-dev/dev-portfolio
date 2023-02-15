import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimateOnRevealRight({ children }) {
  const { ref, inView } = useInView();

  const variants = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.5, ease: "linear" },
    },
  };
  console.log(inView);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}

function AnimateOnRevealLeft({ children }) {
  const { ref, inView } = useInView();

  const variants = {
    hidden: {
      opacity: 0,
      x: -400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.5, ease: "linear" },
    },
  };
  console.log(inView);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
    >
      {children}
    </motion.div>
  );
}

export { AnimateOnRevealRight, AnimateOnRevealLeft };
