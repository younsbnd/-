import React from "react";
import "./widgetLg.scss";
import { transactions } from "../../datas";
const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h2>Latest Transaction</h2>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="widgetLgUser">
                <img src={transaction.img} alt={transaction.name} />
                <p>{transaction.name}</p>
              </td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className={`btn ${
                    transaction.status == "Approved"
                      ? "approvedBtn"
                      : transaction.status == "Declined"
                      ? "declinedBtn"
                      : "pendingBtn"
                  }`}
                >
                  {transaction.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
