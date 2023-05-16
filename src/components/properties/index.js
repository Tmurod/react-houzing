import { useEffect } from "react";
import { Container } from "./style"

const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  console.log(url);
  useEffect(() => {

  })
  return (
    <Container>
      <h1>test</h1>
    </Container>
  );
}

export default Properties;