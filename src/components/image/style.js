import back from "../../assets/images/carousel2.png";
import styled from "styled-components";

export const Container = styled.div`
position: relative;
background: url(${back});
height: 571px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;

export const Blur = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0, 0, 0, 0.65);
`

// background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)

export const Content = styled.div`
position: absolute;
top: 50%;
bottom: 0;
right: 0;
left: 50%;
transform: translate(-50%, -50%);

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: #fff;
row-gap: 48px;

font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
`;

