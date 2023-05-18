import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as phone } from "../../assets/icons/phone.svg";
import { ReactComponent as email } from "../../assets/icons/email 1.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Section = styled.div`
background: #0D263B;
margin-top: 48px;

`;

export const Conteiner = styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;
`;

export const Content = styled.div`
`;

export const ContentInfo = styled.div`
display: flex;
justify-content: space-around;
padding-top: 48px;
`;

export const ContanctInfo = styled.div`
display: flex;
align-items: center;
gap: ${({ icon }) => icon ? "32px" : "22px"};
padding-top: 20px;
`;

ContentInfo.ContentText = styled.div`
padding-bottom: 24px;
`;

export const Subtitle = styled.h3`
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
cursor: pointer;
padding-bottom: 12px;
`;

export const Text = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 20px;
padding-top: ${({ address }) => address ? "" : "20px"};
color: #FFFFFF;
cursor: pointer;
width: ${({ address }) => address && "256px"};
transition: 0.8s;
`;

export const Icons = styled.div``;

Icons.Location = styled(location)``;
Icons.Phone = styled(phone)``;
Icons.Email = styled(email)``;
Icons.Facebook = styled(facebook)`
cursor: pointer;
`;
Icons.Twitter = styled(twitter)`
cursor: pointer;
`;
Icons.Instagram = styled(instagram)`
cursor: pointer;
`;
Icons.Linkedin = styled(linkedin)`
cursor: pointer;
`;
Icons.Logo = styled(logo)`
padding: 0 130px;
`;

export const ContentBorder = styled.div`
width: 100%;
height: 1px;
background: rgba(255, 255, 255, 0.15);
margin-bottom: 16px;
`;

export const ContentFooter = styled.div`

`;