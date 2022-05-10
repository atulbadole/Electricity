import React from "react";
import { getResponse } from "../requestComponent/RequestService";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount = () => {
    this.fetchRegisteredUsers();
  };

  fetchRegisteredUsers = async () => {
    getResponse(
      "get",
      (response) => {
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          const { data } = response;
          if (data !== undefined) {
            this.setState({
              userList: data,
            });
          }
        }
      },
      "user/getRegisteredUsers"
    );
  };

  render = () => {
    const { userList } = this.state;
    return (
      <>
        <div>
          <h1>Registered Users</h1>
        </div>
        <div style={{ margin: "100px", marginTop: 30 }}>
          <table
            width={"100%"}
            style={{ fontSize: 16, border: "1px solid grey" }}
          >
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Username</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, index) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
}

export default UserList;
