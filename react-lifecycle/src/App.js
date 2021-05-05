import { useState } from "react";

import "./App.css";
import TestComponent from "./components/TestComponent";

export default function App() {
  const [isVisible, SetIsVisible] = useState(true);
  return (
    <div className="App">
      {isVisible ? <TestComponent color="red" /> : null}
      <button onClick={() => SetIsVisible(false)}>REMOVE</button>
    </div>
  );
}
