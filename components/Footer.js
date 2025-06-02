import Link from "next/link";
import Image from "next/image";
import logo from "../public/Image/Codelibraylogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">

        {/* Logo + Description + Social Icons */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src={logo} alt="Code Library Logo" width={40} height={40} />
          </div>
          <p className="text-sm mb-4">
            Making coding and math fun for kids through interactive learning.
          </p>
          <div className="flex space-x-4 text-purple-800 text-lg">
            <a href="https://www.facebook.com/profile.php?id=61569483334740" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/code.library_/profilecard/?igsh=MWRjemJ4bHZ3dmc1NA==" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/Courses">Courses</Link></li>
            <li><Link href="/ContactUs">Contact US</Link></li>
            <li><Link href="/priceing">Pricing</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">CONTACT US</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MdEmail className="text-purple-800 mt-1" />
              <span>admin@code-library.net</span>
            </li>
            <li className="flex items-start space-x-2">
              <MdPhone className="text-purple-800 mt-1" />
              <span>+91 8660184479</span>
            </li>
            <li className="flex items-start space-x-2">
              <MdLocationOn className="text-purple-800 mt-1" />
              <span>652, 22nd Cross, 23rd Main Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-purple-300 text-center text-sm text-gray-700 py-4">
        © 2024 Code Library. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
