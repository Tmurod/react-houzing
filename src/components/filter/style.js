import styled from "styled-components";
import { ReactComponent as advanced } from "../../assets/icons/Group.svg";
import { ReactComponent as search } from "../../assets/icons/001-loupe.svg";


export const Container = styled.div`
display: flex;
padding: 0 130px;
padding-top: 10px;
padding-bottom: 10px;
gap: 20px;
`;

export const Icon = styled.div``;
Icon.Advanced = styled(advanced)`
margin-right: 10px;
`;
Icon.Search = styled(search)`
margin-right: 10px;
`;

export const FilterMenu = styled.div`
background: #FFFFFF;
padding: 30px;
border-radius: 5px;
h1 {
  padding-bottom: 10px;
}
.footer {
  display: flex;
  align-items: center;
  background:#F6F8F9;
  padding-top: 20px;
  justify-content: end;
  padding-right: 30px;
  border-radius: 0px 0px 5px 5px;
}
`;

export const FilterRows = styled.div`
background: #fff;
padding-bottom: 20px;
display: flex;
gap: 20px;
`;