import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import Login from "./container/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./container/Dashboard";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PrivateLogin } from "./Routes/PrivateLogin";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<PrivateLogin />} />
        <Route path="/Dashboard" element={<PrivateRoute />} />
      </Routes>
    </Box>
  );
}

export default App;
