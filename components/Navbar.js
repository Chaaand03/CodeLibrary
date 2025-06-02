"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../public/Image/Codelibraylogo.png";
import Register from "../components/Register";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);
  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-[200]">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Left - Logo & Links */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/Image/Codelibraylogo.png" alt="Logo" width={50} height={50} />
              Code Library
            </Link>
            <div className="hidden md:flex space-x-6 ml-4">
              <Link href="/" className="text-purple-800 hover:font-bold">Home</Link>
              <Link href="/Courses" className="text-purple-800 hover:font-bold">Courses</Link>
              <Link href="/priceing" className="text-purple-800 hover:font-bold">Pricing</Link>
              <Link href="/about" className="text-purple-800 hover:font-bold">About Us</Link>
              <Link href="/ContactUs" className="text-purple-800 hover:font-bold">Contact Us</Link>
              <Link href="/blog" className="text-purple-800 hover:font-bold">Blog</Link>
            </div>
          </div>

          {/* Right - Sign Up Button */}
          <div className="hidden md:flex">
            <button
              onClick={openRegister}
              className="bg-purple-800 text-white font-semibold px-6 py-2 rounded-md hover:bg-purple-900 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black">
              {isOpen ? <HiOutlineX className="h-6 w-6" /> : <HiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden px-4 pb-6 bg-white shadow-md">
            <Link href="/" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>Home</Link>
            <Link href="/Courses" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>Courses</Link>
            <Link href="/priceing" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>Pricing</Link>
            <Link href="/about" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>About Us</Link>
            <Link href="/ContactUs" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>Contact Us</Link>
            <Link href="/blog" className="block py-2 text-black hover:font-bold" onClick={closeMobileMenu}>Blog</Link>
            <button
              onClick={() => {
                openRegister();
                closeMobileMenu();
              }}
              className="w-full bg-purple-800 text-white font-semibold px-4 py-2 rounded-md mt-4 hover:bg-purple-900 transition"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* Register Modal */}
      <Register isOpen={isRegisterOpen} onClose={closeRegister} />
    </>
  );
};

export default Navbar;
