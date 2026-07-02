import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiFlutter,
  SiFastapi,
  SiOpencv,
} from "react-icons/si";

const icons = [
  {
    Icon: FaPython,
    top: "8%",
    left: "8%",
  },
  {
    Icon: FaJava,
    top: "18%",
    right: "8%",
  },
  {
    Icon: SiFlutter,
    bottom: "15%",
    left: "10%",
  },
  {
    Icon: SiFastapi,
    top: "60%",
    right: "12%",
  },
  {
    Icon: FaDatabase,
    top: "42%",
    left: "4%",
  },
  {
    Icon: SiOpencv,
    bottom: "8%",
    right: "8%",
  },
  {
    Icon: FaGithub,
    top: "10%",
    left: "45%",
  },
];

function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {icons.map(({ Icon, ...position }, index) => (

        <motion.div
          key={index}
          style={position}
          className="
            absolute
            text-blue-400
            dark:text-blue-300
            opacity-20
            text-3xl
            md:text-5xl
          "
          animate={{
            y: [0, -25, 0],
            rotate: [0, 12, -12, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon />
        </motion.div>

      ))}

    </div>
  );
}

export default FloatingIcons;