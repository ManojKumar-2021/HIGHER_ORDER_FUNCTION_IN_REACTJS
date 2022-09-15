import { useState } from "react";
import "./styles.css";

//main function
export default function App() {
  return (
    <div className="App">
      <h1> Higher order function</h1>
      <HOCRed compo={Counter} />
      <HOCGreen compo={Counter} />
      <HOCBlue compo={Counter} />
    </div>
  );
}

//Higher Order Component-1
function HOCRed(props) {
  return (
    <h1 style={{ backgroundColor: "red" }}>
      <Counter />
    </h1>
  );
}

//Higher Order Component-2
function HOCGreen(props) {
  return (
    <h1 style={{ backgroundColor: "green" }}>
      <Counter />
    </h1>
  );
}

//Higher Order Component-3
function HOCBlue(props) {
  return (
    <h1 style={{ backgroundColor: "blue" }}>
      <Counter />
    </h1>
  );
}

//function for input
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
