import { createContext, useReducer } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH":
        console.log(action.payload);
        return { ...state, searchTerm: action.payload };

      case "ADD-MOVIES":
        return { ...state, movies: action.payload };
      default:
        return;
    }
  };

  const initialState = {
    searchTerm: "",
    movies: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
