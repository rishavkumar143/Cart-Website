import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Section from "./pages/home/Section";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Privacy from "./pages/privacy/Privacy";
import Contact from "./pages/contacts/Contact";
import Help from "./pages/help/Help";
import PrivateRoute from "./components/PrivateRoute"; // adjust path

function App() {

  return (
    <>
      <Routes>
        {/* Protected route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Section />
            </PrivateRoute>
          }
        />
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Help" element={<Help />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
