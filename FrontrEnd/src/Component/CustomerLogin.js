import React from "react";
import CustomerDashboard from "./customer/CustomerDashboard";
import { LoginScreen } from "./LoginScreen";

export function CustomerLogin({ token, setToken, removeToken, tokenUserId }) {
  if (!token) {
    return <LoginScreen setToken={setToken} />;
  }
  return (
    <CustomerDashboard
      token={token}
      removeToken={removeToken}
      setToken={setToken}
      tokenUserId={tokenUserId}
    />
  );
}
