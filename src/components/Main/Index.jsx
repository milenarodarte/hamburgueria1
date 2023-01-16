import MainStyled from "../../styles/Main";
import AsideStyled from "../../styles/Aside";
import DivStyled from "../../styles/Div";
import Cards from "../Cards/Index";
import Cart from "./Cart";
import SacolaVazia from "../../components/Main/SacolaVazia";

function Main({ search, arrayData, filter, cart, setCart }) {
  return (
    <DivStyled>
      <MainStyled>
        {filter === false
          ? arrayData.map((obj) => {
              return (
                <Cards
                  key={obj.id}
                  cart={cart}
                  setCart={setCart}
                  search={search}
                  arrayData={arrayData}
                  filter={filter}
                  obj={obj}
                />
              );
            })
          : search.map((obj) => {
              return (
                <Cards
                  key={obj.id}
                  cart={cart}
                  setCart={setCart}
                  search={search}
                  arrayData={arrayData}
                  filter={filter}
                  obj={obj}
                />
              );
            })}
      </MainStyled>
      <AsideStyled>
        {cart.length === 0 ? (
          <SacolaVazia />
        ) : (
          <Cart arrayCart={cart} setCart={setCart} cart={cart} />
        )}
      </AsideStyled>
    </DivStyled>
  );
}
export default Main;
