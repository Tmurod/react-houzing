import { useEffect, useState } from "react";
import { Container } from "./style"
import Cards from "../cards";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, [search]);

  const select = (id) => {
    navigate(`/properties/${id}`);
  }

  return (
    <Container>
      {
        data.map(val => {
          return <Cards key={val.id} data={val} onClick={val.id} />
        })
      }
    </Container>
  );
}

export default Properties;