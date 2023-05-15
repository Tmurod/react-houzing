import styled from "styled-components";
import { ReactComponent as houses } from "../../../assets/icons/Group.svg";

export const Container = styled.div`
width: fit-content;
position: relative;
`

export const Input = styled.input`
border: 1px solid #E6E9EC;
border-radius: 2px;
width: ${({ width }) => width ? `${width}px` : "100%"};
height: ${({ height }) => height ? `${height}px` : "44px"};
padding-left: ${({ icon }) => icon ? `${icon}px` : "20px"};
`;

export const Icon = styled.div`
/* position: absolute; */
`;