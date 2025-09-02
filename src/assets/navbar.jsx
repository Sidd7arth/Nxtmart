// Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);          // Mobile dropdown state
  const navigate = useNavigate();                       // Programmatic navigation
  const location = useLocation();                       // Current route path

  // Determine current active route
  const currentPath = location.pathname;

  // Utility function to add active styles
  const getLinkClass = (path) =>
    `text-gray-700 hover:text-green-600 relative ${
      currentPath === path ? 'text-green-600 font-medium' : ''
    }`;

  // Navigate and close mobile dropdown
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // Logout logic
  const handleLogout = () => {
    alert("Logging Out");
    navigate("/login");
  };

  return (
    <div className="bg-gray-50 fixed top left w-full z-50">
      {/* Navbar Container */}
      <nav className="bg-white shadow px-6 py-3 flex justify-between items-center relative">

        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            src="https://res.cloudinary.com/datm0tjmq/image/upload/v1754153208/Logo_2_dhgtrd.png"
            alt="NxtMart Logo"
            className="w-20 h-12"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex items-center space-x-8">
          {/* Home Link */}
          <Link to="/" className={getLinkClass("/")}>
            Home
            {currentPath === "/" && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-green-600 rounded"></span>
            )}
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className={getLinkClass("/cart")}>
            Cart
            {currentPath === "/cart" && (
              <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-green-600 rounded"></span>
            )}
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
          >
            <i className="ri-logout-circle-r-line text-lg"></i>
            <span>Logout</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            title="Menu"
            className="text-2xl text-gray-700 focus:outline-none"
          >
            <i className="ri-menu-line"></i>
          </button>

          {/* Dropdown Menu (Mobile) */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-3 z-50">
              <button
                onClick={() => handleNavigation("/")}
                className="block w-full text-center py-2 px-3 rounded hover:bg-gray-100"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/cart")}
                className="block w-full text-center py-2 px-3 rounded hover:bg-gray-100"
              >
                Cart
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center w-full py-2 px-3 rounded hover:bg-gray-100"
              >
                <i className="ri-logout-circle-r-line text-lg mr-1"></i>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
}

export default Navbar;
