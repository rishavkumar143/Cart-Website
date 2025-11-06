import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userDetails")) || {});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === user.email && formData.password === user.password) {
      alert("Login Success ✅");
      navigate("/")
    } else {
      alert("Login Failed ❌");
    }
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>

        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="Enter your email"
          required
        />

        <label className={styles.label}>Password</label>
        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter your password"
            required
          />
          <span className={styles.eyeIcon} onClick={togglePassword}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>

        <p className={styles.signupText}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
