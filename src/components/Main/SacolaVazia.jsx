import SacolaVaziaStyled from "../../styles/SacolaVaziaStyle.js";

function SacolaVazia() {
  return (
    <SacolaVaziaStyled>
      <p className="headerCart">Carrinho de compras</p>
      <div className="mainCart">
        <p className="noItens">Sua sacola está vazia</p>
        <p className="addItens">Adicione itens</p>
      </div>
    </SacolaVaziaStyled>
  );
}
export default SacolaVazia;
