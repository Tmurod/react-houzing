import React, { useRef } from 'react';
import { Arrow, Container, Img, Blur, Content } from "./style";
import { Carousel } from 'antd';
import img1 from "../../assets/images/carousel-2.png";
import img3 from "../../assets/images/carousel2.png";

const IntroCarousel = (props) => {

  const sliderRef = useRef();

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }

  const move = (e) => {
    e.target.dataset.name === "right" ? sliderRef.current.next() : sliderRef.current.prev();
  }

  return (
    <Container>
      <Carousel afterChange={onChange} ref={sliderRef}>
        <Img src={img1} />
        <Img src={img3} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>
          {props.title || <p>Skyper Pool Partment</p>}
        </Content.Title>
        <Content.Subtitle>
          {props.price || <p>112 Glenwood Ave Hyde Park, Boston, MA</p>}
        </Content.Subtitle>
        <Content.Price>
          {props.price || <p>$5,250/mo</p>}
        </Content.Price>
      </Content>
      <Arrow onClick={move} left={"left"} />
      <Arrow name='right' onClick={move} />
    </Container>
  );
}

export default IntroCarousel;