'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import logo from '../assets/EduAi.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleProtectedClick = () => {
    if (!isLoggedIn) {
      alert('Please login to continue!');
    }
  };

  return (
    <header className="bg-[#0A2F9E] text-white px-6 py-4 shadow-lg relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-wide">EduAi Summarizer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <button onClick={handleProtectedClick} className="px-4 py-1 rounded-full bg-white text-[#0A2F9E] border-2 border-yellow-400 hover:shadow-md transition">Home</button>
          <button onClick={handleProtectedClick} className="hover:underline transition">Video</button>
          <button onClick={handleProtectedClick} className="hover:underline transition">Downloads</button>
          <button onClick={() => setContactModalOpen(true)} className="hover:underline transition">Contact Us</button>
        </nav>

        {/* Login/Signup */}
        <div className="relative">
          <button
            className="flex items-center gap-1 hover:underline transition"
            onClick={() => {
              setAuthModalOpen(true);
              setIsSignup(false);
            }}
          >
            LOGIN / SIGNUP <FaUserCircle size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-2">
          <button onClick={handleProtectedClick} className="block w-full text-left">Home</button>
          <button onClick={handleProtectedClick} className="block w-full text-left">Video</button>
          <button onClick={handleProtectedClick} className="block w-full text-left">Downloads</button>
          <button onClick={() => setContactModalOpen(true)} className="block w-full text-left">Contact Us</button>
        </div>
      )}

      {/* Auth Modal */}
      {authModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setAuthModalOpen(false)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <MdClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">{isSignup ? 'Sign Up' : 'Login'}</h2>

            {/* Auth Form */}
            <form onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
              setAuthModalOpen(false);
              alert(isSignup ? 'Signed up successfully!' : 'Logged in successfully!');
            }}>
              {isSignup && (
                <input type="text" placeholder="Name" required className="w-full mb-3 p-2 border rounded" />
              )}
              <input type="email" placeholder="Email" required className="w-full mb-3 p-2 border rounded" />
              <input type="password" placeholder="Password" required className="w-full mb-3 p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
                {isSignup ? 'Sign Up' : 'Login'}
              </button>
            </form>

            <p className="text-sm mt-4 text-center">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
              <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
                {isSignup ? 'Login' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              <MdClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">You can reach us at: <strong>contact@eduai.com</strong></p>
          </div>
        </div>
      )}
    </header>
  );
}
