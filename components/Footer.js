import Link from "next/link";
import logo from "../public/Image/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold mb-4 flex justify-left mt-4 gap-2">
            <Image src={logo} alt="Logo" width={40} height={40} 
            />
            <span className="text-2xl font-bold text-green-600">.LIBRARY</span>
          </h1>
          <p className="text-gray-400 mb-4">
            Top learning experiences that create more talent in the world.
          </p>
          <p className="text-gray-500">&copy; 2025 Ed-Circle. All rights reserved.</p>
        </div>

        {/* Product Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li><Link href="/overview" className="hover:text-green-400">Overview</Link></li>
            <li><Link href="/features" className="hover:text-green-400">Features</Link></li>
            <li><Link href="/solutions" className="hover:text-green-400">Solutions</Link></li>
            <li><Link href="/tutorials" className="hover:text-green-400">Tutorials</Link></li>
            <li><Link href="/pricing" className="hover:text-green-400">Pricing</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-green-400">About us</Link></li>
            <li><Link href="/careers" className="hover:text-green-400">Careers</Link></li>
            <li><Link href="/press" className="hover:text-green-400">Press <span className="text-sm text-green-400">New</span></Link></li>
            <li><Link href="/news" className="hover:text-green-400">News</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social</h2>
          <ul className="space-y-2">
            <li><Link href="https://twitter.com" className="hover:text-green-400">Twitter</Link></li>
            <li><Link href="https://linkedin.com" className="hover:text-green-400">LinkedIn</Link></li>
            <li><Link href="https://github.com" className="hover:text-green-400">GitHub</Link></li>
            <li><Link href="https://dribbble.com" className="hover:text-green-400">Dribbble</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal Links */}
      <div className="mt-12 text-center text-gray-500">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/terms" className="hover:text-green-400">Terms</Link></li>
          <li><Link href="/privacy" className="hover:text-green-400">Privacy</Link></li>
          <li><Link href="/cookies" className="hover:text-green-400">Cookies</Link></li>
          <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
