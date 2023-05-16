import {  CardIcons, CardInfo, CardPrice, Container, Icons, Img } from "./style";
import image from "../../assets/images/no image.jpg";

const Cards = (props) => {
    return (
        <Container>
            <Img src={props.url || image} />
            <CardInfo>
                <h2 className="title">{props.title || "New Apartment Nice Wiew"}</h2>
                <p className="subtitle">{props.subtitle || "Quincy St, Brooklyn, NY, USA"}</p>
                <CardIcons>
                    <CardIcons.Item>
                        <Icons.Bed />
                        <p>{props.info || "4 Beds"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Bath />
                        <p>{props.info || "5 Baths"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Car />
                        <p>{props.info || "1 Garage"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Ruler />
                        <p>{props.info || "1200 Sq Ft"}</p>
                    </CardIcons.Item>
                </CardIcons>
                <CardPrice>
                    <CardPrice.Price>
                        <del>{props.delPrice || "$2,800/mo"}</del>
                        <h2>{props.price || "$7,500/mo"}</h2>
                    </CardPrice.Price>
                    <CardPrice.Price className="icons" >
                      <Icons.Resize />
                      <Icons.Heart />
                    </CardPrice.Price>
                </CardPrice>
            </CardInfo>
        </Container>
    );
}

export default Cards;