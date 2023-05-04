import styled from "styled-components";

let Button = styled.button`
font-size: 14px;
line-height: 20px;
color: #0D263B;
border: 1px solid #0D263B;
border-radius: 2px;
padding: 12px 40px;
`;

let Cansel = () => {
    return (
        <Button>Cancel</Button>
    );
}

export default Cansel;