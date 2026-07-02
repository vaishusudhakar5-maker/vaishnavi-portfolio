import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Blue Blob */}

      <motion.div
        animate={{
          x: [0, 180, 0],
          y: [0, 120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-20
          -left-20
          w-[420px]
          h-[420px]
          rounded-full
          bg-blue-400/20
          dark:bg-blue-600/20
          blur-[120px]
        "
      />

      {/* Cyan Blob */}

      <motion.div
        animate={{
          x: [0, -160, 0],
          y: [0, -140, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-24
          -right-24
          w-[450px]
          h-[450px]
          rounded-full
          bg-cyan-400/20
          dark:bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Purple Blob */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -120, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[340px]
          h-[340px]
          rounded-full
          bg-indigo-400/20
          dark:bg-indigo-600/20
          blur-[120px]
        "
      />

      {/* Pink Blob */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          right-1/3
          w-[250px]
          h-[250px]
          rounded-full
          bg-pink-400/15
          dark:bg-pink-500/15
          blur-[100px]
        "
      />

    </div>
  );
}

export default Background;