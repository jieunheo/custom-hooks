import React from "react";
import { useTabs } from "./useTabs";

const contents = [
  {
    tab: "Section 1",
    content: "Hello, i'm section 1."
  },
  {
    tab: "Section 2",
    content: "Hello, i'm section 2."
  }
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div className="App">
      {contents.map((section, index) => (
        <button key={section.tab} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  );
};

export default App;