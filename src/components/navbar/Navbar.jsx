import { MdAddShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Searching from "../searching/Searching";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear("userData")
    navigate("/login")
  }

  const handlePrivacy = () =>{
    navigate("/Privacy")
  }
  const handleContact = () =>{
    navigate("/Contact")
  }
  const handleHelp = () =>{
    navigate("/Help")
  }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          Cart<span> WebPage</span>
        </h1>
      </div>

      <div className={styles.sreachContainer}>
        <Searching setSearchTerm={setSearchTerm} />
      </div>

      <nav>
        <ul className={styles.navLink}>
          <li onClick={handlePrivacy}>Privacy</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleHelp}>Help</li>
          <li className={styles.cartProfile}>
            <MdAddShoppingCart className={styles.icon} />

            <div className={styles.profileWrapper}>
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
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
