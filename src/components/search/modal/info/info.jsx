import styled from "styled-components";
import { Div, H2, Input } from "../address/address"


// let Input = styled.input``;

let Info = () => {
    return (
        <Div>
            <H2>Apartment info</H2>
            <Div>
                <Input placeholder="Rooms"/>
                <Input placeholder="Size"/>
                <Input placeholder="Sort"/>
            </Div>
        </Div>
    );
}

export default Info;