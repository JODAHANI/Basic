import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  const classes = "card " + props.className;

  return <div className={classes}>{children}</div>;
};

export default Card;
