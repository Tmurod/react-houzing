import { Container, Content } from "./style";
import { Input } from "../generics/input/style";
import { Button } from "../generics/button/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest.js";
import { message } from "antd";

const SignIn = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  
  const onChane = (e) => {
    setBody({
      ...body,
      [e.target.placeholder]: e.target.value
    });
    setError(false);
  }
  
  const info = (type) => {
    message[type]("its ok");
  }
  
  const warn =() => {
    message.warning("login or password not correct");
  }
  
  const onSubmit = () => {
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => {
      // if (res.authenticationToken) navigate("/home");
      // info();
      res.authenticationToken ? navigate("/home") : warn();
    });
  }
  
    return (
        <Container>
            <Content>
                <h2 className="title">Sign in</h2>
                <h3 className="subtitle">Login</h3>
                <Input onChange={onChane} placeholder="email" type="email" />
                <Input onChange={onChane} placeholder="password" type="password" />
                <Button width="%" onClick={onSubmit} >Login</Button>
            </Content>
        </Container>
    );
}

export default SignIn;