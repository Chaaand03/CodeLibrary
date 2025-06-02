import React, { useEffect } from 'react';

const TutorBirdContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94MmZKdyIsIldlYnNpdGVJRCI6Indic196TG1KRiIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzE4WWdKTCJ9";
    script.async = true;
    
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tutorbird-contact-container">
      <div id="tutorbird-contact-form"></div>
    </div>
  );
};

export default TutorBirdContactForm;
