import styled from "styled-components";

let Ul = styled.ul`
display: flex;
gap: 64px;
`;
let Li = styled.li`
list-style: none;
cursor: pointer;
`;
let A = styled.a`
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
`;
let Div = styled.div``;

let Nav = () => {
    return (
        <Div>
            <Ul>
                <Li>
                    <A>
                        Home
                    </A>
                </Li>
                <Li>
                    <A>
                        Properties
                    </A>
                </Li>
                <Li>
                    <A>
                        Contacts
                    </A>
                </Li>
            </Ul>
        </Div>
    )
}

export default Nav;