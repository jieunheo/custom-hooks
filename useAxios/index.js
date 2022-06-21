import React from "react";
import { useAxios } from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "yts.am/api/v2/list_movies.json"
  });

  return (
    <div className="App">
      <h1>{!error && data && data.status}</h1>
      <h2>{!error && loading && "loading"}</h2>
      <h2>{error && "Error"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
