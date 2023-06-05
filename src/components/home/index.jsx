import { Container } from "./style";
import IntroCarousel from "../carousel/index";
import Cards from "../cards";
import Choose from "../choose";
import Image from "../image/image";
import Category from "../categoryCarousel";
import { useEffect } from "react";
import Recommended from "../recommended";
import Testimonials from "../testimonials";

const Home = () => {
    return (
        <Container>
            <IntroCarousel />
            <Recommended text="Recommended" />
            <Choose />
            <Category />
            <Image />
            <Recommended text="Recent Properties for Rent" />
            <Testimonials />
        </Container>
    );
}

export default Home;