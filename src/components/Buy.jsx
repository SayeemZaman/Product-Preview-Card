import cartIcon from "../assets/icon-cart.svg";
import Pricing from "./Pricing.jsx";

export default function Buy() {
  return (
    <>
      <Pricing final="$149.99" original="$169.99" />
      <button>
        <img src={cartIcon} alt="Cart Icon" />
        <p>Add to cart</p>
      </button>
    </>
  );
}
