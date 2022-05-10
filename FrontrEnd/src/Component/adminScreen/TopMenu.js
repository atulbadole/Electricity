import React from "react";
import { LoginScreen } from "../LoginScreen";

export default function TopMenu({ logoutClicked, setSelectedMenu }) {
  return (
    <div style={{ height: "100px" }}>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars" />
        <a href="#" className="logo">
          {" "}
          <i class="fas fa-hiking"></i> <span>Electri</span>City
        </a>
        <nav className="navbar">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMenu("ViewAllBills")}
          >
            View All Bills
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMenu("addBills")}
          >
            Add Bills
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMenu("userList")}
          >
            Show users
          </a>
          <a style={{ cursor: "pointer" }} onClick={logoutClicked}>
            Logout
          </a>
        </nav>
      </header>
    </div>
  );
}
