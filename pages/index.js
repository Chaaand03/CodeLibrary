import Head from 'next/head';
import Script from 'next/script';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { GiBrain } from "react-icons/gi";
import { MdMenuBook } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import Intersect from '../public/Image/Intersect.png';
import Offering from '../components/Offering';
import Register from '../components/Register';
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonials from '../components/Testimonals';
import OurCoures from '../components/OurCoures';

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [hasPopupBeenDismissed, setHasPopupBeenDismissed] = useState(false);
  const coursesRef = useRef(null);

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
    if (!coursesRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowRegister(true);
          observer.disconnect();
        }
      },
      {
        root: null,         
        rootMargin: "0px",  
        threshold: 0.1,     
      }
    );

    observer.observe(coursesRef.current);

    return () => observer.disconnect();
  }, [coursesRef]);


  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Head>
        <title>Fun Online Math & Coding Classes for Kids – Free Demo | Code Library</title>
        <meta name="description" content=" Interactive 1:1 live math & coding classes for kids! 30-session curriculum, free demo class, personalized plans. Trusted by 5,000+ students. Join Code Library today!" />
        <meta name="keywords" content="online math classes for kids, coding classes for kids, SAT math preparation, AMC coaching, fun coding for kids, scholastic aptitude test, ap physics, interactive math tutoring, american math competition, online 1:1 tutoring, live coding sessions,online coding classes,math tutoring near me, code library" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://code-library.net/"></link>
      </Head>

      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1251646379953168');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1251646379953168&ev=PageView&noscript=1"
          alt="facebook-pixel"
        />
      </noscript>

      {/* Hero Section */}
      <header className="bg-[#f4edfc]">
        <div className="flex flex-col md:flex-row items-stretch max-w-screen-xl mx-auto">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 py-8 md:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#301934] leading-tight">
              Learn to Code & <br />
              <span>Love Math</span>
            </h1>
            
            <h3 className="mt-4 text-[#6F5D71] text-2xl font-semibold sm:text-4xl">Curiosity in, boredom out.</h3>

            <p className="mt-4 text-[#301934] text-base sm:text-lg md:text-xl leading-relaxed">
              Interactive live classes that make learning exciting for kids! <br></br>
              Join our adventure into the world of coding and mathematics.
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

      {/* Course Benefits Section */}
      <section className="px-4 sm:px-8 py-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl text-[#301934] sm:text-3xl font-bold">Course Benefits</h2>
        <p className="text-gray-600 mt-2">Our amazing 3-step Process</p>
        
        <div className="flex flex-wrap justify-center gap-12 mt-8 sm:gap-16">
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105 bg-[#DEA8DE]">
            <div className="flex text-black justify-center items-center text-4xl transition-colors">
              {/* <FaRocket /> */}
            </div>
            <h3 className="text-lg text-black font-semibold">30 Sessions to Master Fundamentals</h3>
            <p className="font-thin text-black mt-2">Progress at Your Own Pace – No Rush, No Pressure.</p>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105 bg-[#DEA8DE]">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              {/* <FaGraduationCap /> */}
            </div>
            <h3 className="text-lg text-black font-semibold">1:1 Expert Tutors</h3>
            <p className="font-thin text-black mt-2">Interactive Learning – "No Boring Lectures."</p>
          </div>
          
          <div className="p-6 bg-[#EFE3EF] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105 bg-[#DEA8DE]">
            <div className="flex justify-center items-center text-4xl text-black transition-colors">
              {/* <IoMdClock /> */}
            </div>
            <h3 className="text-lg text-black font-semibold">Free Demo: Solve a Real Problem in 30 Minutes</h3>
            <p className="font-thin text-black mt-2">Enroll in 2 Clicks Post-Trial –No Obligation.</p>
          </div>
        </div>
      </section>

      {/* Course Structure Section */}
      <section id="benefits-section" className="bg-[#E6E6FA] px-4 sm:px-8 py-12 max-w-full mx-auto text-center">
        <h2 className="text-2xl text-[#301934] sm:text-3xl font-bold">Course Structure</h2>

        <div className="flex flex-wrap justify-center gap-16 mt-8 ">
          <div className="p-6 bg-[#301934] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-[#EFE3EF] transition-colors">
              <GiBrain />
            </div>
            <h3 className="text-lg text-[#EFE3EF] font-semibold">Start at Your Level</h3>
          </div>
          
          <div className="p-6 bg-[#301934] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-[#EFE3EF] transition-colors">
              <MdMenuBook />
            </div>
            <h3 className="text-lg text-[#EFE3EF] font-semibold">Master Fundamentals (30 Sessions)</h3>
          </div>
          
          <div className="p-6 bg-[#301934] rounded-lg shadow-md text-center w-80 transform transition-transform duration-300 hover:scale-105">
            <div className="flex justify-center items-center text-4xl text-[#EFE3EF] transition-colors">
              <FaRocket />
            </div>
            <h3 className="text-lg text-[#EFE3EF] font-semibold">Advanced Topics (30 Sessions)</h3>
          </div>
        </div>
      </section>

      {/* Competitive Exams Section */}
      <Offering />

      {/* Our Courses Section */}
      <div ref={coursesRef}>
      <OurCoures />
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Register Modal */}
      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div>
  );
}
