import { Container } from "./style";
import IntroCarousel from "../carousel/index";
import Cards from "../cards";
import Choose from "../choose";
import Image from "../image/image";
import Category from "../categoryCarousel";

const Home = () => {
    return (
        <Container>
            <IntroCarousel />
            {/* <Cards /> */}
            <Choose />
            <Category />
            <Image />
        </Container>
    );
}

export default Home;