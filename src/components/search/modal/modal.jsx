import styled from "styled-components";
import Address from "./address/address";
import Info from "./info/info";
import Price from "./price/price";
import Cansel from "./buttons/cansel";
import Submit from "./buttons/submit";

let Container = styled.div`
width: 920px;
background: #FFFFFF;
border-radius: 5px;

`;

let Div = styled.div`
background: #F6F8F9;
border-radius: 0px 0px 5px 5px;
display: flex;
margin-top: 20px;
justify-content: end;
padding: 20px;
`



let Modal = () => {
    return (
        <Container>
            <Address />
            <Info />
            <Price />
            <Div button>
                <Cansel />
                <Submit />
            </Div>
        </Container>
    );
}

export default Modal;