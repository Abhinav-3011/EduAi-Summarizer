'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa'
import sampleImage from '../assets/sample.jpg' // Replace with your image

const tabs = ['Videos', 'Blogs', 'PDF', 'Images']

const dummyCards = Array(6).fill({
  title: 'I’m a paragraph. CLick here to add your own text and edit me. Let your users grt to know you',
  image: sampleImage,
})

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState('Videos')

  return (
    <section className="bg-[#F2F5F9] px-6 py-10 min-h-screen">
      {/* Tabs */}
      <div className="flex justify-center gap-10 mb-10 text-xl font-semibold">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full ${
              activeTab === tab ? 'bg-green-400 text-white' : 'text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {dummyCards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image */}
            <Image
              src={card.image}
              alt="Card image"
              width={180}
              height={180}
              className="rounded-xl object-cover"
            />

            {/* Text Box */}
            <div className="bg-[#2C3E50] text-white p-4 rounded-xl w-64 -mt-6 ml-20 shadow-md text-sm z-10 relative">
              <p className="mb-3 leading-snug">{card.title}</p>
              <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-1 rounded-full font-semibold text-sm">
                <FaPlay className="text-green-600" />
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
