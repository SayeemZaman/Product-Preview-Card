import About from "./About.jsx";
import mobile_product_img from "../assets/image-product-mobile.jpg";
import desktop_product_img from "../assets/image-product-desktop.jpg";
import { useState, useEffect } from "react";

export default function Card() {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const handleResize = () => setDisplayWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="card">
      <img
        id="product-img"
        src={displayWidth < 550 ? mobile_product_img : desktop_product_img}
        alt="Image of a perfume product."
      />
      <About />
    </div>
  );
}
