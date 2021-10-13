import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setName] = useState('')
  const [itemCategory, setCategory] = useState('')
  
  function handleNameChange(e) {
    setName(e.target.value)
  }
  function handleCatChange(e) {
    setCategory(e.target.value)
  }
  function onFormSubmit(e) {
    e.preventDefault()
    const formData = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    onItemFormSubmit(formData)
    setName("")
    setCategory("")
  }
  return (
    <form className="NewItem" onSubmit={onFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCatChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
