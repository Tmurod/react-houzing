import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as heart } from "../../assets/icons/heart.svg"

export const Container = styled.div`
margin: 50px;
width: 380px;
height: 429px;
border: 1px solid #E6E9EC;
border-radius: 3px;
`;

export const Img = styled.img`
width: 100%;
max-height: 220px;
object-fit: cover;
`;

export const CardInfo = styled.div`
padding: 20px 20px;
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
Icons.Resize = styled(resize)``;
Icons.Heart = styled(heart)`
`;

export const CardPrice = styled.div`
border-top: 1px solid #E6E9EC;
padding-top: 16px;
margin-top: 16px;
display: flex;
justify-content: space-between;
align-items: center;
.icons{
  display: flex;
  align-items: center;
  gap: 20px;
}
`;

CardPrice.Price = styled.div`
display: ${({ flex }) => flex && "flex"};
align-items: ${({ flex }) => flex && "center"};
gap: 20px;
`;

