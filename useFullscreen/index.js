import React, { useRef } from "react";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnsmLhcJQjko9i0M9Td4RBfMoTY3ktDfmJBMJHrx4hEE2vWpQzx1vsB2KbP2p33vpGno&usqp=CAU"
          alt="고양이"
        />
        <button onClick={exitFull}>Exit Full Screen</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

export default App;