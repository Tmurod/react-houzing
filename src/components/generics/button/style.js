import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return { background: "transparent", border: "1px solid #fff", color: "#fff" };
    case "light":
      return { background: "#fff", border: "1px solid #E6E9EC", color: "#0D263B" }
    case "primary":
      return { background: "#0061DF", border: "none", color: "#fff" };
    default: return { background: "#0061DF", border: "none", color: "#fff" }
  }
}

const getWith = ({ width }) => {
    if (!width) return "130px";
    else if (`${width}`.includes("%")) return "100%";
    else return `${width}px`;
}


export const Container = styled.div``;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: ${({ height }) => height ? `${height}px` : "44px"};
width: ${getWith};
border-radius: 2px;
${getType}
min-width: 120px;
font-size: 14px;
:active {
  opacity: 0.7
}
`;