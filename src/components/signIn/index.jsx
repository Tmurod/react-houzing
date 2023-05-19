import { Container, Content } from "./style";
import { Input } from "../generics/input/style";
import { Button } from "../generics/button/style";

const SignIn = () => {
    return (
        <Container>
            <Content>
                <h2 className="title">Sign in</h2>
                <h3 className="subtitle">Login</h3>
                <Input placeholder="Ali Tufa..." />
                <Input placeholder="Password" />
                <Button width="%">Login</Button>
            </Content>
        </Container>
    );
}

export default SignIn;