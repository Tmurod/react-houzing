import styled from "styled-components";
import { ReactComponent as smile } from "../../assets/icons/smile.svg";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../assets/icons/maps.svg";

export const Container = styled.div`
background: #F5F7FC;
margin-top: 48px;
margin-bottom: 96px;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 1440px;
margin: 0 auto;
text-align: center;
padding: 0 130px;
`;

export const Title = styled.h1`
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #0D263B;
padding-top: 48px;
`

export const Subtitle = styled.p`
font-size: 16px;
line-height: 24px;
color: #696969;
font-weight: 400;
padding-bottom: 40px;
margin-top: 8px;
`;

Content.Title = styled.div``;

Content.Info = styled.div`
display: flex;
justify-content: space-between;
gap: 77px;
`;

Content.Text = styled.div``;

export const Icons = styled.div``;

Icons.Smile = styled(smile)`
margin-bottom: 24px;
`;
Icons.House = styled(house)`
margin-bottom: 24px;
`;
Icons.Calculator = styled(calculator)`
margin-bottom: 24px;
`;
Icons.Maps = styled(maps)`
margin-bottom: 24px;
`;