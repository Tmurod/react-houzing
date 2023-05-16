import { Container, Content, Icons, Subtitle, Title } from "./style"

const Choose = () => {
    return (
        <Container>
            <Content>
                <Content.Title>
                    <Title className="title">
                        Why Choose Us?
                    </Title>
                    <Subtitle className="subtitle">
                        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                    </Subtitle>
                </Content.Title>
                <Content.Info>
                    <Content.Text>
                        <Icons.Smile />
                        <h2 className="title">
                            Trusted By Thousands
                        </h2>
                        <Subtitle>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </Subtitle>
                    </Content.Text>
                    <Content.Text>
                        <Icons.House />
                        <h2 className="title">
                            Wide Renge Of Properties
                        </h2>
                        <Subtitle>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </Subtitle>
                    </Content.Text>
                    <Content.Text>
                        <Icons.Calculator />
                        <h2 className="title">
                            Financing Made Easy
                        </h2>
                        <Subtitle>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </Subtitle>
                    </Content.Text>
                    <Content.Text>
                        <Icons.Maps />
                        <h2 className="title">
                            See Neighborhoods
                        </h2>
                        <Subtitle>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </Subtitle>
                    </Content.Text>
                </Content.Info>
            </Content>
        </Container>
    );
}

export default Choose;