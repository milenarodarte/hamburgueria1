import styled from "styled-components";

const AsideStyled = styled.aside`
  width: 30vw;

  height: 100vh;
  @media (max-width: 720px) {
    height: unset;
    width: 95vw;
    margin: 0 auto;
  }
`;
export default AsideStyled;
