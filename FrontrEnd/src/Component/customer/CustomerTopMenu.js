import React from "react";

export default function CustomerTopMenu({ logoutClicked, setSelectedMenu }) {
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
            onClick={() => setSelectedMenu("ViewMyBills")}
          >
            My Bills
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedMenu("ViewMyUnPaidBill")}
          >
            Unpaid Bill
          </a>
          <a style={{ cursor: "pointer" }} onClick={logoutClicked}>
            Logout
          </a>
        </nav>
      </header>
    </div>
  );
}
