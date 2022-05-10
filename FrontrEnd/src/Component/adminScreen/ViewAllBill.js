import React from "react";
import { getResponse } from "../requestComponent/RequestService";

class ViewAllBills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ebReadingList: [],
    };
  }

  componentDidMount = () => {
    this.fetchEbReadingsUsers();
  };

  fetchEbReadingsUsers = async () => {
    getResponse(
      "get",
      (response) => {
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          const { data } = response;
          if (data !== undefined) {
            console.log("ebReading:", data);
            this.setState({
              ebReadingList: data,
            });
          }
        }
      },
      "ebReading/getAllReadings"
    );
  };

  render = () => {
    const { ebReadingList } = this.state;
    return (
      <>
        <div>
          <h1>View all Bills</h1>
        </div>
        <div style={{ margin: "100px", marginTop: 30 }}>
          <table
            width={"100%"}
            style={{ fontSize: 16, border: "1px solid grey" }}
          >
            <thead>
              <tr>
                <td>User name</td>
                <td>Reading Value</td>
                <td>Month</td>
                <td>Year</td>
                <td>Reading amount</td>
                <td>Penalty amount</td>
                <to>Total amount</to>
                <td>Payment status</td>
              </tr>
            </thead>
            <tbody>
              {ebReadingList.map((ebReading, index) => (
                <tr>
                  <td>{ebReading.user.name}</td>
                  <td>{ebReading.reading}</td>
                  <td>{ebReading.month}</td>
                  <td>{ebReading.year}</td>
                  <td>{ebReading.ebBill.readingAmount}</td>
                  <td>{ebReading.ebBill.penalty}</td>
                  <td>{ebReading.ebBill.totalAmount}</td>
                  <td>{ebReading.ebBill.isPaid ? "Paid" : "Not Yet Paid"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  };
}

export default ViewAllBills;
