import React from "react";
import "../Css/card.css";
import ExpenseDate from "./ExpenseDate";

function Card(props) {
  const inSurance = props.inSurance.map((item, idx) => (
    <div key={idx} className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.amount}원</div>
      </div>
    </div>
  ));
  return <div>{inSurance}</div>;
}

export default Card;
