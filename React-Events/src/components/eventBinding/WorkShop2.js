import React, { Component } from "react";

export default class WorkShop2 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "Jonas",
      //   birinci: {
      //     name: "Harun",
      //     age: 29,
      //   },
      //   ikinci: {
      //     name: "Hasan",
      //     age: 25,
      //  }
    };
  }

  handleClickIncrease() {
    this.setState({ count: this.state.count + 1 });
  }

  handleClickDecrease() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleNameChange = () => {
    this.setState({ name: "Furkan" });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickIncrease}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClickDecrease}>-</button>
        <button onclick={this.handleReset}>RESET</button>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
