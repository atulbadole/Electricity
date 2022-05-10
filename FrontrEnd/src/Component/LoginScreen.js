import React from "react";
import { useState } from "react";
import "./Login.css";
import PropTypes from "prop-types";
import { getResponse } from "./requestComponent/RequestService";

export function LoginScreen({ setToken }) {
  const [enteredUsername, setEnteredUsername] = useState();
  const [password, setPassword] = useState();

  const [formError, setFormError] = useState("");

  const login = async () => {
    getResponse(
      "Post",
      (response) => {
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          const { data } = response;
          if (data !== undefined) {
            const { isSuccess, error } = data;
            if (isSuccess === true) {
              setToken(data);
            } else {
              alert("Invalid Username or Password");
              setToken(null);
              setFormError(error);
            }
          }
        }
      },
      "user/customerLogin",
      { username: enteredUsername, password }
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    if (enteredUsername !== undefined && enteredUsername.length === 0) {
      setFormError("Username required.");
      return;
    }
    if (password !== undefined && password.length === 0) {
      setFormError("Password required.");
      return;
    }

    try {
      await login();
    } catch (e) {
      setFormError("Login failed!");
    }
  };

  return (
    <>
      <div className="container">
        <div className="loginbox">
          <img src={require("../Photos/pic.jpg")}  alt=""/>
          <h1>Login Here</h1>
          <form onSubmit={onSubmit} method="POST">
            {formError !== undefined && formError.length > 0 ? (
              <div style={{ fontSize: "14px", color: "red", marginBottom: 10 }}>
                {formError}
              </div>
            ) : (
              <></>
            )}
            <p>Username</p>
            <input
              type="text"
              name=""
              placeholder="Enter Username"
              onChange={(e) => setEnteredUsername(e.target.value)}
              value={enteredUsername}
              required
            />
            <p>Password</p>
            <input
              type={"password"}
              name=""
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button id="submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

LoginScreen.propTypes = {
  setToken: PropTypes.func.isRequired,
};
