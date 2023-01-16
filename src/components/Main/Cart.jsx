import Div from "../../styles/Cart";
import Button from "../Button";
import CardAside from "../CardsAside";
import { useState, useEffect } from "react";

function Cart({ arrayCart, setCart, cart }) {
  const [counterValue, setCounterValue] = useState(0);
  let total = 0;
  useEffect(() => {
    const totalValue = cart.reduce((a, b) => a + b.price, total);
    setCounterValue(totalValue);
  }, [cart]);

  return (
    <Div>
      <p className="headerCart">Carrinho de compras</p>
      <div className="mainCart">
        {arrayCart.map((card) => {
          return (
            <CardAside
              key={card.id}
              card={card}
              setCart={setCart}
              cart={cart}
              counterValue={counterValue}
              setCounterValue={setCounterValue}
            />
          );
        })}
      </div>
      <div className="divTotal">
        <p className="Total">Total</p>
        <p className="totalValue">R$ {counterValue.toFixed(2)}</p>
      </div>
      <Button className="removeAll" onClick={() => setCart([])}>
        Remover todos
      </Button>
    </Div>
  );
}
export default Cart;
