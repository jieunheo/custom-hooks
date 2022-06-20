import React from "react";
import { useClick } from "./useClick";

const App = () => {
  const sayHello = () => {
    console.log("Hello");
  };
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
