import styled from "styled-components";
import iconInput from "../../../assets/icons/Vector.svg";

let Input = styled.input`
font-size: 14px;
line-height: 20px;
color: #0D263B;
width: 829px;
`;

let SearchInput = () => {
    return (
        <Input placeholder= "Enter an address, neighborhood, city, or ZIP code" ></Input>
    );
} 

export default SearchInput;
