import React, { useEffect } from 'react';

const TutorBirdSignUpForm = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94MmZKdyIsIldlYnNpdGVJRCI6Indic196TG1KRiIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzE4WUtKNiJ9";
    script.async = true;
    script.id = "tutorbird-signup-script"; // Add ID for easier removal
    
    // Append to document
    document.body.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const scriptElement = document.getElementById("tutorbird-signup-script");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div className="tutorbird-signup-container">
      <div id="tutorbird-signup-form"></div>
    </div>
  );
};

export default TutorBirdSignUpForm;
