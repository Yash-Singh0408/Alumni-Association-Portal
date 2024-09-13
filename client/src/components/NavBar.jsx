import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-white text-xl font-bold">
          <Link to="/">Alumni Portal</Link>
        </div>

        {/* Hamburger Icon (visible on mobile screens) */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Links (visible on large screens) */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/signin" className="text-gray-300 hover:text-white">
            Sign In
          </Link>
        </div>
      </div>

      {/* Mobile Menu (visible when the hamburger icon is clicked) */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <Link
            to="/"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/signin"
            className="block text-gray-300 hover:text-white px-4 py-2"
            onClick={toggleMenu}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
