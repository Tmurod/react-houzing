import styled from "styled-components";
import { ReactComponent as heart } from "../../assets/icons/icons.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar 1.svg";
import { ReactComponent as download } from "../../assets/icons/download.svg";


export const Icons = styled.div``;

Icons.Heart = styled(heart)``;
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Calendar = styled(calendar)``;
Icons.Download = styled(download)`
margin-right: 10px;
`;

export const Container = styled.div`
width: 100%;
max-width: 1440px;
padding: 0 130px;
margin: 0 auto;
`;

export const ImageContent = styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

export const SubimageContent = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;


export const SubImages = styled.div`
display: flex;
gap: 20px;
`;

export const Img = styled.img`
width: 100%;
min-width: 250px;
`;

export const Content = styled.div`
display: flex;
gap: 20px;
`;

export const UserContent = styled.div`
flex: 1;
`;

export const ContentInfo = styled.div`
flex: 3;
width: 100%;
max-width: 880px;
min-width: 700px;
`;

export const HomeInfo = styled.div`
display: flex;
flex-direction: column;
`;

export const HomeTitle = styled.div`
display:flex;
justify-content: ${({ end }) => end ? "end" : "space-between"};
`;

export const HomeTitleInfo = styled.div`
align-items: center;
display: ${({ flex }) => flex && "flex"};
gap: ${({ flex }) => flex && "24px"};
padding-top: ${({ top }) => top && '24px'};
`;

export const Description = styled.div`
padding-top: 49px;
p {
    color: #696969;
    padding:  16px 0 28px 0;
}
`;

export const Section = styled.div`
h2 {
    margin-top: 48px;
}

.div {
    display: flex;
    gap: 20px;
    padding-top: 16px;
    flex-wrap: ${({ wrap }) => wrap && "wrap"};

    .download {
        display: flex;

        p {
            font-size: 14px;
            line-height: 20px;
            color: #696969;
        }
        a {
            font-weight: 600;
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.01em;
            text-decoration-line: underline;
            color: #0061DF;
            margin-left: 20px;
        }
    }
}

.border {
    margin-top: 48px;
    height: 2px;
    background: #E6E9EC;
}
`;

