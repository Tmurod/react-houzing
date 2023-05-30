import { Container, Content } from "./style";
import { Input } from "../generics/input/style";
import { Button } from "../generics/button/style";
import useReplace from "../../hooks/useRequest.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignIn = () => {
  const request = useReplace();
  const [body, setBody] = useState({});
  const navigatge = useNavigate();
  
  const onChane = (e) => {
    setBody({
      ...body,
      [e.target.placeholder]: e.target.value
    });
  }
  
  const onSubmit = () => {
    console.log(body);
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    })
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