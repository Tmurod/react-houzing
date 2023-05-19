import { CategoryCard, Container, Content, ContentTitle, Title } from "./style";

const Category = () => {
    return (
        <Container>
            <Content>
                {/* <ContentTitle>
                    <Title className="title">
                        Category
                    </Title>
                    <p className="subtitle">
                        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                    </p>
                </ContentTitle> */}
            <CategoryCard></CategoryCard>
            </Content>
        </Container>
    );
}

export default Category;