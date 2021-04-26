import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
          style={{ width: "100%" }}
        />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
