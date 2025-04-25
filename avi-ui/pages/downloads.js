const dummyFiles = [
    { name: "Lecture 1 Summary.pdf", url: "#" },
    { name: "Physics Notes - April.mp4", url: "#" },
    { name: "PDF Summary - Chapter 5.pdf", url: "#" },
  ];
  
  export default function DownloadsPage() {
    return (
      <div className="min-h-screen bg-[#1E2A3A] text-white p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Downloads</h2>
        <div className="bg-[#27394E] rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          {dummyFiles.map((file, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-600">
              <p>{file.name}</p>
              <a
                href={file.url}
                download
                className="bg-yellow-400 text-[#1E2A3A] px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  