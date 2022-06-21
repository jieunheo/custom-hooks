import React from "react";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;