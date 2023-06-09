import { Input, Container, Icon } from "./style"
import { forwardRef } from "react";

const GenInput = ((props) => {
  return (
    <Container>
      <Icon>
        {props.icon}
      </Icon>
      <Input placeholder={props.placeholder} name={props.name} type={props.type} value={props.value} defaultValue={props.defaultValue} onChange={props.onChange} width={props.width} height={props.height} icon={props.icon} />
    </Container>
  )
});

export default GenInput;