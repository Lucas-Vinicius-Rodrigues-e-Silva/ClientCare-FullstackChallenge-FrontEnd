import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import { Route, Routes } from "react-router-dom";

export const Application = () => {
  return (
    <Routes>
      <Route path="/login" index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
