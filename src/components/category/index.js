import { Blur, Container, Content, Img } from './style';
import noImg from '../../assets/images/no image.jpg';
import category from '../../assets/images/unsplash_5q1KnUjtjaM.png';

export const CategoryCard = () => {
  return (
    <Container>
      <Img src={category || noImg} />
      <Blur />
      <Content>{'Category'}</Content>
    </Container>
  );
};

export default CategoryCard;