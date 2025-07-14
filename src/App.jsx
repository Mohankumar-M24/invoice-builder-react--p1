import React, { useState, useEffect, useRef } from "react";
import ClientDetailsForm from "./components/ClientDetailsForm";
import ExportPDFButton from "./components/ExportPDFButton";
import LineItemForm from "./components/LineItemForm";
import InvoiceTable from "./components/InvoiceTable";

const App = () => {
  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    address: "",
    invoiceNumber: "",
    invoiceDate: "",
  });

  const invoiceRef = useRef();
  const taxRate = 0.1;
  const tax = +(subtotal * taxRate).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  useEffect(() => {
    const newSubtotal = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setSubtotal(+newSubtotal.toFixed(2));
  }, [items]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Invoice Builder</h1>

      <div className="bg-white border p-6 rounded shadow" ref={invoiceRef}>
        <ClientDetailsForm clientInfo={clientInfo} setClientInfo={setClientInfo} />

        <LineItemForm items={items} setItems={setItems} />
        <InvoiceTable items={items} setItems={setItems} />

        <div className="text-right space-y-2 text-lg font-medium mt-6">
          <p>Subtotal: ₹ {subtotal.toFixed(2)}</p>
          <p>Tax (10%): ₹ {tax.toFixed(2)}</p>
          <p className="text-xl font-bold">Total: ₹ {total.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <ExportPDFButton targetRef={invoiceRef} />
      </div>
    </div>
  );
};

export default App;
