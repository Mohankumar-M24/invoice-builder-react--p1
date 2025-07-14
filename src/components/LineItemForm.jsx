import React, { useState } from "react";

const LineItemForm = ({ items, setItems }) => {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: name === "name" ? value : parseFloat(value),
    }));
  };

  const handleAddItem = () => {
    if (!item.name || item.quantity <= 0 || item.price <= 0) {
      alert("Please enter valid item details");
      return;
    }

    setItems([...items, item]);
    setItem({ name: "", quantity: 1, price: 0 });
  };

  return (
    <div className="mb-6 bg-gray-50 p-4 rounded border">
      <h2 className="text-lg font-semibold mb-4">Add Line Item</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={item.name}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          name="quantity"
          min="1"
          placeholder="Quantity"
          value={item.quantity}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        <input
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
      </div>
      <button
        onClick={handleAddItem}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Item
      </button>
    </div>
  );
};

export default LineItemForm;
