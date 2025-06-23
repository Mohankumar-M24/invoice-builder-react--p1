import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ExportPDFButton = ({ targetRef }) => {
  const generatePDF = () => {
    const input = targetRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-green-600 text-white px-4 py-2 rounded mb-4 mt-6"
    >
       Export as PDF
    </button>
  );
};

export default ExportPDFButton;
