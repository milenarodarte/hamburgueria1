import styled from "styled-components";

const Div = styled.div`
  background-color: #f5f5f5;
  height: 70vh;
  border-radius: 0.5rem;

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
  .mainCart {
    height: 65%;
    overflow-y: scroll;
  }
  .divTotal {
    width: 100%;
    border-top: 3px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
  }
  .total {
    font-size: var(--14px);
    font-weight: 600;
  }
  .totalValue {
    font-size: var(--14px);
    font-weight: 600;
    color: #828282;
  }
  .removeAll {
    background-color: #e0e0e0;
    color: #828282;
    width: 95%;
    height: 3rem;
    margin-top: 0.5rem;
    cursor: pointer;
  }
  .removeAll:hover {
    background-color: #828282;
    color: #e0e0e0;
  }
  @media (max-width: 720px) {
    height: 50vh;
  }
`;

export default Div;
