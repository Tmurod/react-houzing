import styled from "styled-components";

let Button = styled.button`
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
padding: 12px 40px;
border: 1px solid #FFFFFF;
border-radius: 2px;
background: transparent;
cursor: pointer;
`;

let NavButton =() => {
    return (
        <Button>Login</Button>
    );
}

export default NavButton;