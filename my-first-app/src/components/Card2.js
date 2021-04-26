import React, { Component } from "react";

class Card2 extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  isVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    const { isVisible } = this.state;
    return (
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
          style={{ width: "90%" }}
        />
        {isVisible ? (
          <div>
            <p>
              <b>{this.props.name}</b>
            </p>
            <p>{this.props.job}</p>
          </div>
        ) : null}
        <button className="button" onClick={this.isVisible}>
          Show/Hide
        </button>
      </div>
    );
  }
}
export default Card2;
