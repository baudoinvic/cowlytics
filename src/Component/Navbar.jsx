import React from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Cowlytics</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>(250) 7830-138</span>
            </div>
            {/* <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Emergency Call
            </button> */}
            <a href="tel:+250783012138">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Emergency Call
              </button>
            </a>
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
