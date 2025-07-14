import React from "react";

const InvoiceTable = ({ items, setItems }) => {
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Invoice Items</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 italic">No items added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Item Name</th>
                <th className="py-2 px-4 border-b text-right">Quantity</th>
                <th className="py-2 px-4 border-b text-right">Price</th>
                <th className="py-2 px-4 border-b text-right">Total</th>
                <th className="py-2 px-4 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b text-right">{item.quantity}</td>
                  <td className="py-2 px-4 border-b text-right">₹{item.price.toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-right">₹{(item.quantity * item.price).toFixed(2)}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default InvoiceTable;
