import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <h3>Cart WebPage</h3>
        <p>
          Stay updated with accurate and real-time product information and
          offers.
        </p>
      </div>

      <div className={styles.footerRight}>
        <h4>© {new Date().getFullYear()} Cart WebPage. All rights reserved.</h4>
        <h2>Developed by :- Rishav Kumar</h2>
        <h3>Email :- rishavkumar27112@gmail.com</h3>
      </div>
    </footer>
  );
}

export default Footer;
