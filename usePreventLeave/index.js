import { usePreventLeave } from "./usePreventLeave";

const App = () => {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePreve}>protect</button>
      <button onClick={disablePreve}>unprotect</button>
    </div>
  );
};

export default App;