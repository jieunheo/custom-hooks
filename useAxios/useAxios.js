import { useState, useEffect } from "react";
import defaultAxios from "axios";

export const useAxios = (objs, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  if (!objs.url) {
    return;
  }

  const refetch = () => {
    setState({
      loading: true,
      error: null,
      data: null
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(objs)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data: data
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error: error
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};
