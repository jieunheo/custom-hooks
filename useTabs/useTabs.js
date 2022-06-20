import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  const [currentIntex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIntex],
    // changeItem: (index) => setCurrentIndex(index)
    changeItem: setCurrentIndex
  };
};