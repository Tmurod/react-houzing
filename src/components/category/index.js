import { Blur, Container, Content, Img } from './style';
import noimg from '../../assets/images/no image.jpg';
import category from '../../assets/images/unsplash_5q1KnUjtjaM.png';

export const Category = (props) => {
  return (
    <Container onClick={props.onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{props.data.name || 'Category Name'}</Content>
    </Container>
  );
};

export default Category;