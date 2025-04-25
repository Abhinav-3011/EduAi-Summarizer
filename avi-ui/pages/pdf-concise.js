import { useState } from 'react';

export default function PDFConcisePage() {
  const [pdfUploaded, setPdfUploaded] = useState(false);
  const [summary, setSummary] = useState('');

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfUploaded(true);
      // Simulate summary generation
      setSummary('This is a concise summary of your PDF.');
    }
  };

  return (
    <div className="min-h-screen bg-[#1E2A3A] text-white p-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Upload PDF Document</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        className="mb-6 bg-[#27394E] p-2 rounded"
      />
      {pdfUploaded && (
        <div className="bg-[#27394E] p-6 rounded shadow-lg w-full max-w-3xl">
          <h3 className="text-xl font-semibold mb-2">Summary</h3>
          <p className="text-sm text-gray-300">{summary}</p>
          <button className="mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-400 text-white">
            Download Summary as PDF
          </button>
        </div>
      )}
    </div>
  );
}
   