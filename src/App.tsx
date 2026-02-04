import React, { useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [category, setCategory] = useState("");
  return (
    <div>
      <select
        id=""
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
