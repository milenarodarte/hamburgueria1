import styled from "styled-components";

const SacolaVaziaStyled = styled.div`
  width: 100%;
  border-radius: 0.5rem;
  height: 13.938rem;
  background-color: #f5f5f5;

  p.headerCart {
    background-color: var(--green);
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    height: 4.063rem;
    text-align: left;
    padding: 1.25rem;
    font-size: var(--18px);
    font-weight: 700;
    color: #fff;
  }
  .noItens {
    font-size: var(--18px);
    font-weight: 700;
    color: black;
    text-align: center;
    padding-top: 3.125rem;
    padding-bottom: 1rem;
  }
  .addItens {
    color: #828282;
    font-size: var(--14px);
  }
`;
export default SacolaVaziaStyled;
