import React from "react";
import { data } from "../../helpers/data";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((card) => {
        return <div className="cards"></div>;
      })}
    </div>
  );
};
