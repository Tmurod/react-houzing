import PropertiesContext from "./ProportiesContext";

const RootContext = ({ children }) => {
    return (
        <PropertiesContext>
            {children}
        </PropertiesContext>
    );
}

export default RootContext;