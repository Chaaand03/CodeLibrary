import React, { useState, useRef, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';
import Register from './Register';
// import ViewDetailedCurrForm from './ViewDetailedCurrForm'; 

// Tabs
const classTabs = ['Class K-2', 'Class 3-5', 'Class 6-8', 'Class 9-12', 'Competitive Exams', 'Coding'];

// Dynamic curriculum tabs based on selected class
const curriculumTabsData = {
  'Class K-2': ['Grade KG', 'Grade 1', 'Grade 2'],
  'Class 3-5': ['Grade 3', 'Grade 4', 'Grade 5'],
  'Class 6-8': ['Grade 6', 'Grade 7', 'Grade 8'],
  'Class 9-12': ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  'Competitive Exams': [],
  'Coding': []
};

// Topics Data - Based on Class and Grade
const topicsData = {
  'Class K-2': {
    'Grade KG': ['Matching And Sorting', 'Number And Operations', 'Shapes And Patterns', 'Time And Measurement', 'Data Handling'],
    'Grade 1': ['Numbers And Operations', 'Shapes And Patterns', 'Time, Measurement And Money', 'Data Handling',],
    'Grade 2': ['Number System', 'Number Operations', 'Shapes and Patterns', 'Time, Measurement and Money', 'Data Handling'],
  },
  'Class 3-5': {
    'Grade 3': ['Number System', 'Number Operations', 'Fractions', 'Time & Measurement', 'Geometry', 'Data Handling'],
    'Grade 4': ['Multiplication', 'Division', 'Factors And Multiples', 'Fractions & Decimals', 'Time, Money And Measurement', 'Geometry And Patterns', 'Data Handling'],
    'Grade 5': ['Number and Operations', 'Factors, Multiples and Primes', 'Fractions and Decimals', 'Applied Maths', 'Geometry', 'Mensuration', 'Data Handling'],
  },
  'Class 6-8': {
    'Grade 6': ['Numbers & Operations', 'Fractions, Decimals and Integers', 'Applied Maths', 'Algebra', 'Mensuration', 'Geometry', 'Data Handling'],
    'Grade 7': ['Numbers', 'Applied Maths', 'Algebra', 'Geometry', 'Mensuration', 'Data'],
    'Grade 8': ['Numbers', 'Applied Maths', 'Algebra', 'Geometry', 'Mensuration', 'Data'],
  },
  'Class 9-12': {
    'Grade 9': ['Numbers', 'Algebra', 'Geometry', 'Mensuration', 'Data'],
    'Grade 10': ['Numbers', 'Algebra', 'Geometry', 'Trigonometry', 'Mensuration', 'Data'],
    'Grade 11': ['Sets, Relations, and Functions', 'Numbers', 'Algebra', 'Sequences and Series', 'Coordinate Geometry', '3D Geometry', 'Calculus', 'Data'],
    'Grade 12': ['Relations and Functions', 'Differential Calculus', 'Integral Calculus', 'Coordinate Geometry', 'Vectors and Matrices', '3D Geometry', 'Probability'],
  },
  'Competitive Exams': ['SAT','AMC6','AMC8','AMC10','AMC12','ACT','AP Physics'],
  'Coding': ['Python', 'Web Development', 'Scratch']
};

// PDF Links Data - Based on Class and Grade
const pdfLinksData = {
  // 'Class K-2': {
  //   'Kindergarten': 'https://drive.google.com/file/d/1mQbRYPLR17_Ri5d91n65ZTITEnDJFvVx/view?usp=sharing',
  //   'Grade 1': 'https://drive.google.com/file/d/1u4-LYjCq3slgmnJy1HsBZjIDkwMsdQCA/view?usp=sharing',
  //   'Grade 2': 'https://drive.google.com/file/d/1KA41aBcI_LbWx8POsqZwOIG6sctISFZJ/view?usp=sharing',
  // },
  // 'Class 3-5': {
  //   'Grade 3': 'https://drive.google.com/file/d/10fGfe47MOU3UNBDcxUtbsUFTbi1Fymg1/view?usp=sharing',
  //   'Grade 4': 'https://drive.google.com/file/d/1pzMG7X8DCQgujCUqYdqkhb_1LO3aXmyr/view?usp=sharing',
  //   'Grade 5': 'https://drive.google.com/file/d/1qUjvYpYqmpueouOb5OHVIDyOyZCMmX6R/view?usp=sharing',
  // },
  // 'Class 6-8': {
  //   'Grade 6': 'https://drive.google.com/file/d/1e3RsEIBzV2f6DS7EXAGNXdAvy5edFUy-/view?usp=sharing',
  //   'Grade 7': 'https://drive.google.com/file/d/1IBURP-dpX7PwXhJs9me4ZppdoTT_dtXZ/view?usp=sharing',
  //   'Grade 8': 'https://drive.google.com/file/d/1IlnXrlWQZY_TEEUp-1OBkOe-1xFMIzeV/view?usp=sharing',
  // },
  // 'Class 9-12': {
  //   'Grade 9': 'https://drive.google.com/file/d/1WduPQ00OvDO3mae8vmj1K3uA5sNYqQP-/view?usp=sharing',
  //   'Grade 10': 'https://drive.google.com/file/d/1591cxpWkp6Oky5P1vXzxkAq2SOAF3Vrb/view?usp=sharing',
  //   'Grade 11': '',
  //   'Grade 12': '',
  // },
  'Class K-2': {
    'Kindergarten': '',
    'Grade 1': '',
    'Grade 2': '',
  },
  'Class 3-5': {
    'Grade 3': '',
    'Grade 4': '',
    'Grade 5': '',
  },
  'Class 6-8': {
    'Grade 6': '',
    'Grade 7': '',
    'Grade 8': '',
  },
  'Class 9-12': {
    'Grade 9': '',
    'Grade 10': '',
    'Grade 11': '',
    'Grade 12': '',
  },
  'Competitive Exams': {
    'SAT':'/CompetitiveExams/Sat',
    'AMC6':'/CompetitiveExams/AMC6',
    'AMC8':'/CompetitiveExams/AMC8',
    'AMC10':'/CompetitiveExams/AMC10',
    'AMC12':'/CompetitiveExams/AMC12',
    'ACT':'/CompetitiveExams/ACT',
    'AP Physics':'/CompetitiveExams/ApPhysics',

  },
  'Coding': {
    'Python': "https://pythoncurriculum.code-library.net/",
    'Web Development': '',
    'Scratch': '',
    // 'Web Development': 'https://drive.google.com/file/d/1JUAdylFRpuSyfOzlXYNToumeEdP-FYrs/view',
    // 'Scratch': 'https://drive.google.com/file/d/1JQblPVA71zWzFqA1ydh7ddM_fyrnoWJM/view',
  },
};

export default function Curriculum({ selectedTab }) {
  const [selectedClassTab, setSelectedClassTab] = useState(selectedTab);
  const [selectedGrade, setSelectedGrade] = useState('Grade KG');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  // const [detailedTopic, setDetailedTopic] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const curriculumRef = useRef(null);

  // Get current curriculum tabs based on selected class
  const currentCurriculumTabs = curriculumTabsData[selectedClassTab] || [];

  // Update selected tab when prop changes with animation (only on initial load or external change)
  useEffect(() => {
    setSelectedClassTab(selectedTab);
  }, [selectedTab]);

  // Reset grade when class tab changes manually
  useEffect(() => {
    const newGrades = curriculumTabsData[selectedClassTab] || [];
    if (newGrades.length > 0 && !newGrades.includes(selectedGrade)) {
      setSelectedGrade(newGrades[0]);
    }
  }, [selectedClassTab, selectedGrade]);

  // Get topics based on selected class and grade
  const topics = topicsData[selectedClassTab]?.[selectedGrade] || [];

  // Handle view curriculum button click
  const handleViewCurriculum = () => {
    const pdfLink = pdfLinksData[selectedClassTab]?.[selectedGrade];
    if (pdfLink) {
      window.open(pdfLink, '_blank');
    }
  };

  // Handle view detailed curriculum form with selected class and grade
  // const handleViewCurriculum = () => {
  //   const pdfLink = pdfLinksData[selectedClassTab]?.[selectedGrade] || '';
  //   setDetailedTopic({
  //     title: selectedClassTab,
  //     grade: selectedGrade,
  //     pdfLink,
  //   });
  // };

  const handleViewCourse = (courseName) => {
    const link = pdfLinksData[selectedClassTab]?.[courseName];
    if (link) {
      window.open(link, '_blank');
    }
  };
  

  // Handle register modal
  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);
 
  const renderContent = () => {
  if (['Competitive Exams', 'Coding'].includes(selectedClassTab)) {
    const items = topicsData[selectedClassTab];
    const links = pdfLinksData[selectedClassTab];
    return (
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Topics Blocks */}
        <div className="flex-1 p-6">
          <div className="flex flex-row flex-wrap gap-4 lg:flex-col items-center lg:gap-4 overflow-x-auto">
            {items.map((item, idx) => (
              <a
                key={idx}
                onClick={() => handleViewCourse(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-purple-700 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition w-max lg:w-1/4"
              >
                {item}
              </a>
            ))}
          </div>
          {/* {detailedTopic && (
            <ViewDetailedCurrForm
              topic={detailedTopic}
              onClose={() => setDetailedTopic(null)}
            />
          )} */}
        </div>

        {/* Enquiry Form */}
        <div className="w-full md:w-4/5 lg:w-1/3 p-6">
          <EnquiryForm />
        </div>
      </div>
    );
  }
  

    // Return regular content for other classes
    return (
      <>
        {/* Grade Tabs */}
        <div className="flex justify-start gap-6 mb-10 ml-2 lg:ml-0">
          {curriculumTabsData[selectedClassTab]?.map((grade) => (
            <button
              key={grade}
              onClick={() => setSelectedGrade(grade)}
              className={`text-sm font-medium transition-all duration-500  py-1 rounded ${
                selectedGrade === grade
                  ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                  : 'text-gray-500 hover:text-purple-600 hover:bg-purple-25'
              }`}
            >
              {grade}
            </button>
          ))}
        </div>

        {/* Curriculum + Enquiry Form */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="flex-1 space-y-6 p-6 rounded-xl">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-4 transition-all duration-500 ease-in-out transform hover:scale-102 hover:translate-x-2"
              >
                <div className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center font-bold text-gray-900 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-purple-50">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-purple-700">
                  {topic}
                </h4>
              </div>
            ))}
            <div className="pt-4">
              <button
                onClick={handleViewCurriculum}
                className="text-black font-semibold underline underline-offset-2 hover:text-purple-700 transition-all duration-500 transform hover:scale-105 hover:translate-x-2 cursor-pointer"
              >
                View Detailed Curriculum
              </button>
            </div>
            {/* {detailedTopic && (
              <ViewDetailedCurrForm
                topic={detailedTopic}
                onClose={() => setDetailedTopic(null)}
              />
            )} */}
          </div>

          {/* Right: Enquiry Form */}
          <div className="w-full md:w-4/5 lg:w-1/3 transition-all duration-500 transform hover:scale-102">
            <EnquiryForm />
          </div>
        </div>
      </>
    );
  };

  return (
    <div ref={curriculumRef} data-curriculum className="py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Class Tabs - Centered with same styling */}
        <div className="flex flex-nowrap justify-start gap-6 mb-8 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {classTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedClassTab(tab)}
              className={`text-sm font-medium transition-all duration-500 px-1 py-1 rounded whitespace-nowrap ${
                selectedClassTab === tab
                  ? 'text-purple-700 border-b-2 border-purple-700 bg-purple-50'
                  : 'text-gray-500 hover:text-purple-600 hover:bg-purple-25'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {renderContent()}

        {/* Sign Up Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={openRegister}
            className="border border-purple-800 text-purple-800 font-semibold px-10 py-2 rounded-md hover:bg-purple-100 transition-all duration-500 transform hover:scale-110 hover:shadow-lg hover:-translate-y-1"
          >
            Sign Up
          </button>
        </div>
      </div>

     
      {/* Register Modal */}
      <Register isOpen={isRegisterOpen} onClose={closeRegister} />

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}
