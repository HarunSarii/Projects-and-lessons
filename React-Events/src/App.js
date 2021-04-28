import "./app.css";

// import EventBind from "./components/eventBinding/EventBind";
import MouseEvents from "./components/mouseEvents/MouseEvents";
import KeyboardEvents from "./components/keyboardEvents/KeyboardEvents";

const App = () => {
  return (
    <div className="App">
      {/* <h1>Events in React</h1> */}
      {/* <EventBind /> */}
      {/* <MouseEvents /> */}
      <KeyboardEvents />
    </div>
  );
};

export default App;
