import React from "react";
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Hello", { body: "i love React!" });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;