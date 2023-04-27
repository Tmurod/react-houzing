import styled from "styled-components";
import SearchInput from "./input/input";
import SearchButton from "./buttons/search";
import AdvancedButton from "./buttons/advanced";

let Div = styled.div`
padding-top: 10px;
display: flex;
justify-content: space-between;
`;

let Search = () => {
    return (
        <Div>
            <SearchInput />
            <AdvancedButton />
            <SearchButton />
        </Div>
    );
}

export default Search;