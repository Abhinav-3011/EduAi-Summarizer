import { useState } from 'react';

export default function VideoUploader() {
  const [videoUrl, setVideoUrl] = useState(null);
  const [captions, setCaptions] = useState('');

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
    }
  };

  const handleSummarize = () => {
    // Replace with actual API call
    setCaptions('This is a placeholder for AI-generated captions...');
  };

  return (
    <div className="min-h-screen bg-[#1E2A3A] text-white p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Video Section */}
        <div className="md:w-3/4 w-full bg-[#27394E] p-6 rounded-xl shadow-lg flex flex-col">
          <label className="mb-4 block font-semibold text-gray-200">
            Upload a Video:
            <input
              type="file"
              accept="video/mp4"
              onChange={handleVideoUpload}
              className="block mt-2 text-white"
            />
          </label>

          {videoUrl && (
            <video controls className="w-full h-[60vh] object-cover rounded-lg">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <button
            onClick={handleSummarize}
            className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Start Summarizing
          </button>
        </div>

        {/* Caption Section */}
        <div className="md:w-1/4 w-full bg-[#27394E] p-6 rounded-xl shadow-lg flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">Captions & Notes</h2>
            <div className="flex-1 overflow-y-auto bg-[#1E2A3A] p-3 rounded text-sm text-gray-300 h-[60vh]">
              {captions || 'Captions will appear here after summarization.'}
            </div>
            <button className="mt-4 bg-green-500 hover:bg-green-400 text-white font-semibold py-2 rounded-lg transition duration-200">
              Download as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
