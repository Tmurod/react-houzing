import React, { useRef } from 'react';
import { Arrow, Container, Img, Blur, Content } from "./style";
import { Carousel } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';

const { REACT_APP_BASE_URL: url } = process.env;


const Category = (props) => {

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res);
  //       console.log(res);
  //     });
  // }, []);
  
  useEffect(() => {
    fetch("")
  },[])
  
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
      </Carousel>
      <Arrow onClick={move} left={"left"} />
      <Arrow name='right' onClick={move} />
    </Container>
  );
}

export default Category;