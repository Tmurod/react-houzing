import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow1.svg";

export const Container = styled.div`
position: relative;
`;

export const Arrow = styled(arrow)`
position: absolute;
top: 50%;
width: 45px;
height: 45px;
padding: 18px;
background: grey;
border-radius: 50%;
transform: ${({ left }) => left ? "rotate(180deg)" : "rotate(0deg)"};
left: ${({ left }) => !left && "20px"};
right: ${({ left }) => left && "20px"};
cursor: pointer;
:hover {
  opacity: 0.3;
}
`;

export const Img = styled.img`
width: 100%;
`;

export const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0, 0, 0, 0.65);
`;

export const Content = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
`

Content.Title = styled.h2`
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
`

Content.Subtitle = styled.h3`
padding-top: 20px;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
`

Content.Price = styled.h2`
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
padding-top: 30px;
`;