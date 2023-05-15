import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";

export const Container = styled.div`
width: 380px;
height: 429px;
border: 3px solid purple;
`;

export const Img = styled.img`
width: 100%;
max-height: 220px;
object-fit: cover;
margin-bottom: 24px;
`;

export const CardInfo = styled.div`
padding: 0 20px;
`;

export const CardIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
align-content: center;
text-align: center;
padding-top: 18px;
`;

CardIcons.Item = styled.div`

`;

export const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Car = styled(car)``;
Icons.Ruler = styled(ruler)``;

export const CardPrice = styled.div`
border-top: 1px solid #E6E9EC;
padding-top: 16px;
padding-bottom: 8px;
`;

CardPrice.Price = styled.div``;

