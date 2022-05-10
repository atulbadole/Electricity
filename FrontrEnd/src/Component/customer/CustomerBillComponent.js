import React from "react";
import { getResponse } from "../requestComponent/RequestService";
import EbBillTable from "./EbBillTable";

class CustomerAllBillComponent extends React.Component {
  constructor(props) {
    super(props);
    const { tokenUserId } = this.props;
    this.loggedInUserId = tokenUserId();
    this.state = {
      myBills: [],
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
              myBills: data,
            });
          }
        }
      },
      `ebReading/getAllReadingsForUser/${this.loggedInUserId}`
    );
  };

  clickPay = (readingId) => {
    const { setSelectedReadingId, setSelectedMenu } = this.props;
    setSelectedReadingId(readingId);
    setSelectedMenu("PayBill");
    console.log("reading id: ", readingId);
  };

  render = () => {
    const { myBills } = this.state;
    return (
      <>
        <div>
          <h1>View all My Bills</h1>
        </div>
        <EbBillTable readings={myBills} clickPay={this.clickPay} />
      </>
    );
  };
}

export default CustomerAllBillComponent;
