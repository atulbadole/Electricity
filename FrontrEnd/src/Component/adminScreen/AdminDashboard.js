import React, { useState } from "react";
import { LoginScreen } from "../LoginScreen";
import AddBillToUser from "./AddBillToUser";
import TopMenu from "./TopMenu";
import UserList from "./UserList";
import ViewAllBills from "./ViewAllBill";

export default function AdminDashboard({ removeToken, setToken }) {
  const [selectedMenu, setSelectedMenu] = useState("userList");

  const logoutClicked = () => {
    console.log("removeToken -- ", removeToken);
    removeToken();
    return <LoginScreen setToken={setToken} />;
  };

  const renderItem = () => {
    switch (selectedMenu) {
      case "userList":
        return <UserList />;
      case "ViewAllBills":
        return <ViewAllBills />;
      case "addBills":
        return <AddBillToUser />;
      default:
        return <UserList />;
    }
  };

  return (
    <>
      <TopMenu
        logoutClicked={logoutClicked}
        setSelectedMenu={setSelectedMenu}
      />
      <br />
      {renderItem()}
    </>
  );
}
