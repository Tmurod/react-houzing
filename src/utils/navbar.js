import Properties from "../components/properties";
import ContactsPage from "../pages/contacts";
import HomePage from "../pages/home";
import SignIn from "../components/signIn";

const navbar = [
    { id: 1, title: "Home", path: "/home", private: false, hidden: false, element: <HomePage /> },
    { id: 2, title: "Properties", path: "/properties", private: false, hidden: false, element: <Properties /> },
    { id: 3, title: "Contacts", path: "/contacts", private: false, hidden: false, element: <ContactsPage /> },
    { id: 4, title: "signIn", path: "/signIn", private: false, hidden: false, element: <SignIn /> },
];

export default navbar;