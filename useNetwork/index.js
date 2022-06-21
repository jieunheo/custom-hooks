import React from "react";
import { useNetwork } from "./useNetwork";

const App = () => {
  const hadlerNetworkChange = (online) => {
    console.log(online ? "OnLine" : "OffLine");
  };
  const onLine = useNetwork(hadlerNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "OnLine" : "OffLine"}</h1>
    </div>
  );
};

export default App;