import { Container } from "./style";
import IntroCarousel from "../carousel/index";
import Cards from "../cards";
import Choose from "../choose";
import Image from "../image/image";
import { useEffect } from "react";

const Home = () => {
    return (
        <Container>
            <IntroCarousel />
            {/* <Cards /> */}
            <Choose />
            <Image />
        </Container>
    );
}

export default Home;