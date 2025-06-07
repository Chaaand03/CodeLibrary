import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import learningImg from '../public/Image/Course.png'; // Adjust if needed
import Curriculum from '../components/Curriculum';

const curriculumSteps = [
  {
    title: 'Shadow School Learning',
    description:
      'We closely shadow the school curriculum, ensuring every math concept is covered. Students learn by doing through interactive simulations and personalised problem sets tailored to reinforce classroom learning.',
  },
  {
    title: 'Vedic Math',
    description:
      'We ensure daily calculation practice with a focus on speed and accuracy, enhanced by Vedic Maths techniques to build faster mental math skills.',
  },
  {
    title: 'Real-World Problem Solving',
    description:
      'We focus on real-world problem-solving, helping students see how math applies to everyday life — from understanding exponential growth during Covid to analyzing data behind climate change.',
  },
  {
    title: 'Competitive Math',
    description:
      'We provide extensive advanced math content, allowing students to explore out-of-school topics like number series, parity, and more — perfect for excelling in competitive exams.',
  },
];

const curriculumTabs = ['Class K-2', 'Class 3-5', 'Class 6-8', 'Class 9-12', 'Competitive Exams', 'Coding'];

export default function CurriculumSection() {
  const [selectedClass, setSelectedClass] = useState('Class K-2');

  const handleTabClick = (tab) => {
    setSelectedClass(tab);
    
    // Scroll only on initial view
    const curriculumElement = document.querySelector('[data-curriculum]');
    if (curriculumElement) {
      const elementPosition = curriculumElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;
      
      smoothScrollTo(offsetPosition, 2000);
    }
  };

  // Custom smooth scroll function with easing
  const smoothScrollTo = (targetPosition, duration = 2000) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function for smooth animation
    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Tab Buttons - Match styling with Curriculum.js */}
        <div className="flex justify-center gap-6 mb-8 overflow-x-auto">
          {curriculumTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm font-medium transition-all duration-500 px-1 py-1 rounded whitespace-nowrap ${
                selectedClass === tab
                  ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                  : 'text-gray-500 hover:text-purple-600 hover:bg-purple-25'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-7xl flex flex-col-reverse lg:flex-row items-center rounded-md p-5 gap-8 bg-[#f1eefb] mb-5">
          {/* Left: Steps with Dotted Line */}
          <div className="flex-1">
            <div className="flex flex-col items-start relative">
              {curriculumSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Number and Line */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-10 h-10 flex items-center justify-center bg-white border border-purple-300 text-black font-bold rounded-full shadow-md z-10">
                      {index + 1}
                    </div>
                    {/* Dotted Line below circle */}
                    {index !== curriculumSteps.length - 1 && (
                      <div className="hidden md:block h-10 border-l-2 border-dashed border-purple-600"></div>
                    )}
                  </div>

                  {/* Step content */}
                  <div>
                    <h3 className="text-lg text-gray-800 font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={learningImg}
              alt="Learning illustration"
              className="rounded-full shadow-md w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <Curriculum selectedTab={selectedClass} />
    </div>
  );
}
