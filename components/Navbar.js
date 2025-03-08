import { useState,useEffect } from "react";
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



  const initialTime = 3 * 60 * 60 + 21 * 60 + 45; // 3 hours 21 minutes 45 seconds in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return initialTime; // Restart countdown
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert seconds into HH:MM:SS format
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

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
            {/* <Image src={logo} alt="Logo" width={40} height={40} /> */}
            <span className="text-2xl font-bold text-green-600">CODE LIBRARY</span>
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

            <Link href="/blog" className="text-black  hover:text-green-500">Blogs</Link>
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
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-[101]">
                  <Link href="/Courses" className="block px-4 py-2 text-black hover:bg-gray-100">Mathematics</Link>
                  <Link href="/programming" className="block px-4 py-2 text-black hover:bg-gray-100">Programming</Link>
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
      <div className="wrapperHeading cursor-pointer bg-[#0e1e35] p-3 mt-16 fixed w-full top-0 z-[100] flex justify-center items-center">
      <Link href={"/"} className="w-full max-w-screen-lg">
        <div className="flex flex-nowrap justify-center items-center gap-x-2 gap-y-1 text-white text-center">
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-medium text-white z-[100] m-0">
            Offer Ends in{" "}
            <b className="text-red-700 font-bold">{formatTime(timeLeft)}</b> – Last 12 Spots Remaining!
          </p>
          <span className="text-gray-400 line-through text-[12px] sm:text-[14px] md:text-[16px]">
            ▪ Regular: $300/month
          </span>
          <span className="text-red-600 font-bold text-[14px] sm:text-[16px] md:text-[18px]">
            ▪ Sale: $199/month
          </span>
          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[12px] sm:text-[14px] md:text-[16px]">
            ▪ Discount: 30% Off
          </span>
        </div>
      </Link>
    </div>


    </>
  );
};

export default Navbar;
