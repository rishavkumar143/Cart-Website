import React, { useState } from "react";
import styles from "./Signup.module.css";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("userDetails", JSON.stringify(formData));
        alert("Registration Successful.");
        navigate("/login")
    };

    return (
        <div className={styles.main}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.title}>Create an Account</h2>

                <label className={styles.label}>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your name"
                    required
                />

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
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your password"
                    required
                />

                <button type="submit" className={styles.button}>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;
