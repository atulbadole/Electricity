import React from "react";
import { getResponse } from "../requestComponent/RequestService";
import "../Signup.css";

class PayBill extends React.Component {
  constructor(props) {
    super(props);
    const { selectedReadingId, tokenUserId } = this.props;
    this.selectedReadingId = selectedReadingId;
    this.tokenUserId = tokenUserId();
    this.state = {
      cardNumber: undefined,
      ebReadingData: undefined,
      amount: undefined,
      isPaid: false,
    };
  }

  componentDidMount = () => {
    this.fetchEbDetails();
  };

  fetchEbDetails = () => {
    getResponse(
      "get",
      (response) => {
        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`);
        } else {
          const { data } = response;
          if (data !== undefined) {
            console.log(data);
            const amount = this.getAmount(data);
            this.setState({
              ebReadingData: data,
              amount,
            });
          }
        }
      },
      `ebReading/getReadingById/${this.selectedReadingId}`
    );
  };

  setCardNumber = (cardNumber) => {
    this.setState({ cardNumber });
  };

  getAmount = (ebReadingData) => {
    let amount = 0;
    if (ebReadingData !== undefined) {
      if (ebReadingData.ebBill !== undefined) {
        amount = ebReadingData.ebBill.totalAmount;
      }
    }
    console.log("amount -- ", amount);
    return amount;
  };

  payBill = (event) => {
    event.preventDefault(); // Prevent default submission

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
              alert("Bill paid!");
              this.setState({
                isPaid: true,
              });
            } else {
              this.setFormError(error);
            }
          }
        }
      },
      "ebReading/payBill",
      { userId: this.tokenUserId, ebReadingId: this.selectedReadingId }
    );
  };

  render = () => {
    const { cardNumber, amount, isPaid } = this.state;

    return (
      <>
        <div>
          <h1>Pay Bill</h1>
        </div>
        <div className="container3">
          <form onSubmit={this.payBill}>
            <span style={{ fontSize: 16 }}>Enter Card number</span>
            <br />
            <input
              type="text"
              placeholder="Card number(XXXX-XXXX-XXXX-XXXX)"
              onChange={(e) => this.setCardNumber(e.target.value)}
              value={cardNumber}
              required
              style={{ padding: 8, marginTop: 10 }}
            />
            <br />
            <span style={{ fontSize: 16 }}>Bill amount</span>
            <br />
            <input
              type="text"
              value={amount}
              disabled
              style={{ padding: 8, marginTop: 10 }}
            />
            <br />
            <br />
            {!isPaid ? (
              <button
                id="submit"
                type="submit"
                style={{ padding: 8, width: 70, cursor: "pointer" }}
              >
                Pay
              </button>
            ) : (
              <span style={{ fontSize: 16 }}>Paid</span>
            )}
          </form>
        </div>
      </>
    );
  };
}

export default PayBill;
