import { Button } from "../generics/button/style";
import { Blur, Container, Content } from "./style";

const Image = () => {
    return (
        <Container>
            <Blur />
            <Content>
                <h2>
                    Vermont Farmhouse With Antique Jail Is
                    the Week's Most Popular Home
                </h2>
                <Button type={"primary"}>
                    Read more
                </Button>
            </Content>
        </Container>
    );
}

export default Image;