import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white">Logo</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" className="text-white" onClick={closeMenu}>
                About
              </Link>
              <Link to="/services" className="text-white" onClick={closeMenu}>
                Services
              </Link>
              <Link to="/contact" className="text-white" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </div>
          {/* Hamburger menu for smaller screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Responsive menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="text-white block" onClick={closeMenu}>
                Home
              </Link>
              <Link
                to="/about"
                className="text-white block"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-white block"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white block"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
