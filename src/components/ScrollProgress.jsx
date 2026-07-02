import { useEffect, useState } from "react";

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0
          ? (window.scrollY / totalHeight) * 100
          : 0;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">

      <div
        className="
          h-full
          bg-gradient-to-r
          from-blue-500
          via-cyan-500
          to-blue-700
          transition-all
          duration-150
        "
        style={{
          width: `${scroll}%`,
        }}
      />

    </div>
  );
}

export default ScrollProgress;