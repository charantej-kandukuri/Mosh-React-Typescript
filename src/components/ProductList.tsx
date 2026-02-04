import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    // Fetch products from an API or database
    console.log("Fetching products in ", category);
    setProducts(["Clothing", "Electronics", "Books"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
