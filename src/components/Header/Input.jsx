import Button from "../Button";
import { useState } from "react";
export function Input({ setFilter, setSearch, array }) {
  const [word, setWord] = useState("");

  const handleClick = (setFilter, array) => {
    if (word.length === 0) {
      setFilter(false);
    } else {
      setFilter(true);
      const arrayFiltred = array.filter((obj) => obj.name === word);

      setSearch(arrayFiltred);
    }
  };
  return (
    <div className="divInput">
      <input
        onChange={(e) => setWord(e.target.value)}
        type="search"
        placeholder="Digitar pesquisa"
      />
      <Button onClick={() => handleClick(setFilter, array)}>Pesquisar</Button>
    </div>
  );
}
