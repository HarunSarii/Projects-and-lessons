import User from "./components/User";
import User2 from "./components/User2";
import Card from "./components/Card2";
import "./App.css";

function App() {
  const motto = "Way to Reinvent Yourself";
  return (
    <div className="App">
      <Card name="Cody Pines" job="React Developer" />
      <Card name="McCarthy Silva" job="FS Developer" />
      <Card name="Adam Smith" job="AWS Developer" />
    </div>
  );
}

export default App;
