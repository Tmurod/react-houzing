import { Input } from "../address/address";

let Price = () => {
    return (
        <div>
            <h2>Price</h2>
            <Input placeholder="Min price" />
            <Input placeholder="Max price" />
        </div>
    );
}

export default Price;