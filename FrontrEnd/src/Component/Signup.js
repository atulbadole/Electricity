import React from "react";
import { useState } from "react";
import "./Signup.css";
import { getResponse } from "./requestComponent/RequestService";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [formError, setFormError] = useState("");

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const saveFormData = async () => {
    console.log("type == ", typeof values);
    getResponse(
      "Post",
      (response) => {
        console.log("response -- ", response);
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          
          const { data } = response;
          if (data !== undefined) {
            const { isSuccess, error } = data;
            if (isSuccess === true) {
              alert("Your registration was successfully submitted!");
              setValues({
                name: "",
                username: "",
                email: "",
                password: "",
                repassword: "",
              });
            } else {
              
              setFormError(error);
            }
          }
        }
      },
      "user/registerUser",
      values
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default submission
    if (values.password !== values.repassword) {
      setFormError("Password is not match.");
      return;
    }
    setFormError("");
    try {
      await saveFormData();
    } catch (e) {
      setFormError(`Registration failed! ${e.message}`);
    }
  };

  return (
    <div>
      <div class="container3">
        <form id="signup1" onSubmit={onSubmit} method="POST">
          <div class="hdr">
            <h3>Sign Up</h3>
            <p>You want to fill out this form</p>
          </div>

          <div class="sep"></div>

          <div class="inputs">
            {formError !== undefined && formError.length > 0 ? (
              <div style={{ fontSize: "14px", color: "red", marginBottom: 10 }}>
                {formError}
              </div>
            ) : (
              <></>
            )}

            <input
              type="text"
              placeholder="Name"
              autofocus
              onChange={set("name")}
              value={values.name}
              required
            />
            <input
              type="text"
              placeholder="Username"
              onChange={set("username")}
              value={values.username}
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={set("email")}
              value={values.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={set("password")}
              value={values.password}
              required
            />
            <input
              type="password"
              placeholder=" Repeat Password"
              onChange={set("repassword")}
              value={values.repassword}
              required
            />
            <div class="checkbox">
              <input name="checky" id="checky" value="1" type="checkbox" />
              <label class="terms">I accept the terms of use</label>
            </div>

            <button id="submit" type="submit">
              SIGN UP FOR INVITE NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
