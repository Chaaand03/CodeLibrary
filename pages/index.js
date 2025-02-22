import Head from 'next/head';
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaHandshake, FaCheckCircle } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import girlImage from '../public/Image/girl.png';
import Source from '../public/Image/Source.png';
import twoImage from '../public/Image/twoImage.jpg';
import { FaChalkboardTeacher, FaVideo, FaBook } from "react-icons/fa";
import { motion } from 'framer-motion';
import Offering from '../components/Offering';
import Register from '../components/Register';
import 'swiper/css';
import 'swiper/css/pagination';
import Tutors from '../components/Tutors';
import Testimonials from '../components/Testimonals';

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [hasPopupBeenDismissed, setHasPopupBeenDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const benefitsSection = document.getElementById('benefits-section');
      if (benefitsSection && !hasPopupBeenDismissed) {
        const rect = benefitsSection.getBoundingClientRect();
        if (rect.bottom < 0) {
          setShowScrollPopup(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasPopupBeenDismissed]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRegister(true);
    }, 3000); // Opens after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-8 min-h-screen bg-white overflow-hidden">
      <Head>

        <title>30-40% Off Math/Coding Courses – Free Demo | Code.LIBRARY</title>
        <meta name="description" content="Master math and coding in 30 sessions. Book a free demo with expert tutors. 
Limited flash sale – 30-40% off! Trusted by 5,000+ students." />
        <meta name="keywords" content=" math coding courses, free demo and flash sale, Online Courses, Learn UX, User Experience, Weekend UX, UX Certification" />
        <meta name="author" content="Book now,Limited offer" />
      </Head>

      {/* <Navbar /> */}

      {/* Hero Section */}
      <header className="relative mt-16 px-4 sm:px-8 py-8 md:py-16 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Side - Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800">
              <span className="text-red-500">
                30-40% Flash Sale: Master Math & Coding in 30 Sessions – Free Demo Included!
              </span>
            </h1>
            <p className="mt-4 text-gray-800 text-base sm:text-lg">
              No Boring Classes. Personalized Plans. Trusted by 5,000+ Students.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                className="bg-red-500 text-white px-6 py-3 w-full sm:w-auto rounded-lg hover:bg-green-600 transition"
                onClick={() => setShowRegister(true)}
              >
                Book Your Free Demo Now!
              </button>
              <button
                className="bg-yellow-500 text-black px-6 py-3 w-full sm:w-auto rounded-lg hover:bg-green-600 transition"
                onClick={() => setShowRegister(true)}
              >
                Claim 30-40% Off – Limited Spots!
              </button>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0 px-4">
            <div className="relative bg-green-500 p-2 md:p-4 rounded-full w-[280px] sm:w-[350px] md:w-[400px]">

              {/* Animated Image */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <Image
                  src={girlImage}
                  alt="Student Learning"
                  width={350}
                  height={350}
                  className="rounded-full shadow-lg w-full h-auto"
                />
              </motion.div>

              {/* Stats Boxes */}
              <motion.div
                className="absolute top-2 md:top-4 right-0 bg-white shadow-lg p-2 md:p-3 rounded-lg flex items-center space-x-2 scale-75 md:scale-100"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaBook className="text-green-500 text-lg md:text-xl" />
                <div>
                  <span className="text-gray-600 text-xs md:text-sm">5K+</span>
                  <p className="text-green-600 font-bold text-[10px] md:text-xs">Online Courses</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-2 md:bottom-4 left-0 bg-white shadow-lg p-2 md:p-3 rounded-lg flex items-center space-x-2 scale-75 md:scale-100"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaVideo className="text-green-500 text-lg md:text-xl" />
                <div>
                  <span className="text-gray-600 text-xs md:text-sm">2K+</span>
                  <p className="text-green-600 font-bold text-[10px] md:text-xs">Video Courses</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-2 md:bottom-4 right-0 bg-white shadow-lg p-2 md:p-3 rounded-lg flex items-center space-x-2 scale-75 md:scale-100"
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaChalkboardTeacher className="text-green-500 text-lg md:text-xl" />
                <div>
                  <span className="text-gray-600 text-xs md:text-sm">250+</span>
                  <p className="text-green-600 font-bold text-[10px] md:text-xs">Tutors</p>
                </div>
              </motion.div>

            </div>
          </div>


        </div>
      </header>
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black px-4 py-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3 p-4  rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span className="text-2xl sm:text-3xl">🎤</span>
          <p className="font-bold text-sm sm:text-base md:text-lg">Public Speaking</p>
        </div>

        <div className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span className="text-2xl sm:text-3xl">📁</span>
          <p className="font-bold text-sm sm:text-base md:text-lg">Career Oriented</p>
        </div>

        <div className="flex items-center justify-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span className="text-2xl sm:text-3xl">💡</span>
          <p className="font-bold text-sm sm:text-base md:text-lg">Creative Thinking</p>
        </div>
      </div>


      {/* Collaborations */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center space-y-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-500">
            Problem-Solution Hook
          </h3>
          <p className="text-gray-600 font-bold text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Tired of Long, Boring Math/Coding Classes? Your Child Deserves a Better Way.
          </p>
        </div>

        {/* Image Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 justify-center items-center">
          {/* Small Image */}
          <Image
            src={Source}
            alt="Institution Logo 1"
            width={700}
            height={500}
            className="object-contain w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
          />

          {/* Larger Image */}
          <Image
            src={twoImage}
            alt="Institution Logo 2"
            width={900}
            height={500}
            className="object-contain w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px]"
          />
        </div>
      </div>

      {/* Our Services */}
      {/* import Image from "next/image"; */}

      <section className="px-4 sm:px-8 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-green-500 sm:text-3xl font-bold">Course Benefits Section</h2>
        <p className="text-gray-600 mt-2">Our amazing 3-step Process</p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="p-6 bg-green-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <FaRocket />
            </div>

            <h3 className="text-lg font-semibold">30 Sessions to Master Fundamentals</h3>
            <p className="font-semibold text-black mt-2">Progress at Your Own Pace – No Rush, No Pressure.</p>

          </div>
          <div className="p-6 bg-blue-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg font-semibold">1:1 Expert Tutors</h3>
            <p className="font-semibold text-black mt-2">Interactive Learning – "No Boring Lectures."</p>

          </div>
          <div className="p-6 bg-orange-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <IoMdClock />
            </div>
            <h3 className="text-lg  font-semibold">Free Demo: Solve a Real Problem in 30 Minutes</h3>
            <p className="font-semibold text-black mt-2">Enroll in 2 Clicks Post-Trial –No Obligation.</p>

          </div>
        </div>
      </section>



      <section id="benefits-section" className="px-4 sm:px-8 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-green-500 sm:text-3xl font-bold">Course Structure Clarity</h2>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="p-6 bg-green-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <GiBrain />
            </div>

            <h3 className="text-lg font-semibold">Start at Your Level</h3>

          </div>
          <div className="p-6 bg-blue-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <MdMenuBook />

            </div>
            <h3 className="text-lg font-semibold">Master Fundamentals (30 Sessions)</h3>


          </div>
          <div className="p-6 bg-orange-500 rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl  transition-colors duration-300 animate-bounce">
              <FaRocket />
            </div>
            <h3 className="text-lg  font-semibold">Master Fundamentals (30 Sessions)</h3>


          </div>
        </div>
      </section>


      {showScrollPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <h3 className="text-xl font-bold text-green-600 mb-4"> Free Demo Funnel</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center text-3xl text-blue-500 animate-bounce">
                  <FaCalendar />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black">Book a 30-Minute Demo (No Obligation)</p>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Schedule Demo
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center text-3xl text-green-500 animate-bounce">
                  <FaHandshake />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black">Meet Your Tutor & Solve a Real Problem."</p>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center text-3xl text-orange-500 animate-bounce">
                  <FaCheckCircle />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black">Enroll in 2 Clicks Post-Trial</p>
                  <button
                    onClick={() => setShowRegister(true)}
                    className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setShowScrollPopup(false);
                setHasPopupBeenDismissed(true);
              }}

              className="absolute top-4 right-4 text-2xl text-black hover:text-green-500"
            >
              ×
            </button>
          </div>
        </div>
      )}




      {/* Offering Section */}
      <Offering />

      {/* Tutors Section */}
      <Tutors />

      {/* Testimonials Section */}
      <Testimonials />

      {/* <Footer /> */}
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div >
  );
}
