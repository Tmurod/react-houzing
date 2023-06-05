import TestimonialCard from "../testimonialsCard";
import { Container, Content, Section, Title } from "./style"

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <Title>
          Testimonials
        </Title>
        <p>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
        <Content>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Content>
      </Container>
    </Section>
  );
}

export default Testimonials;