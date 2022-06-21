import React from "react";
import { useFadeIn } from "./useFadeIn";

const App = () => {
  const elementH1 = useFadeIn(1, 2);
  const elementP = useFadeIn(5, 3);
  return (
    <div className="App">
      <h1 {...elementH1}>Hello</h1>
      <p {...elementP}>
        lorem sdfkjl rgjhe asjwrf sjdhf amsrjt slxkcw otisjx nv slfjr
      </p>
    </div>
  );
};

export default App;