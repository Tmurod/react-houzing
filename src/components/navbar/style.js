import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Section = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
background: #0D263B;
color: #fff;
padding: 0 130px;
height: 64px;
margin: 0 auto;
width: 100%;
// max-width: 1440px;
`;

export const NavbarContent = styled.div`
display: ${({ link }) => link && "flex"};
gap: ${({ link }) => link && "64px"};
.active {
    color: #3e78c3;
}
`;

export const Logo = styled.img`
cursor: pointer;
`;

export const Link = styled(NavLink)`
text-decoration: none;
color: #fff;
`;