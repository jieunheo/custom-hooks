import React from "react";
import { useConfirm } from "./useDonfirm";

const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confitmDelete = useConfirm("Are you sure?", deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={confitmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
