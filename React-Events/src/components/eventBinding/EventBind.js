import { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
    // this.handleClick = this.handleClick.bind(this); /[3]
  }
  //   handleClick() {
  //     this.setState({ message: "Goodbye!" });
  //     console.log("this: ", this);
  //   } //[1]

  //   handleClick(name) {
  //     this.setState({ message: `Goodbye! ${name}` });
  //     console.log("this: ", this);
  //   } //[2]

  //   handleClick() {
  //     this.setState({ message: `Goodbye!` });
  //     console.log("this: ", this);
  //   } //[3]

  handleClick = () => {
    this.setState({ message: `Goodbye!` });
    console.log("this: ", this);
  }; //[4]

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <h2>EventBinding</h2>
        <button onClick={this.handleClick.bind(this)}>Click1</button>
        <button onClick={() => this.handleClick("Janet")}>Click2</button>
        <button onClick={this.handleClick}>Click3</button>
        <button onClick={this.handleClick}>Click4</button>
      </div>
    );
  }
}
