import Image from 'next/image'
import studyGif from '../assets/StudentGif1.gif'

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row h-screen bg-[#0A2F9E] text-white">
      
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 space-y-6">
        <h2 className="text-3xl font-semibold italic">Are You</h2>
        <h1 className="text-5xl font-extrabold leading-tight">
          <span className="text-green-500">Ready For</span> <br />
          become <br /> smarter
        </h1>

        <p className="text-lg italic text-gray-300">
          Transform the way you learn — fast, smart, and super easy!
        </p>

        <ul className="list-disc list-inside text-sm space-y-1 text-gray-200">
          <li>📚 Summarize long lectures in seconds</li>
          <li>🎯 Focus only on important points</li>
          <li>🤖 Powered by AI for smarter learning</li>
        </ul>

        <div className="flex flex-wrap gap-4 pt-4">
          {/* Anchor link to Services section */}
          <a href="#services">
            <button className="bg-[#3385ff] px-6 py-2 rounded-full text-sm font-medium">
              Start Now
            </button>
          </a>
        </div>

        <p className="text-sm text-gray-300">
          Join thousands of learners who are making studying faster, smarter,
          and more efficient. Upload your video now and let AI do the work.
        </p>
      </div>

      {/* Right Side - Fullscreen GIF */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
        <Image
          src={studyGif}
          alt="Study GIF"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}
