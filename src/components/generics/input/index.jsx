import { Input } from "./style"

const GenInput = (props) => {
    return (
        <Input placeholder={props.placeholder} name={props.name} type={props.type} value={props.value} defaultValue={props.defValue} onChange={props.onChange} width={props.width} height={props.height} />
    );
}

export default GenInput;