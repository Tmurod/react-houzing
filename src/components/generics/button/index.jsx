import { Button, Container } from "./style"

const GenButton = (props) => {
    return (
        <Container>
            <Button type={props.type} onClick={props.onClick} width={props.width} height={props.height}>Login</Button>
        </Container>
    );
}

export default GenButton;