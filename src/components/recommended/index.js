import { useState } from "react";
import { Container, Title, ContentTitle, Text } from "./style";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cards from "../cards";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

};

const Recommended = (props) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      })
  }, []);

  return (
    <Container>
      <ContentTitle>
        <Title>
          {props.text}
        </Title>
        <Text className='subtitle'>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Text>
      </ContentTitle>
      <Slider {...settings} className="slider">
        {
          data.map((val, ind) => {
            return (
              <Cards key={ind}
                onClick={() => navigate(`/properties/${val.id}`)}
                data={val}
              />
            );
          })
        }
      </Slider>
    </Container>
  )
}

export default Recommended