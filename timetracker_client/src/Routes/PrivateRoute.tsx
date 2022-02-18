import { useAPI } from "../api/context";
import { Navigate } from "react-router-dom";
import { Dashboard } from "../container/Dashboard";

export const PrivateRoute = () => {
  const api = useAPI();

  const isAuthenticated = api.user.isAuthenticated;

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Dashboard />;
};
