import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>

      {show && (

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 40,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-6
            right-6
            md:bottom-8
            md:right-8
            z-50

            p-4

            rounded-full

            bg-blue-600
            dark:bg-blue-500

            text-white

            shadow-xl

            hover:bg-blue-700
            dark:hover:bg-blue-400

            hover:scale-110

            hover:shadow-[0_0_30px_rgba(37,99,235,0.7)]

            transition-all
            duration-300
          "
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-lg" />
        </motion.button>

      )}

    </AnimatePresence>
  );
}

export default BackToTop;