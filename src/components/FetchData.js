import React, { useContext, useEffect } from "react";
import { Context } from "./Context";

const FetchData = () => {
  const { state, dispatch } = useContext(Context);
  console.log(state);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=57e0cae2&s=${state.searchTerm}`
      );
      const data = await res.json();
      console.log("Fetch Data", data.Search);
      dispatch({ type: "ADD-MOVIES", payload: data.Search });
    };

    getData();
  }, [state.searchTerm]);
};

export default FetchData;
