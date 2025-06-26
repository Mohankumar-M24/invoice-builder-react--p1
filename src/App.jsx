import React, { useState, useEffect } from "react";
import ClientDetailsForm from "./components/ClientDetailsForm";
import ExportPDFButton from "./components/ExportPDFButton";
import { useRef } from "react";

const App = () => {
  const [items, setItems] = useState([

    { description: "", quantity: 1, rate: 0, amount: 0 }

  ]);

  const [subtotal, setSubtotal] = useState(0);
  const taxRate = 0.1; 
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const [clientInfo, setClientInfo] = useState({
    name: "",
    address: "",
    invoiceNumber: "",
    invoiceDate: ""
  });

  const invoiceRef = useRef();

  useEffect(() => {

    const newSubtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0
    );
    setSubtotal(+newSubtotal.toFixed(2));
  }, [items]);

  const handleItemChange = (index, field, value) => {

    const updatedItems = [...items];
    
    if (field === "quantity" || field === "rate") {

      value = parseFloat(value);
      if (field === "quantity" && value <= 0) value = 1;
      if (field === "rate" && value < 0) value = 0;
    }
    updatedItems[index][field] = value;
    updatedItems[index].amount =
      updatedItems[index].quantity * updatedItems[index].rate;
    setItems(updatedItems);
  };

  const addItem = () => {

    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const removeItem = (index) => {

    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    setItems(updatedItems);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Invoice Builder</h1>

      <div className="bg-white border p-6 rounded shadow" ref={invoiceRef}>
        <ClientDetailsForm
          clientInfo={clientInfo}
          setClientInfo={setClientInfo}
        />

        <table className="w-full mb-6 border">

          <thead>

            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Rate</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Actions</th>
            </tr>

          </thead>

          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td className="p-2 border">
                  <input
                    type="text"
                    className="w-full p-1 border rounded"
                    value={item.description}
                    onChange={(e) =>
                      handleItemChange(idx, "description", e.target.value)
                    }
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    min="1"
                    className="w-full p-1 border rounded"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(idx, "quantity", e.target.value)
                    }
                  />
                </td>
                <td className="p-2 border">
                  <input type="number"
                    min="0"
                    className="w-full p-1 border rounded"
                    value={item.rate}
                    onChange={(e) =>
                      handleItemChange(idx, "rate", e.target.value)
                    }
                  />
                </td>
                <td className="p-2 border">₹ {item.amount.toFixed(2)}</td>
                <td className="p-2 border">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"

                    onClick={() => removeItem(idx)}
                    disabled={items.length === 1}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-right space-y-2 text-lg font-medium">

          <p>Subtotal: ₹ {subtotal.toFixed(2)}</p>
          <p>Tax (10%): ₹ {tax.toFixed(2)}</p>
          <p className="text-xl font-bold">Total: ₹ {total.toFixed(2)}</p>

        </div>
      </div>

      {}
      <div className="mt-4 flex justify-between items-center">

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addItem}
        >
          + Add Item
        </button>
        <ExportPDFButton targetRef={invoiceRef} />
      </div>
    </div>
  );
};

export default App;
