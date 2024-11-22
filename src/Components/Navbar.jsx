import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center text-white bg-purple-900 bg-opacity-60 backdrop-blur-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">Coding Terminal</div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <a href="#home" className="hover:text-pink-500">
          Home
        </a>
        <a href="#about" className="hover:text-pink-500">
          About Us
        </a>
        <a href="#pricing" className="hover:text-pink-500">
          Price
        </a>
        <a href="#login" className="hover:text-pink-500">
          Login
        </a>
      </div>

      {/* Mobile Navigation with Infographic Blur */}
      {isMenuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-purple-900 bg-opacity-70 backdrop-blur-md text-white flex flex-col items-center gap-4 py-6 shadow-lg md:hidden z-40"
        >
          <a
            href="#home"
            className="hover:text-pink-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-pink-500"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#pricing"
            className="hover:text-pink-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Price
          </a>
          <a
            href="#login"
            className="hover:text-pink-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
        </div>
      )}

      {/* Call-to-Action Button */}
      <button className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm">
        Start for free
      </button>
    </nav>
  );
};

export default Navbar;
