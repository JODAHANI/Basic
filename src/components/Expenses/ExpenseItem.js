import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  console.log("app id");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
