import "./App.css";
import Section from "./pages/home/Section";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Section />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
      </>
  )
}
export default App
