import { useEffect } from "react";
import { Container } from "./style"
import { useState } from "react";
import Cards from "../cards";
// const { REACT_APP_BASE_URL: url } = process.env;
// console.log(url);

const Properties = () => {
  const [data, setData] = useState([]);
  // const [photo , setPhoto] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);
  
  // useEffect(() => {
  //   fetch("https://picsum.photos/v2/list")
  //     .then(res => res.json())
  //     .then(res => {
  //       setPhoto(res);
  //     });
  // }, []);
  
  return (
    <Container>
      {
        data.map(val => {
          return <Cards key={val.id} data={val} />
        })
      }
    </Container>
  );
}

export default Properties;