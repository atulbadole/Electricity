import React from "react";

class EbBillTable extends React.Component {
  render = () => {
    const { readings, clickPay } = this.props;
    return (
      <div style={{ margin: "100px", marginTop: 30 }}>
        <table
          width={"100%"}
          style={{ fontSize: 16, border: "1px solid grey" }}
        >
          <thead>
            <tr>
              <td>Month</td>
              <td>Year</td>
              <td>Reading Value</td>
              <td>Reading amount</td>
              <td>Penalty amount</td>
              <to>Total amount</to>
              <td>Payment status</td>
            </tr>
          </thead>
          <tbody>
            {readings.map((ebReading, index) => (
              <tr>
                <td>{ebReading.month}</td>
                <td>{ebReading.year}</td>
                <td>{ebReading.reading}</td>
                <td>{ebReading.ebBill.readingAmount}</td>
                <td>{ebReading.ebBill.penalty}</td>
                <td>{ebReading.ebBill.totalAmount}</td>
                <td>
                  {ebReading.ebBill.isPaid ? (
                    "Paid"
                  ) : (
                    <button
                      onClick={() => clickPay(ebReading.id)}
                      style={{ padding: 4, width: 70, cursor: "pointer" }}
                    >
                      Pay
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default EbBillTable;
