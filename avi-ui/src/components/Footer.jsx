import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaEnvelope, FaBell, FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#1A2E8A] text-white pt-10 pb-4 px-4">
      {/* Green Top Info Row */}
      <div className="flex flex-wrap justify-center gap-4 bg-green-500 text-black font-medium py-4 rounded-full max-w-6xl mx-auto mb-10">
        <Badge icon={<FaPhoneAlt />} title="Give Us A Call" desc="+1234567890" />
        <Badge icon={<FaClock />} title="Work Hours" desc="10:00 - 08:00" />
        <Badge icon={<FaMapMarkerAlt />} title="Office Bharat" desc="Lorem Ipsum" />
        <Badge icon={<FaEnvelope />} title="Email Address" desc="your@gmail.com" />
        <Badge icon={<FaBell />} title="Subscribe" desc="Our Newsletter" />
      </div>

      {/* Social Section */}
      <h2 className="text-center text-2xl text-yellow-400 font-bold mb-4">Join Us on Our Journey</h2>
      <div className="flex justify-center gap-4 mb-10 text-xl">
        <FaInstagram className="text-red-500 bg-white p-1 rounded-full" />
        <FaFacebookF className="text-blue-600 bg-white p-1 rounded-full" />
        <FaTwitter className="text-[#1DA1F2] bg-white p-1 rounded-full" />
        <FaWhatsapp className="text-green-500 bg-white p-1 rounded-full" />
      </div>

      {/* Grid Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
        {/* Help */}
        <div>
          <h4 className="font-bold mb-3">Help</h4>
          <ul className="space-y-1 text-gray-200">
            <li>How early access works</li>
            <li>Become a member</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* For You */}
        <div>
          <h4 className="font-bold mb-3">For You</h4>
          <ul className="space-y-1 text-gray-200">
            <li>Special discount</li>
            <li>Idea submission</li>
            <li>Affiliate program</li>
            <li>Accessibility statement</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-3">Services</h4>
          <ul className="space-y-1 text-gray-200">
            <li>How to Order</li>
            <li>Order Status</li>
            <li>Promo</li>
            <li>Payment Method</li>
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h4 className="font-bold mb-3 flex items-center gap-2 text-yellow-400">
            <FaMapMarkerAlt /> Head Office
          </h4>
          <p className="text-gray-200 text-sm">
            I'm a paragraph. Click here to add your own text and edit me. Let your users grt to know you
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <FaPhoneAlt className="inline mr-2" /> +911234567890
              <br /><span className="ml-6 text-xs">(10AM - 8PM)</span>
            </li>
            <li>
              <FaEnvelope className="inline mr-2" /> Info@EduAi.com
              <br /><span className="ml-6 text-xs">(6AM - 9PM)</span>
            </li>
            <li>
              <FaMapMarkerAlt className="inline mr-2" />
              I'm a paragraph. Click here to add your own text and edit me.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
        <span>2025 EduAi Pvt. Ltd. Rights Reserved</span>
        <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
          <span>Terms & Condition</span>
          <span>Privacy Policy</span>
          <span>Return</span>
          <span>Refund</span>
          <span>#Disclaimer</span>
          <span>About Us</span>
        </div>
      </div>
    </footer>
  )
}

function Badge({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-2 bg-green-400 px-4 py-2 rounded-full shadow text-sm">
      <div className="text-xl">{icon}</div>
      <div>
        <div className="font-bold">{title}</div>
        <div className="text-xs">{desc}</div>
      </div>
    </div>
  )
}
