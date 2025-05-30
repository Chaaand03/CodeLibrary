import React, { useState } from 'react';
import TutorBirdSignUpForm from '../components/TutorBirdSignUpForm';

const SomePage = () => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <div className="main-content">
        {/* Your page content */}
        <button onClick={() => setShowForm(true)}>Sign Up</button>
      </div>
      
      {/* Modal for TutorBird form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
          <div className="bg-white p-8 rounded-xl max-w-md w-full relative">
            <button 
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4"
            >
              Close
            </button>
            <TutorBirdSignUpForm />
          </div>
        </div>
      )}
    </>
  );
};
