import { Outlet, useNavigate } from "react-router-dom"
import { Container, Logo, NavbarContent, Section, Link } from "./style";
import logo from "../../assets/icons/logo.svg";
import navbar from "../../utils/navbar";

// import {  } from "./style"

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Section>
                <NavbarContent>
                    <Logo src={logo} onClick={() => navigate("/home")} />
                </NavbarContent>
                <NavbarContent link>
                    {
                        navbar.map((val) => {
                            return (
                                <Link key={val.id} to={val.path} className={({ isActive }) => isActive && "active"}>{val.title}</Link>
                            );
                        })
                    }
                </NavbarContent>
                <NavbarContent>
                    <button>Login</button>
                </NavbarContent>
            </Section>
            <Outlet />
        </Container>
    );
}

export default Navbar;