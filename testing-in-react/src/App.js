import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Button size={"large"} color={"teal"}>
        Hello
      </Button>
      <Button size={"large"} color={"teal"}>
        Click
      </Button>
      <Counter />
    </div>
  );
}

export default App;
