import styled from "styled-components";

export let Input = styled.input`
margin-right: 20px;
font-size: 14px;
line-height: 20px;
color: #0D263B;
padding: 12px
`;
export let Div = styled.div`

`;
export let H2 = styled.h2`
font-size: 16px;
line-height: 24px;
color: #0D263B;
paddign-bottom: 10px
`;


let Address = () => {
    return (
        <Div>
            <H2>Address</H2>
            <Div>
                <Input placeholder="Country" />
                <Input placeholder="Region" />
                <Input placeholder="City" />
                <Input placeholder="Zip code" />
            </Div>
        </Div>
    );
}

export default Address;