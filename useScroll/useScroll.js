import { useState, useEffect } from "react";

export const useScroll = () => {
  const [stats, setState] = useState({
    x: 0,
    y: 0
  });

  const getY = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", getY);
    return () => window.removeEventListener("scroll", getY);
  }, []);

  return stats;
};