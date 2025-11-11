import { useState } from "react";
import styles from "./Contact.module.css";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `✅ Thank you, ${formData.name}! Your message has been sent successfully.`
    );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />

      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>

        <p className={styles.intro}>
          Have questions, feedback, or need help with your order?
          <br />
          Our support team is always happy to assist you!
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2>📞 Get in Touch</h2>
            <p>
              <strong>Email:</strong> support@cartwebpage.com
            </p>
            <p>
              <strong>Phone:</strong> +91 74098-24***
            </p>
            <p>
              <strong>Address:</strong> 6th floor, Steller IT Park, Noida 62,
              India
            </p>
            <p>
              <strong>Working Hours:</strong> Mon - Fri, 4:00 PM - 12:00 AM
            </p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>📩 Send Us a Message</h2>

            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
