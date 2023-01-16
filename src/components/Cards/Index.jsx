import CardContainer from "../../styles/Cards";
import Button from "../Button";
import MainStyled from "../../styles/Main";
import { toast } from "react-toastify";

function Cards({ obj, setCart, cart, arrayData, filter, search }) {
  function handleClickToCart() {
    const el = obj.id;

    const result = arrayData.find((lanche) => {
      return lanche.id === Number(el);
    });

    if (result) {
      const verifyCart = cart.find((product) => product.id === Number(el));
      if (verifyCart === undefined) {
        setCart((oldCarts) => [...oldCarts, obj]);
      } else {
        toast.error("Produto já adcionado, altere a quantidade no carrinho.");
      }
    }
  }

  return (
    <CardContainer>
      <img src={obj.img} alt="foto produto"></img>
      <div className="divText">
        <p className="title">{obj.name}</p>
        <p className="category">{obj.category}</p>
        <p className="price">R$ {obj.price}</p>
        <Button className="btn" onClick={() => handleClickToCart()}>
          Adicionar
        </Button>
      </div>
    </CardContainer>
  );
}
export default Cards;
