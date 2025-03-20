"use client";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Register from "../components/Register";
import "swiper/css";
import "swiper/css/navigation";
import Testimoinal from "./Testimonals";

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const testimonialRef = useRef(null);
  const [showRegister, setShowRegister] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      title: "REFUND POLICY",
      content: `1. Eligibility for Refunds:
      - Parents can request a refund only after commencing the regular classes and within 60 days from the date of enrollment.
      - Refund requests made after 60 days from the date of enrollment will not be considered.
  
      2. Unused Classes:
      - Unused classes can be converted into credits which can be redeemed later across any course at Code Library.
      - These credits must be used within Two year from the date of issuance, after which they will expire.
      
      3. Cash Refunds:
      - Parents are eligible for a pro-rated refund corresponding to the number of unused classes.
      - A service fee of $99 will be deducted from the refund amount if a cash refund is requested.`,
    },
    {
      title: "CANCELLATION POLICY",
      content: `1. Class Cancellations by Students:
      - Students can cancel or reschedule a maximum of 6 sessions per 48 sessions.
      - Cancellations or rescheduling must be done at least 24 hours prior to the scheduled class time.
      - Failure to cancel or reschedule within this timeframe will result in the session being marked as a "No Show."
  
      2. No Show Policy:
      - If a student does not join a class without prior cancellation, it will be treated as a "Student No Show."
      - "No Show" sessions will be marked as completed and will not be eligible for rescheduling or compensation.`,
    },
    {
      title: "PRIVACY POLICY",
      content: `1. Information Collection:
      - We collect personal information including but not limited to names, contact details, payment information, and usage data to provide and improve our services.
  
      2. Use of Information:
      - Personal information is used to facilitate course enrollment, provide customer support, process payments, and communicate with users.
      - We may use anonymized data for analytical purposes to enhance our services.
  
      3. Information Sharing:
      - We do not share personal information with third parties except as necessary to provide our services or comply with legal obligations.
      - Third parties involved in service delivery are obligated to maintain the confidentiality of the information.`,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    faqRefs.current.forEach((ref) => ref && observer.observe(ref));
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Join our online coaching lessons for effective remote learning. Learn at your pace with expert guidance and flexible schedules."
        />
        <meta
          name="keywords"
          content="online coaching, remote learning, e-learning, virtual classes"
        />
        <meta name="author" content="Your Brand Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mt-16 mb-8 text-blue-800">
          Terms and Conditions
        </h1>

        {/* FAQ Section */}
        <div className="mt-6 space-y-2">
          {faqs.map((section, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="border-b border-gray-200 fade-up"
            >
              <button
                className="flex items-center justify-between w-full py-4 text-left text-lg font-medium hover:bg-gray-500 hover:text-black transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
                  <span>{section.title}</span>
                </div>
                <span className="text-teal-500">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div className="text-gray-600 text-sm p-4 bg-gray-50 rounded-b-lg whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <button
            className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            onClick={() => setShowRegister(true)}
          >
            I AGREE
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimoinal />

      {/* Custom Swiper Navigation CSS */}
      <style jsx>{`
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          width: 50px;
          height: 50px;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .swiper-button-prev-custom {
          left: -30px;
        }

        .swiper-button-next-custom {
          right: -30px;
        }

        @media (max-width: 768px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }

        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .fade-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Register isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </>
  );
};

export default HomePage;
