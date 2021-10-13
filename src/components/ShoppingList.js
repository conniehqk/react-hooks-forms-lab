import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchPhrase, setSearchPhrase] = useState('')
  const [submittedData, setSubmittedData] = useState(items)

  function onItemFormSubmit(newItem) {
    setSubmittedData([...submittedData, newItem])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = submittedData.filter((item) => {
    if (selectedCategory === "All"&&searchPhrase==='') return true;
    else if (selectedCategory === "All"&&searchPhrase!=='') {
      return item.name.toLowerCase().includes(searchPhrase.toLowerCase())
    }
    else if (selectedCategory !== "All"&&searchPhrase===''){
      return item.category === selectedCategory
    }
    else if (selectedCategory !== "All"&&searchPhrase!==''){
    return item.category === selectedCategory && item.name.toLowerCase().includes(searchPhrase.toLowerCase())
    };
  });

  function handleSearchChange(e) {
    setSearchPhrase(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchPhrase} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
