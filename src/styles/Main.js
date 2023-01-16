import styled from "styled-components";

const MainStyled = styled.main`
  width: 60vw;

  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  overflow-x: scroll;
  padding: 1.25rem;
  justify-content: center;
  @media (max-width: 720px) {
    overflow-x: unset;
    height: 360px;
    overflow-x: scroll;
    width: 100%;
    padding: 0.2rem;
    flex-wrap: unset;
    justify-content: start;
  }
`;
export default MainStyled;
