import React from "react";

const ClientDetailsForm = ({ clientInfo, setClientInfo }) => {
  const handleChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold mb-1">Client Name</label>
        <input
          type="text"
          name="name"
          value={clientInfo.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Client Address</label>
        <input
          type="text"
          name="address"
          value={clientInfo.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          value={clientInfo.invoiceNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Invoice Date</label>
        <input
          type="date"
          name="invoiceDate"
          value={clientInfo.invoiceDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ClientDetailsForm;
