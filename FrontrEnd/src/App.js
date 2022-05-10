// import logo from './logo.svg';
import React, { useState } from "react";
import ReactDom from "react-dom";
import { Login } from "./Component/LoginScreen";
import Signup from "./Component/Signup";
import "./App.css";
import { Home } from "./Component/Home";
import Pay from "./Component/Pay";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AdminLogin } from "./Component/AdminLogin";
import UseToken from "./Component/UseToken";
import { CustomerLogin } from "./Component/CustomerLogin";

const App = () => {
  const { token, setToken, removeToken, tokenUserId } = UseToken();
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route
          path="/login"
          element={
            <AdminLogin
              token={token}
              setToken={setToken}
              removeToken={removeToken}
            />
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route
          path="/Pay"
          element={
            <CustomerLogin
              token={token}
              setToken={setToken}
              removeToken={removeToken}
              tokenUserId={tokenUserId}
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
