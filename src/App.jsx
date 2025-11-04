import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Footer from "./Footer";
import Section from "./Section";
import Searching from "./Searching";
import Navebar from "./Navebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
      <div className="Head">
        <h1>
          Cart<span> WebPage</span>
        </h1>
        <Searching />
        <ul type="none">
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <div className="cart-profile">
            <li>
              <MdAddShoppingCart />
            </li>
            <li>
              <CgProfile />
            </li>
          </div>
        </ul>
      </div>
      <Navebar onCategorySelect={setSelectedCategory} />
      <Section selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}

export default App;
