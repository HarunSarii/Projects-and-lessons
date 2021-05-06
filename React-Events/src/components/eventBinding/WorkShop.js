import { Component } from "react";

export default class WorkShop extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
  }
  //   state = { message: "Hello" };

  //   handleClick() {
  //     this.setState({ message: "Goodbye!" });
  //   }

  //   handleClick(name) {
  //     this.setState({ message: `Goodbye ${name}` });
  //     console.log("this: ", this);
  //   }

  handleClick = (name) => {
    this.setState({ message: `Goodbye ${name}` });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>EventBinding</h2>
        <button onClick={this.handleClick.bind(this)}>Click1</button>
        <button onClick={() => this.handleClick("Harun")}>Click2</button>
        <button onClick={() => this.handleClick("Sarı")}>Button3</button>
      </div>
    );
  }
}
