import { createContext, useContext, useReducer } from "react";

const Create_Context = createContext();

export const State_Provider = ({ initialValue, reducer, children }) => (
  <Create_Context.Provider value={useReducer(reducer, initialValue)}>
    {children}
  </Create_Context.Provider>
);

export const State_Value = () => useContext(Create_Context);
