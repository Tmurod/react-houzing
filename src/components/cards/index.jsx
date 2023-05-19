import { CardIcons, CardInfo, CardPrice, Container, Icons, Img } from "./style";
import image from "../../assets/images/no image.jpg";

const Cards = (props) => {
    return (
        <Container>
            <Img src={ image} />
            <CardInfo>
                <h2 className="title">{props.data.address.city || "New Apartment Nice Wiew"}</h2>
                <p className="subtitle">{props.data.address.street || "Quincy St, Brooklyn, NY, USA"}</p>
                <CardIcons>
                    <CardIcons.Item>
                        <Icons.Bed />
                        <p>Beds {props.data.phone.slice(2, 3) || "4 Beds"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Bath />
                        <p>Baths {props.data.phone.slice(3, 4) || "5 Baths"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Car />
                        <p>Garage {props.data.id || "1 Garage"}</p>
                    </CardIcons.Item>
                    <CardIcons.Item>
                        <Icons.Ruler />
                        <p>Sq Ft {props.data.phone.slice(4, 5) || "1200 Sq Ft"}</p>
                    </CardIcons.Item>
                </CardIcons>
                <CardPrice>
                    <CardPrice.Price>
                        <del>{props.data.address.geo.lat > props.data.address.geo.lng ? props.data.address.geo.lat : props.data.address.geo.lng || "$2,800/mo"}</del>
                        
                        <h2>{props.data.address.geo.lng.replace('-', "") || "$7,500/mo"}</h2>
                    </CardPrice.Price>
                    <CardPrice.Price className="icons" >
                    </CardPrice.Price>
                </CardPrice>
            </CardInfo>
        </Container>
    );
}

export default Cards;