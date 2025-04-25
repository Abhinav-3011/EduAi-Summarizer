// 1️⃣ File: components/ServicesSection.js

import { FaDownload } from 'react-icons/fa'
import { MdVideoLibrary, MdPictureAsPdf } from 'react-icons/md'
import Link from 'next/link'

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#1E2A3A] py-16 px-4 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {/* Lecture Videos */}
        <Link href="/video-uploader" className="bg-[#27394E] rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-[#324861]">
          <div className="bg-yellow-400 p-4 rounded-full mb-4">
            <MdVideoLibrary className="text-3xl text-[#1E2A3A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Lecture Videos</h3>
          <p className="text-sm text-gray-300">Upload lecture videos, get transcription and download summary.</p>
        </Link>

        {/* Download */}
        <Link href="/downloads" className="bg-[#27394E] rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-[#324861]">
          <div className="bg-yellow-400 p-4 rounded-full mb-4">
            <FaDownload className="text-3xl text-[#1E2A3A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Download</h3>
          <p className="text-sm text-gray-300">Access your history and download generated content.</p>
        </Link>

        {/* PDF Notes */}
        <Link href="/pdf-concise" className="bg-[#27394E] rounded-lg p-6 flex flex-col items-center shadow-md hover:bg-[#324861]">
          <div className="bg-yellow-400 p-4 rounded-full mb-4">
            <MdPictureAsPdf className="text-3xl text-[#1E2A3A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">PDF Notes</h3>
          <p className="text-sm text-gray-300">Upload PDFs and get concise summaries instantly.</p>
        </Link>
      </div>
    </section>
  )
}
