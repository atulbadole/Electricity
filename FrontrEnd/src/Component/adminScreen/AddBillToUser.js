import React from "react";
import "../Signup.css";
import { getResponse } from "../requestComponent/RequestService";

class AddBillToUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      validUserId: undefined,
      userData: undefined,
      reading: 0,
      penaltyAmount: 0,
      month: undefined,
      year: undefined,
      error: "",
    };
  }

  fetchUser = () => {
    console.log("state: ", this.state);
    const { userId } = this.state;
    console.log("userId: ::::", userId);
    getResponse(
      "get",
      (response) => {
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          const { data } = response;
          if (data !== undefined) {
            console.log(data);
            const { error } = data;
            if (error !== undefined && error.length !== 0) {
              this.setState({
                error: error,
              });
            } else {
              this.setState({
                userData: data,
                validUserId: data.id,
                error: "",
              });
            }
          }
        }
      },
      `user/getUser/${userId}`
    );
  };

  setUserId = (userId) => {
    this.setState({ userId: userId });
  };

  setReading = (reading) => {
    this.setState({ reading });
  };

  setMonth = (month) => {
    this.setState({ month });
  };

  setYear = (year) => {
    this.setState({ year });
  };

  setPenaltyAmount = (penaltyAmount) => {
    this.setState({ penaltyAmount });
  };

  createBillForUser = (event) => {
    event.preventDefault(); // Prevent default submission
    let { validUserId, reading, month, year, penaltyAmount } = this.state;
    if (penaltyAmount === undefined) {
      penaltyAmount = 0;
    }
    let postDataJson = {
      userId: validUserId,
      reading: Number(reading),
      month,
      year: Number(year),
      penaltyAmount: Number(penaltyAmount),
    };

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
              alert("Bill generated!");
              this.setState({
                userId: undefined,
                validUserId: undefined,
                userData: undefined,
                reading: undefined,
                penaltyAmount: undefined,
                month: undefined,
                year: undefined,
                error: "",
              });
            } else {
              this.setFormError(error);
            }
          }
        }
      },
      "ebReading/generateBill",
      postDataJson
    );
  };

  setFormError = (error) => {
    this.setState({ error });
  };

  render = () => {
    const {
      userId,
      validUserId,
      error,
      userData,
      reading,
      month,
      year,
      penaltyAmount,
    } = this.state;
    return (
      <>
        <div>
          <h1>Create a Bill for user</h1>
        </div>
        <div className="container3">
          {error !== undefined && error.length !== 0 ? (
            <div style={{ color: "red", fontSize: 16 }}>{error}</div>
          ) : (
            <></>
          )}
          <input
            type="text"
            placeholder="Customer Id"
            autofocus
            required
            value={userId}
            onChange={(e) => this.setUserId(e.target.value)}
            style={{ padding: 8 }}
          />
          &nbsp;&nbsp;&nbsp;
          <button style={{ padding: 8 }} onClick={() => this.fetchUser()}>
            Fetch user
          </button>
          {userData !== undefined ? (
            <>
              <div style={{ fontSize: 16 }}>Customer Name: {userData.name}</div>
              <form onSubmit={this.createBillForUser}>
                <input type="hidden" value={validUserId} />

                <br />
                <h2>Enter Reading details</h2>
                <input
                  type="number"
                  placeholder="Reading(250) units"
                  autofocus
                  onChange={(e) => this.setReading(e.target.value)}
                  value={reading}
                  required
                  style={{ padding: 8, marginTop: 10 }}
                />

                <input
                  type="text"
                  placeholder="Month(Jan, Feb)"
                  onChange={(e) => this.setMonth(e.target.value)}
                  value={month}
                  required
                  style={{ padding: 8, marginTop: 10 }}
                />

                <input
                  type="number"
                  placeholder="Year(2021)"
                  onChange={(e) => this.setYear(e.target.value)}
                  value={year}
                  required
                  style={{ padding: 8, marginTop: 10 }}
                />

                <input
                  type="number"
                  placeholder="Penalty amount"
                  onChange={(e) => this.setPenaltyAmount(e.target.value)}
                  value={penaltyAmount}
                  style={{ padding: 8, marginTop: 10 }}
                />
                <br />
                <br />
                <button id="submit" type="submit" style={{ padding: 8 }}>
                  Create
                </button>
              </form>
            </>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };
}

export default AddBillToUser;
