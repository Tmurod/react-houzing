import styled from "styled-components";
import Navbar from "../components/navbar/navbar";
import "./root.scss";
import Search from "../components/search/serach";
import Modal from "../components/search/modal/modal";

let Section = styled.section`
background: ${({header}) => header ? "#0D263B" : ""};
`;
let Container = styled.div``;
let Div = styled.div``;

let Root = () => {
  return (
    <Div>
      <Section header>
        <Container className="container">
          <Navbar />
        </Container>
      </Section>
      <Container className="container">
        <Search />
        {/* <Modal /> */}
      </Container>
    </Div>
  );
}

export default Root;