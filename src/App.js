import Header from "./components/Header/Header";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Main from "./components/Main/Index";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
function App() {
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState([]);
  const [arrayData, setArrayData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => setArrayData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Header
        setFilter={setFilter}
        setSearch={setSearch}
        arrayData={arrayData}
      />
      <Main
        cart={cart}
        setCart={setCart}
        search={search}
        arrayData={arrayData}
        filter={filter}
      />
    </div>
  );
}

export default App;
