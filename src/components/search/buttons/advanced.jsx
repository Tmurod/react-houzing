import styled from "styled-components";
import AdvancedIcon from "../../../assets/icons/Group.svg"

let Button = styled.button`
font-size: 14px;
line-height: 20px;
color: #0D263B;
border: 1px solid #E6E9EC;
border-radius: 2px;
padding: 12px 16px;
cursor: pointer;
margin-right: 20px;
`;

let AdvancedButton = () => {
    return (
        <Button><img src={AdvancedIcon} alt="" /> Advanced</Button>
    );
}

export default AdvancedButton;