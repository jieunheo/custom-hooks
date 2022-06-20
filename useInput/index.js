import React from "react";
import { useInput } from "./useInput";

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr. ", maxLen);

  return (
    <div className="App">
      <h1>Hello</h1>
      <input
        type="text"
        placeholder="Name"
        /* value={name.value}
        onChange={name.onChange} */
        {...name}
      />
    </div>
  );
};

export default App;
