import Navbar from "../../components/navbar/Navbar";
import styles from "./Privacy.module.css";

const Privacy = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.privacyPolicy}>
        <h1>Privacy Policy</h1>

        <p>
          Welcome to <strong>Cart Website</strong>. Your privacy is very
          important to us. This Privacy Policy explains how we collect, use, and
          protect your personal information when you visit or make a purchase
          from our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email address,
          phone number, billing and shipping address, and payment information
          when you place an order. We may also collect non-personal data such as
          browser type, device information, and IP address for analytics.
        </p>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To process and deliver your orders</li>
          <li>To communicate with you about your orders or offers</li>
          <li>To improve our website, products, and customer experience</li>
          <li>To prevent fraud and ensure secure transactions</li>
        </ul>

        <h2>3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We only share it
          with trusted partners such as payment gateways and shipping providers
          to complete your orders securely.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We use encryption, firewalls, and secure server technology to protect
          your data. However, please note that no method of transmission over
          the Internet is 100% secure.
        </p>

        <h2>5. Cookies</h2>
        <p>
          We use cookies to improve your browsing experience and analyze site
          traffic. You can choose to disable cookies through your browser
          settings.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          You can request access to, correction, or deletion of your personal
          data anytime by contacting us at{" "}
          <strong>cartwebsite123@email.com</strong>.
        </p>

        <h2>7. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>

        <p className={styles.lastUpdated}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacy;
