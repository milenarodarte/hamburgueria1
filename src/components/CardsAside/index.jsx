import Div from "../../styles/CardAside";
import Button from "../Button";
import { useState, useEffect } from "react";

import { toast } from "react-toastify";
function CardAside({ card, cart, setCart, counterValue, setCounterValue }) {
  const [counter, setCounter] = useState(1);
  function handleRemoveProduct() {
    let total = 0;

    const newCart = cart.filter((product) => {
      return product.id !== card.id;
    });
    setCart(newCart);

    toast.warn("Produto removido do carrinho");
  }
  function handleAddCounter() {
    setCounter(counter + 1);

    setCounterValue(counterValue + card.price);
  }
  function handleDecreaseCounter() {
    if (counter > 1) {
      setCounter(counter - 1);
      setCounterValue(counterValue - card.price);
    } else {
      handleRemoveProduct();
    }
  }

  return (
    <Div>
      <div className="imgBorder">
        <img src={card.img} alt="imagem do produto" />
      </div>
      <div className="cartElements">
        <div className="cartTexts">
          <p className="name">{card.name}</p>
          <p className="category">{card.category}</p>
        </div>
        <div className="cartRemove">
          <Button
            className="remove"
            type="button"
            onClick={handleRemoveProduct}
          >
            Remover
          </Button>
          <div className="divCounter">
            <button
              className="buttonSetCounter"
              onClick={handleDecreaseCounter}
            >
              -
            </button>
            <p className="counter">{counter}</p>
            <button
              className="buttonSetCounter"
              onClick={handleAddCounter}
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </Div>
  );
}
export default CardAside;
