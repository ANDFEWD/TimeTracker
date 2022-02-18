import { useAPI } from "../api/context";
import { Navigate } from "react-router-dom";
import Login from "../container/Login";

export const PrivateLogin = () => {
  const api = useAPI();

  const isAuthenticated = api.user.isAuthenticated;

  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return <Login />;
};
