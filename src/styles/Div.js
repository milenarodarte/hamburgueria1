import styled from "styled-components";

const DivStyled = styled.div`
  padding: 2rem 2rem 0rem 2rem;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0.2rem;
  }
`;
export default DivStyled;
