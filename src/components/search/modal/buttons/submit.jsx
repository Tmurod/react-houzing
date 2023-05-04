import styled from "styled-components";

let Button = styled.button`
font-size: 14px;
line-height: 20px;
padding: 12px 40px;
background: #0061DF;
border-radius: 2px;
border: none;
color: #FFFFFF;
`;

let Submit = () => {
    return (
        <Button>Cancel</Button>
    );
}

export default Submit;