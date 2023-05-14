import Properties from "../components/properties";
import ContactsPage from "../pages/contacts";
import HomePage from "../pages/home";

const navbar = [
    { id: 1, title: "Home", path: "/home", private: false, hidden: false, element: <HomePage /> },
    { id: 2, title: "Properties", path: "/properties", private: false, hidden: false, element: <Properties /> },
    { id: 3, title: "Contacts", path: "/contacts", private: false, hidden: false, element: <ContactsPage /> },
];

export default navbar;