import React, { useState } from "react";
import { LoginScreen } from "../LoginScreen";
import CustomerAllBillComponent from "./CustomerBillComponent";
import CustomerUnPaidBill from "./CustomerUnPaidBill";
import CustomerTopMenu from "./CustomerTopMenu";
import PayBill from "./PayBill";

export default function CustomerDashboard({
  removeToken,
  setToken,
  token,
  tokenUserId,
}) {
  const [selectedMenu, setSelectedMenu] = useState("userList");
  const [selectedReadingId, setSelectedReadingId] = useState(undefined);

  const logoutClicked = () => {
    console.log("removeToken -- ", removeToken);
    removeToken();
    return <LoginScreen setToken={setToken} />;
  };

  const renderItem = () => {
    switch (selectedMenu) {
      case "ViewMyBills":
        return (
          <CustomerAllBillComponent
            tokenUserId={tokenUserId}
            selectedReadingId={selectedReadingId}
            setSelectedReadingId={setSelectedReadingId}
            setSelectedMenu={setSelectedMenu}
          />
        );
      case "ViewMyUnPaidBill":
        return (
          <CustomerUnPaidBill
            tokenUserId={tokenUserId}
            setSelectedReadingId={setSelectedReadingId}
            selectedReadingId={selectedReadingId}
            setSelectedMenu={setSelectedMenu}
          />
        );
      case "PayBill":
        return (
          <PayBill
            tokenUserId={tokenUserId}
            setSelectedReadingId={setSelectedReadingId}
            selectedReadingId={selectedReadingId}
            setSelectedMenu={setSelectedMenu}
          />
        );
      default:
        return (
          <CustomerAllBillComponent
            tokenUserId={tokenUserId}
            setSelectedReadingId={setSelectedReadingId}
            selectedReadingId={selectedReadingId}
            setSelectedMenu={setSelectedMenu}
          />
        );
    }
  };

  return (
    <>
      <CustomerTopMenu
        logoutClicked={logoutClicked}
        setSelectedMenu={setSelectedMenu}
      />
      <br />
      {renderItem()}
    </>
  );
}
