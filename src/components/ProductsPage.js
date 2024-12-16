// src/components/ProductsPage.js
import { useState } from "react";
import jsonData from "../mydata.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchText, setSearchText] = useState(""); 
  const [showInStockOnly, setShowInStockOnly] = useState(false); 


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesStock = !showInStockOnly || product.inStock;
    return matchesSearch && matchesStock;
  });

  return (
    <div>
      <h1>Store</h1>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        showInStockOnly={showInStockOnly}
        setShowInStockOnly={setShowInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;

