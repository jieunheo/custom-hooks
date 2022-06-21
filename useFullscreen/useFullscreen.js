import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    // cross browsing
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        // Chrome
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        // firefox
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        // opera
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // Microsoft
        element.current.msRequestFullscreen();
      }
    }

    runCb(true);
  };

  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      // Chrome
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Microsoft
      document.msExitFullscreen();
    }
    runCb(false);
  };

  return {
    element,
    triggerFull,
    exitFull
  };
};