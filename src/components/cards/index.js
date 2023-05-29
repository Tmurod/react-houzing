import { CardIcons, CardInfo, CardPrice, Container, Icons, Img } from "./style";
import image from "../../assets/images/no image.jpg";

const Cards = (props) => {
  return (
    <Container>
      <Img src={props.data.attachments.imgPath || image} />
      <CardInfo>
        <h2 className="title">{props.data.address || "New Apartment Nice Wiew"}</h2>
        <p className="subtitle">{props.data.city || "Quincy St, Brooklyn, NY, USA"}</p>
        <CardIcons>
          <CardIcons.Item>
            <Icons.Bed />
            <p>Beds {props.data.houseDetails.beds || "4 Beds"}</p>
          </CardIcons.Item>
          <CardIcons.Item>
            <Icons.Bath />
            <p>Baths {props.data.houseDetails.bath || "5 Baths"}</p>
          </CardIcons.Item>
          <CardIcons.Item>
            <Icons.Car />
            <p>Garage {props.data.houseDetails.garage || "1 Garage"}</p>
          </CardIcons.Item>
          <CardIcons.Item>
            <Icons.Ruler />
            <p>Sq Ft {props.data.houseDetails.area || "1200 Sq Ft"}</p>
          </CardIcons.Item>
        </CardIcons>
        <CardPrice>
          <CardPrice.Price>
            <del>{props.data.price || "$2,800/mo"}</del>
            <h2>{props.data.salePrice || "$7,500/mo"}</h2>
          </CardPrice.Price>
          <CardPrice.Price flex>
            <Icons.Resize />
            <Icons.Heart />
          </CardPrice.Price>
        </CardPrice>
      </CardInfo>
    </Container>
  );
}

export default Cards;