import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Image/logo.png";
import Register from "./Register";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <div className={`cartTab fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform ${showCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-[300]`}>
        <div className="p-4">
          <h1 className="text-2xl text-black font-bold mb-4">Shopping Cart</h1>
          <div className="listCart max-h-[70vh] overflow-y-auto">
            <ul id="cart-list">
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-2 border-b">
                  <span>{item.name}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-500">×</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="btn mt-4 flex gap-2">
            <button onClick={() => setShowCart(false)} className="close bg-gray-500 text-white px-4 py-2 rounded">CLOSE</button>
            <button className="checkOut bg-green-500 text-white px-4 py-2 rounded">CHECK OUT</button>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md p-4 md:px-10 fixed w-full top-0 z-[200]">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-green-600">.LIBRARY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-black hover:text-green-500">Home</Link>
            <Link href="/about" className="text-black hover:text-green-500">About us</Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-black hover:text-green-500 flex items-center">
                Courses ▼
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-[101]">
                  <Link href="/Courses" className="block px-4 py-2 text-black hover:bg-gray-100">Mathematics</Link>
                  <Link href="/programming" className="block px-4 py-2 text-black hover:bg-gray-100">Programming</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-black hover:text-green-500">Blogs</Link>
            <Link href="/priceing" className="text-black hover:text-green-500">Pricing</Link>
            {/* <Link href="/contact" className="text-black hover:text-green-500">Contact</Link> */}


            {/* <div className="hidden md:flex space-x-6">
              <button onClick={() => setShowCart(true)} className="text-black hover:text-green-500">
                🛒 {cartItems.length > 0 && <span className="bg-red-500 text-black rounded-full px-2">{cartItems.length}</span>}
              </button>
            </div> */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-green-500 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6 absolute w-full">
            <Link href="/" className="block py-2 text-black hover:text-green-500">Home</Link>
            <Link href="/about" className="block py-2 text-black hover:text-green-500">About us</Link>

            {/* Mobile Dropdown */}
            <div className="py-2">
              <button
                className="w-full text-left text-black hover:text-green-500 flex justify-between"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Courses ▼
              </button>
              {dropdownOpen && (
                <div className="mt-2 pl-4">
                  <Link href="/courses/programming" className="block py-2 text-black hover:text-green-500">Programming</Link>
                  <Link href="/courses/mathematics" className="block py-2 text-black hover:text-green-500">Mathematics</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="block py-2 text-black hover:text-green-500">Blogs</Link>
            {/* <Link href="/contact" className="block py-2 text-black hover:text-green-500">Contact</Link> */}

            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-green-600 transition"
            >
              Register Now
            </button>
          </div>
        )}

        <Register isOpen={showForm} onClose={() => setShowForm(false)} />
      </nav>
      <div
        className="wrapperHeading cursor-pointer bg-[#0e1e35] p-3 mt-16 fixed w-full top-0 z-[100]"

      >
        <Link href={"/"}>
          <div
            className="marqueeHeading"
          >
            <p className="text-[18px] font-medium text-white z-[100] m-0">
              Offer Ends in <b className="text-red-700 font-bold"> 03:21:45 </b> – Last 12 Spots Remaining!

            </p>
            <div className="flex items-center space-x-4 text-white ml-12">
              <div className="flex items-center">
                <span className="text-gray-400 line-through">  <span className="mx-2">▪</span> Regular: $300/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="text-red-600 text-xl font-bold">Sale: $199/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded">Discount: 30% Off</span>
              </div>
            </div>
            <p className="text-[18px] font-medium text-white z-[100] my-0 ml-12">
              Offer Ends in <b className="text-red-700 font-bold"> 03:21:45 </b> –Last 12 Spots Remaining!
            </p>
            <div className="flex items-center space-x-4 text-white ml-12">
              <div className="flex items-center">
                <span className="text-gray-400 line-through"> <span className="mx-2">▪</span>Regular: $300/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="text-red-600 text-xl font-bold">Sale: $199/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded">Discount: 30% Off</span>
              </div>
            </div>

            <p className="text-[18px] font-medium text-white z-[100] my-0 ml-12">
              Offer Ends in <b className="text-red-700 font-bold">03:21:45 </b> –Last 12 Spots Remaining!
            </p>
            <div className="flex items-center space-x-4 text-white ml-12">
              <div className="flex items-center">
                <span className="text-gray-400 line-through"> <span className="mx-2">▪</span>Regular: $300/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="text-red-600 text-xl font-bold">Sale: $199/month</span>
              </div>
              <div className="flex items-center">
                <span className="mx-2">▪</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded">Discount: 30% Off</span>
              </div>
            </div>


          </div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
