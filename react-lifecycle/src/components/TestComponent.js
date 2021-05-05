import { Component } from "react";
// var myT;
class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test name",
      color: "this.props.color",
      counter: 0,
    };
    console.log("Hello from constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Hello from get Derived State From Props");
    return { color: "green" };
  }

  componentDidMount() {
    console.log("Hello from Comp. DidMount");
    // myT = setTimeout(() => {
    //   this.setState({ counter: this.state.counter + 1 });
    // }, 3000);
  }

  getSnapshotBeforeUpdate(prevprops, prevstate) {
    console.log("prevpros: ", prevprops);
    console.log("prevstate: ", prevstate);
    return null;
  }

  componentDidUpdate() {
    console.log("Hello from Comp.DidUpdate");
  }

  shouldComponentUpdate() {
    console.log("Hello from componentDidUpdate");
    return this.state.counter < 5 ? true : false;
  }

  componentWillUnmount() {
    console.log("Hello from componentWillUnmount");
    // clearTimeout(myT);
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log("rendered state: ", this.state);
    return (
      <div>
        <p>This is a paragraph in Test Component</p>
        <p>{this.state.counter}</p>
        <button onclick={this.handleClick}>INCREASE</button>
      </div>
    );
  }
}

export default TestComponent;
