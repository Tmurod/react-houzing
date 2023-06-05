import styled from "styled-components";

export const Container = styled.div`
width: 100%;
max-width: 1140px;
margin: 0 auto;
padding-top: 96px;
padding-bottom: 30px;
display: flex;
flex-direction: column;

.slider {
  
  .slick-prev:before, .slick-next:before {
    color: grey;
    font-size: 40px;
  }
}
`;

export const ContentTitle = styled.div`
text-align: center;
`;

export const Title = styled.h1`
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #0D263B;
`;

export const Text = styled.p`
font-size: 16px;
line-height: 24px;
color: #696969;
`;