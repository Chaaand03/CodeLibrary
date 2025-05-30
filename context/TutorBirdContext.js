import { createContext, useContext, useEffect, useState } from 'react';

// Create context with a default value
const TutorBirdContext = createContext({
  isScriptLoaded: false,
  setIsScriptLoaded: () => {}
});

export function TutorBirdProvider({ children }) {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const existingScript = document.querySelector('script[src*="tutorbird.com"]');
        
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94MmZKdyIsIldlYnNpdGVJRCI6Indic196TG1KRiIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzE4WUtKNiJ9";
          script.async = false;
          script.onload = () => setIsScriptLoaded(true);
          script.onerror = () => setIsError(true);
          document.head.appendChild(script);
        } else {
          setIsScriptLoaded(true);
        }
      } catch (error) {
        console.error('TutorBird script loading error:', error);
        setIsError(true);
      }
    }
  }, []);

  const value = {
    isScriptLoaded,
    isError,
    setIsScriptLoaded
  };

  return (
    <TutorBirdContext.Provider value={value}>
      {children}
    </TutorBirdContext.Provider>
  );
}

export const useTutorBird = () => {
  const context = useContext(TutorBirdContext);
  if (!context) {
    throw new Error('useTutorBird must be used within a TutorBirdProvider');
  }
  return context;
};