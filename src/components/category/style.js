import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 100%
max-width: 1440px;
margin: 0 auto;
`;

// export const Title = styled.h1`
// font-weight: 600;
// font-size: 28px;
// line-height: 36px;
// letter-spacing: -0.02em;
// color: #0D263B;
// padding-bottom: 5px;
// `;

// export const ContentTitle = styled.div`
// padding-bottom: 32px;
// `;

export const Card = styled.div``;

export const CategoryCard = styled.div`
width: 280px;
height: 350px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(.jpg);

box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
border-radius: 3px;

`;