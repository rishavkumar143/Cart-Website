import styles from "./Help.module.css";
import Navbar from "../../components/navbar/Navbar";

const Help = () => {
  return (
    <div>
      <Navbar />;
      <div className={styles.helpContainer}>
        <h1>Help & Support</h1>

        <p className={styles.intro}>
          Welcome to the <strong>Help Center</strong> of{" "}
          <span>Cart WebPage</span>. We're here to answer your questions and
          make your shopping experience smooth and simple.
        </p>

        <div className={styles.faqSection}>
          <h2>Frequently Asked Questions (FAQs)</h2>

          <div className={styles.faq}>
            <h3>1. How do I place an order?</h3>
            <p>
              Browse our products, add items to your cart, and click on
              “Checkout”. Follow the steps to complete your payment securely.
            </p>
          </div>

          <div className={styles.faq}>
            <h3>2. Can I cancel my order?</h3>
            <p>
              Yes, you can cancel your order within 24 hours of placing it. Go
              to <strong>My Orders</strong> and click on “Cancel Order”.
            </p>
          </div>

          <div className={styles.faq}>
            <h3>3. How do I track my delivery?</h3>
            <p>
              Once your order ships, we'll send you a tracking link by email or
              SMS. You can also view it under “Order Status”.
            </p>
          </div>

          <div className={styles.faq}>
            <h3>4. What if I receive a damaged product?</h3>
            <p>
              Don't worry! Contact our support team within 48 hours of delivery
              and we'll arrange a replacement or refund.
            </p>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h2>Need More Help?</h2>
          <p>
            📧 Email us at: <strong>cartwebsite123@email.com</strong>
          </p>
          <p>
            ☎️ Call us at: <strong>+91 7409824***</strong>
          </p>
          <p>
            💬 Live Chat: Available from <strong>4:00 PM - 12:00 AM</strong>{" "}
            (Mon-Fri)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
