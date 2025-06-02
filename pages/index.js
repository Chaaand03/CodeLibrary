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
import Intersect from '../public/Image/Intersect.png';
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
import OurCoures from '../components/OurCoures';

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
    <div className="min-h-screen bg-white overflow-hidden">
      <Head>
        <title>Code.LIBRARY</title>
        <meta name="description" content="Master math and coding in 30 sessions. Book a free demo with expert tutors. Limited flash sale – 30-40% off! Trusted by 5,000+ students." />
        <meta name="keywords" content="math coding courses, free demo and flash sale, Online Courses, Learn UX, User Experience, Weekend UX, UX Certification" />
        <meta name="author" content="Book now,Limited offer" />
      </Head>

      {/* Hero Section */}
      <header className="bg-[#f4edfc]">
        <div className="flex flex-col md:flex-row items-stretch max-w-screen-xl mx-auto">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-8 md:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#301934] leading-tight">
              Learn to Code & <br />
              <span>Love Math</span>
            </h1>
            
            <h3 className="mt-4 text-[#301934] text-2xl font-semibold">The Fun Way!</h3>

            <p className="mt-4 text-[#301934] text-base sm:text-lg md:text-xl leading-relaxed">
              Interactive live classes that make learning exciting for kids! Join
              our adventure into the world of coding and mathematics.
            </p>

            <div className="mt-8">
              <button
                className="bg-transparent border-2 border-[#6e2ca7] text-[#6e2ca7] font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-md hover:bg-[#6e2ca7] hover:text-white transition duration-300"
                onClick={() => setShowRegister(true)}
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={Intersect}
              alt="Kids Learning"
              width={900}
              height={900}
              priority
              className="w-full h-full object-cover md:rounded-none md:shadow-none"
            />
          </div>
        </div>
      </header>

      {/* Features */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black px-4 py-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center space-x-3 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
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
      </div> */}

     

      {/* Course Benefits Section */}
      <section className="px-4 sm:px-8 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-black sm:text-3xl font-bold">Course Benefits</h2>
        <p className="text-gray-600 mt-2">Our amazing 3-step Process</p>
        
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="p-6 bg-[#DEA8DE] rounded-lg shadow-md text-center w-80">
            <div className="flex text-black justify-center items-center text-4xl transition-colors">
              <FaRocket />
            </div>
            <h3 className="text-lg text-black font-semibold">30 Sessions to Master Fundamentals</h3>
            <p className="font-thin text-black mt-2">Progress at Your Own Pace – No Rush, No Pressure.</p>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              <FaGraduationCap />
            </div>
            <h3 className="text-lg text-black font-semibold">1:1 Expert Tutors</h3>
            <p className="font-thin text-black mt-2">Interactive Learning – "No Boring Lectures."</p>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              <IoMdClock />
            </div>
            <h3 className="text-lg text-black font-semibold">Free Demo: Solve a Real Problem in 30 Minutes</h3>
            <p className="font-thin text-black mt-2">Enroll in 2 Clicks Post-Trial –No Obligation.</p>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="benefits-section" className="bg-[#E6E6FA] px-4 sm:px-8 py-12 max-w-full mx-auto text-center">
        <h2 className="text-2xl text-black sm:text-3xl font-bold">Course Structure</h2>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              <GiBrain />
            </div>
            <h3 className="text-lg text-black font-semibold">Start at Your Level</h3>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              <MdMenuBook />
            </div>
            <h3 className="text-lg text-black font-semibold">Master Fundamentals (30 Sessions)</h3>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              <FaRocket />
            </div>
            <h3 className="text-lg text-black font-semibold">Advanced Topics (30 Sessions)</h3>
          </div>
        </div>
      </section>

      {/* Offering Section */}
      <Offering />

      {/* Our Courses Section */}
      <OurCoures />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Register Modal */}
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div>
  );
}
