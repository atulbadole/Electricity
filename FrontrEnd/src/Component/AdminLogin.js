import React from "react";
import AdminDashboard from "./adminScreen/AdminDashboard";
import { LoginScreen } from "./LoginScreen";

export function AdminLogin({ token, setToken, removeToken }) {
  if (!token) {
    return <LoginScreen setToken={setToken} />;
  }
  return <AdminDashboard removeToken={removeToken} setToken={setToken} />;
}
