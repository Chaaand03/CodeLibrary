import { useEffect } from 'react';

const TutorBirdForm = ({ onClose }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94MmZKdyIsIldlYnNpdGVJRCI6Indic196TG1KRiIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzE4WUtKNiJ9";
    script.async = true;
    
    // Append to document
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Enquiry Form</h2>
      
      {/* TutorBird form will be injected here */}
      <div id="tutorbird-signup-form"></div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button
          type="button"
          onClick={onClose}
          style={{
            backgroundColor: '#D9D9D9',
            color: 'black',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            transition: 'background-color 0.3s'
          }}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default TutorBirdForm;
