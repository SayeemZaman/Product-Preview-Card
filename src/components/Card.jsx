import { useState, useEffect } from "react";

export default function Card() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const handleResize = () => setDisplayWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
}
