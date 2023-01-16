import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 9vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 7.188rem 0rem 7.188rem;
  .divInput {
    width: 30vw;
    height: 7vh;
    border-radius: 0.5rem;
    border: 2px solid var(--grey-100);
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    min-width: 20.313rem;
    input {
      border: none;
      height: 6vh;
      width: 60%;
      font-size: 1.3rem;
    }
    button {
      height: 2.5rem;
      width: 35%;
    }
  }

  @media (max-width: 500px) {
    height: 20vh;
    flex-direction: column;
    padding: 1.8rem 1rem 1rem 1rem;
    justify-content: center;
    gap: 1.25rem;

    .divInput {
      width: 90vw;
      height: 10vh;
      border-radius: 0.5rem;
      border: 2px solid var(--grey-100);
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem;
      input {
        border: none;
        height: 8vh;
        width: 50vw;
        font-size: 1.3rem;
      }
    }
  }
`;

export default HeaderStyled;
