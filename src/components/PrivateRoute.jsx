import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("userDetails"));

  if (!user) {
    // Redirect to login if user is not available
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;