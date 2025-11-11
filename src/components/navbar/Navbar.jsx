import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Searching from "../searching/Searching";
import styles from "./Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchTerm, cartCount = 0 }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  };

  const handlePrivacy = () => navigate("/privacy");
  const handleContact = () => navigate("/contact");
  const handleHelp = () => navigate("/help");

  const handleCartClick = () => navigate("/cart");
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        <h1>
          Cart<span> WebPage</span>
        </h1>
      </div>

      <div className={styles.searchContainer}>
        <Searching setSearchTerm={setSearchTerm} />
      </div>

      <nav>
        <ul className={styles.navLink}>
          <li onClick={handlePrivacy}>Privacy</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleHelp}>Help</li>

          <li className={styles.cartProfile} onClick={handleCartClick}>
            <div className={styles.cartIconWrapper}>
              <MdAddShoppingCart className={styles.icon} />
              {cartCount > 0 && (
                <span className={styles.cartCount}>{cartCount}</span>
              )}
            </div>
          </li>

          <div className={styles.profileWrapper} ref={dropdownRef}>
            <CgProfile className={styles.icon} onClick={toggleDropdown} />
            {isOpen && (
              <div className={styles.dropdown}>
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
