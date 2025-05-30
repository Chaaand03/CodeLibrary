import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm';
import Register from './Register';

// Tabs
const classTabs = ['Class K-2', 'Class 3-5', 'Class 6-8', 'Class 9-12', 'Competitive Exams'];
const curriculumTabs = ['Grade 3', 'Grade 4', 'Grade 5'];

// Topics Data - Based on Class and Grade
const topicsData = {
  'Class K-2': {
    'Grade 3': ['Counting', 'Basic Addition', 'Shapes', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Addition & Subtraction', 'Simple Fractions', 'Patterns', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 5': ['Place Value', 'Money Math', 'Measurement', 'Time & Measurement', 'Geometry', 'Data Handling'],
  },
  'Class 3-5': {
    'Grade 3': ['Number System', 'Number Operations', 'Fractions', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Time & Measurement', 'Geometry', 'Data Handling', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 5': ['Multiplication', 'Decimals', 'Area & Perimeter', 'Time & Measurement', 'Geometry', 'Data Handling'],
  },
  'Class 6-8': {
    'Grade 3': ['Pre-Algebra', 'Integers', 'Graphs', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Geometry Basics', 'Equations', 'Probability', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 5': ['Ratio & Proportion', 'Expressions', 'Statistics', 'Time & Measurement', 'Geometry', 'Data Handling'],
  },
  'Class 9-12': {
    'Grade 3': ['Algebra', 'Functions', 'Quadratics', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Geometry', 'Trigonometry', 'Linear Equations', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 5': ['Probability', 'Statistics', 'Logarithms', 'Time & Measurement', 'Geometry', 'Data Handling'],
  },
  'Competitive Exams': {
    'Grade 3': ['Quantitative Aptitude', 'Logical Reasoning', 'Reading Comprehension', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Algebra', 'Mental Ability', 'Mock Tests', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 5': ['Geometry', 'Data Interpretation', 'Practice Papers', 'Time & Measurement', 'Geometry', 'Data Handling'],
  },
};

// PDF Links Data - Based on Class and Grade
const pdfLinksData = {
  'Class K-2': {
    'Grade 3': 'https://drive.google.com/file/d/1t3KTg9Sw4mZkzkDlGTjOP2N34226HrZi/view',
    'Grade 4': 'https://drive.google.com/file/d/1t3KTg9Sw4mZkzkDlGTjOP2N34226HrZi/view',
    'Grade 5': 'https://drive.google.com/file/d/1t3KTg9Sw4mZkzkDlGTjOP2N34226HrZi/view',
  },
  'Class 3-5': {
    'Grade 3': 'https://drive.google.com/file/d/1AmnliWJZYACIuVim_sVcrgU_agGfFKIM/view',
    'Grade 4': 'https://drive.google.com/file/d/1AmnliWJZYACIuVim_sVcrgU_agGfFKIM/view',
    'Grade 5': 'https://drive.google.com/file/d/1AmnliWJZYACIuVim_sVcrgU_agGfFKIM/view',
  },
  'Class 6-8': {
    'Grade 3': 'https://drive.google.com/file/d/1au_euVqoPyltcqmOdPW_kic85NbC6yDW/view',
    'Grade 4': 'https://drive.google.com/file/d/1au_euVqoPyltcqmOdPW_kic85NbC6yDW/view',
    'Grade 5': 'https://drive.google.com/file/d/1au_euVqoPyltcqmOdPW_kic85NbC6yDW/view',
  },
  'Class 9-12': {
    'Grade 3': 'https://drive.google.com/file/d/1hWgG7LKdL96Rsuq0i4qq__H_dEzJoCOj/view',
    'Grade 4': 'https://drive.google.com/file/d/1hWgG7LKdL96Rsuq0i4qq__H_dEzJoCOj/view',
    'Grade 5': 'https://drive.google.com/file/d/1hWgG7LKdL96Rsuq0i4qq__H_dEzJoCOj/view',
  },
  'Competitive Exams': {
    'Grade 3': 'https://drive.google.com/file/d/1gwPqR4XB0wg7u1pjnWslDcfZgc13R934/view',
    'Grade 4': 'https://drive.google.com/file/d/1gwPqR4XB0wg7u1pjnWslDcfZgc13R934/view',
    'Grade 5': 'https://drive.google.com/file/d/1gwPqR4XB0wg7u1pjnWslDcfZgc13R934/view',
  },
};

export default function Curriculum() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 3');
  const [selectedClassTab, setSelectedClassTab] = useState('Class 3-5');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Functions to handle Register modal
  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  // Function to handle PDF opening
  const handleViewCurriculum = () => {
    const pdfLink = pdfLinksData[selectedClassTab] && pdfLinksData[selectedClassTab][selectedGrade]
      ? pdfLinksData[selectedClassTab][selectedGrade]
      : 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy-default.pdf';
    
    // Open PDF in new tab
    window.open(pdfLink, '_blank');
  };

  // Get topics based on selected class and grade
  const topics =
    topicsData[selectedClassTab] && topicsData[selectedClassTab][selectedGrade]
      ? topicsData[selectedClassTab][selectedGrade]
      : [];

  return (
    <div className="bg-[#f1eefb] py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Class Tabs */}
        <div className="flex justify-center gap-6 mb-4 flex-wrap text-sm sm:text-base font-medium text-gray-800">
          {classTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedClassTab(tab)}
              className={`transition ${
                selectedClassTab === tab
                  ? 'font-semibold text-black underline underline-offset-4'
                  : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grade Tabs */}
        <div className="flex justify-start gap-6 mb-10 ml-2 lg:ml-0">
          {curriculumTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedGrade(tab)}
              className={`text-sm font-medium transition ${
                selectedGrade === tab
                  ? 'text-purple-700 border-b-2 border-purple-700'
                  : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Curriculum + Enquiry Form */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Topics */}
          <div className="flex-1 space-y-6 p-6 rounded-xl">
            {topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center font-bold text-gray-900 shadow-sm">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{topic}</h4>
              </div>
            ))}
            <div className="pt-4">
              <button 
                onClick={handleViewCurriculum}
                className="text-black font-semibold underline underline-offset-2 hover:text-purple-700 transition cursor-pointer"
              >
                View Detailed Curriculum
              </button>
            </div>
          </div>

          {/* Right: Enquiry Form - Slightly Increased Width */}
          <div className="w-full md:w-4/5 lg:w-1/3">
            <EnquiryForm />
          </div>
        </div>

        {/* Sign Up Button */}
        <div className="flex justify-center mt-10">
          <button 
            onClick={openRegister}
            className="border border-purple-800 text-purple-800 font-semibold px-10 py-2 rounded-md hover:bg-purple-100 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Register Modal */}
      <Register isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}
