import styled from "styled-components";
import Nav from "./nav.js/nav";
import logo from "../../assets/icons/logo.svg"
import NavButton from "./navButton/button";

let Div = styled.div`
display: flex;
justify-content: space-between;
background: #0D263B;
align-items: center;
padding: 10px 10px;
`

let Navbar = () => {
    return (
        <Div>
            <img src={logo} alt="logo" />
            <Nav />
            <NavButton />
        </Div>
    );
}

export default Navbar;