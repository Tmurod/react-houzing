import styled from "styled-components";
import lupa from "../../../assets/icons/001-loupe.svg";

let Button = styled.button`
padding: 12px 54px;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
background: #0061DF;
border: 1px solid #0061DF;
border-radius: 2px;
cursor: pointer;
`;

let SearchButton = () => {
    return (
        <Button> <img src={lupa} alt="lupa" /> Search</Button>
    );
}

export default SearchButton;