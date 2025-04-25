import Image from 'next/image'
import user1 from '../assets/user1.jpg'  // replace with your avatar images
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'

export default function Testimonials() {
  return (
    <section className="bg-[#2C3E50] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h3 className="text-green-500 text-xl font-bold underline underline-offset-4 decoration-yellow-400 mb-3">
            TESTIMONIALS
          </h3>
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            What our <br /> customers are <br /> talking about us
          </h1>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full">
            View All
          </button>
        </div>

        {/* Right Section */}
        <div className="border-l-[2px] border-white pl-8">
          <p className="text-gray-200 text-sm mb-6">
          
          </p>

          <h3 className="text-green-500 font-bold text-lg">Abhinav Kumar </h3>
          <p className="text-white text-sm mb-4">Student</p>

          <div className="flex gap-4">
            <Image
              src={user1}
              alt="user1"
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
            <Image
              src={user2}
              alt="user2"
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
            <Image
              src={user3}
              alt="user3"
              width={50}
              height={50}
              className="rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
