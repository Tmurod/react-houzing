import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow1.svg";

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin: 0 auto;
width: 100%;
max-width: 1440px;
padding: 0 130px 130px 130px;

.slick-prev:before, .slick-next:before {
  color: grey;
  font-size: 40px;
}

`;

export const Title = styled.div`
text-align: center;
margin-bottom: 32px;
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