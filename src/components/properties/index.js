import { useEffect, useState } from "react";
import { Container } from "./style"
import Cards from "../cards";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, []);
  return (
    <Container>
      {
        data.map(val => {
          // console.log(val);
          return <Cards key={val.id} data={val} />
        })
      }
    </Container>
  );
}

export default Properties;