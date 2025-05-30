// components/SubscribeSection.tsx
"use client";
import { useState } from "react";
import Register from "./Register";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [showForm, setShowForm] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Check if email is provided
    if (email.trim()) {
      console.log("Subscribed with email:", email);
      
      // Open the Register modal after email submission
      openRegister();
      
      // Optionally clear the email field
      // setEmail("");
    }
  };

  return (
    <section className="bg-purple-900 py-12 px-4 text-center text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Join Our Coding Adventure!</h2>
      <p className="text-sm md:text-base text-gray-300 mb-6">Get updates on new courses and special offers</p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full sm:w-auto px-4 py-2 rounded-md text-black placeholder:text-gray-500 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-white text-purple-900 font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>
      
      {/* Move Register component outside the button and add conditional rendering */}
      <Register isOpen={isRegisterOpen} onClose={closeRegister} />
    </section>
  );
};

export default SubscribeSection;
