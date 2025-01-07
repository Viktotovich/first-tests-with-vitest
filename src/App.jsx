import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  function handleClick() {
    setHeading("Radical Rhinos");
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
}

export default App;
