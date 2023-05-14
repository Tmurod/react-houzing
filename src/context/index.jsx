import { createContext } from "react"
import PropertiesContext from "./ProportiesContext";

export const Rocontext = createContext();

const RootContext = ({ children }) => {
    return (
        <Rocontext.Provider>
            <PropertiesContext>
                {children}
            </PropertiesContext>
        </Rocontext.Provider>
    );
}

export default RootContext;