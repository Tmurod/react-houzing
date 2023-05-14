import styled from "styled-components";


export const Input = styled.input`
border: 1px solid #E6E9EC;
border-radius: 2px;
width: ${({ width }) => width ? `${width}px` : "100%"};
height: ${({ height }) => height ? `${height}px` : "44px"}
`;
