import { useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";

export const PropContext = createContext();

const PropertiesContext = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <PropContext.Provider value={[state, dispatch]}>
            {children}
        </PropContext.Provider>
    );
}

export default PropertiesContext;