import React from "react";
import "./Pay.css";

function Pay() {
  return (
    <div className="cntnr">
      <div className="lgbox">
        <img src={require("../Photos/png1.jpg")} />
        <h1>Login Here</h1>
        <form>
          <p>Username</p>
          <input type="text" name="" placeholder="Enter Username" />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    </div>
  );
}
export default Pay;
