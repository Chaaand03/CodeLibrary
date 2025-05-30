import React, { useState } from 'react';
import Image from 'next/image';
import learningImg from '../public/Image/Course.png'; // Replace with the correct path
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

const curriculumTabs = ['Class K-2', 'Class 3-5', 'Class 6-8', 'Class 9-12', 'Competitive Exams'];

export default function CurriculumSection() {
  const [selectedClass, setSelectedClass] = useState('Class K-2');

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {curriculumTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedClass(tab)}
              className={`px-5 py-2 text-sm rounded-full font-medium border transition-all ${
                selectedClass === tab
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-600 border-purple-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-7xl flex flex-col-reverse lg:flex-row items-center rounded-md p-5 gap-8 bg-[#f1eefb] mb-5">
          {/* Left: Steps */}
          <div className="flex-1">
            <div className="space-y-8">
              {curriculumSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="min-w-10 h-10 flex items-center justify-center bg-white border border-purple-300 text-purple-700 font-bold rounded-full shadow-md">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg text-gray-700 font-semibold">{step.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{step.description}</p>
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
      <Curriculum/>
    </div>
  );
}
