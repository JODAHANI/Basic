import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  const classes = "card " + props.className;
  // PR 테스트
  return <div className={classes}>{children}</div>;
};

export default Card;
