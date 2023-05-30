import React, { useState, useEffect } from 'react';
import { Container, Title } from "./style";
import CategoryCard from '../category';
import token from '../../helpers/token';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';


const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  appendDots: dots => <h1>{dots}</h1>
};

const Category = () => {
  const navigate = useNavigate()

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/categories/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data)
      })
  }, []);

  return (
    <Container>
      <Title>
        <h1>Why Choose Us?</h1>
        <p className='subtitle'>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </Title>
      <Slider {...settings} >
        {
          data.map(val => {
            return <CategoryCard data={val} key={val.id} onClick={() => navigate(`/properties?category_id=${val?.name}`)} />
          })
        }
        {settings.appendDots}
      </Slider>
    </Container>
  );
}

export default Category;