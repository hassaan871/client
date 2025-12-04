import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  if (!isLoggedIn) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the children
  return children;
}
