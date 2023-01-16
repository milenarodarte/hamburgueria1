import HeaderStyled from "../../styles/Index";
import { Input } from "./Input";
import logo from "../../assets/logo.svg";
function Header({ setFilter, setSearch, arrayData }) {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo"></img>
      <Input setFilter={setFilter} setSearch={setSearch} array={arrayData} />
    </HeaderStyled>
  );
}
export default Header;
