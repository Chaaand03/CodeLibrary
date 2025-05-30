// pages/contact.js

import React from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";
import TandC from "../components/TandC"

const Contact = () => {
  return (
    <div className="bg-pink-100 py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-900 mb-2">
        Get in Touch
      </h2>
      <p className="text-center text-gray-700 mb-12">
        We're here to help with your preparation journey
      </p>

      <div className=" rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8  overflow-hidden">
        {/* Contact Info */}
        <div className="p-8">
          <div className="bg-pink-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <HiOutlineMail className="text-lg text-purple-700 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>support@codelibrary.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlinePhone className="text-lg text-purple-700 mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+91 987654321</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineClock className="text-lg text-purple-700 mt-1" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p>Mon - Fri: 9AM–6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-lg text-purple-700 mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-4/5 p-8 bg-white rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                placeholder="Enter message subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white font-medium py-2 rounded-md hover:bg-purple-800 transition duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
      <TandC />
    </div>
  );
};

export default Contact;
