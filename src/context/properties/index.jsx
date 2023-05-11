import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropContext = createContext();

const PropertiesContext = ({children}) => {
  const [ state, dispatch ] = useReducer(reducer, [])
  return (
    <PropContext.Provider value={[ state, dispatch ]}>
      {children}
    </PropContext.Provider>
  );
}

export default PropertiesContext;