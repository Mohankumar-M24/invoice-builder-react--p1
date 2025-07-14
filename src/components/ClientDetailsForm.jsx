import React from "react";

const ClientDetailsForm = ({ clientInfo, setClientInfo }) => {
  const handleChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Client Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. John Doe"
          value={clientInfo.name}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Client Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="4"
          placeholder="123 Main Street, City, Country"
          value={clientInfo.address}
          onChange={handleChange}
          className="w-full p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Invoice Number
        </label>
        <input
          type="text"
          id="invoiceNumber"
          name="invoiceNumber"
          placeholder="e.g. INV-001"
          value={clientInfo.invoiceNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="invoiceDate" className="block text-sm font-medium text-gray-700 mb-1">
          Invoice Date
        </label>
        <input
          type="date"
          id="invoiceDate"
          name="invoiceDate"
          value={clientInfo.invoiceDate}
          onChange={handleChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
};

export default ClientDetailsForm;
