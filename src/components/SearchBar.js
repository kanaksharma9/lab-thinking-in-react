// src/components/SearchBar.js
function SearchBar({ searchText, setSearchText, showInStockOnly, setShowInStockOnly }) {
  const handleInputChange = (event) => setSearchText(event.target.value);
  const handleCheckboxChange = (event) => setShowInStockOnly(event.target.checked);

  return (
    <div>
      <label>Search
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
      />
      </label>
      <label>
        <input
          type="checkbox"
          checked={showInStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;

