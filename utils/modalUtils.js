// Global utility for managing modals outside of React's rendering system

// Create a modal container if it doesn't exist
const ensureModalContainer = () => {
  let container = document.getElementById('global-modal-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'global-modal-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    container.style.zIndex = '99999'; // Very high z-index
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.3s ease';
    container.style.pointerEvents = 'none';
    document.body.appendChild(container);
  }
  return container;
};

// Show the TutorBird signup form
export const showTutorBirdSignupForm = () => {
  // Ensure we're on the client side
  if (typeof window === 'undefined') return;
  
  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
  
  // Get or create the modal container
  const container = ensureModalContainer();
  
  // Clear any existing content
  container.innerHTML = '';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.padding = '2rem';
  modalContent.style.borderRadius = '0.75rem';
  modalContent.style.maxWidth = '28rem';
  modalContent.style.width = '90%';
  modalContent.style.maxHeight = '90vh';
  modalContent.style.overflowY = 'auto';
  modalContent.style.position = 'relative';
  modalContent.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
  
  // Add title
  const title = document.createElement('h2');
  title.textContent = 'Enquiry Form';
  title.style.fontSize = '1.25rem';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '1rem';
  modalContent.appendChild(title);
  
  // Add form container
  const formContainer = document.createElement('div');
  formContainer.id = 'tutorbird-signup-form';
  modalContent.appendChild(formContainer);
  
  // Add cancel button
  const buttonContainer = document.createElement('div');
  buttonContainer.style.marginTop = '1rem';
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'flex-start';
  
  const cancelButton = document.createElement('button');
  cancelButton.textContent = 'Cancel';
  cancelButton.style.backgroundColor = '#D9D9D9';
  cancelButton.style.color = 'black';
  cancelButton.style.padding = '0.5rem 1rem';
  cancelButton.style.borderRadius = '0.375rem';
  cancelButton.style.border = 'none';
  cancelButton.style.cursor = 'pointer';
  cancelButton.onclick = hideTutorBirdForm;
  
  buttonContainer.appendChild(cancelButton);
  modalContent.appendChild(buttonContainer);
  
  // Add to container
  container.appendChild(modalContent);
  
  // Add click handler to close when clicking outside
  container.onclick = (e) => {
    if (e.target === container) {
      hideTutorBirdForm();
    }
  };
  
  // Load TutorBird script
  const script = document.createElement('script');
  script.src = "https://app.tutorbird.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF94MmZKdyIsIldlYnNpdGVJRCI6Indic196TG1KRiIsIldlYnNpdGVCbG9ja0lEIjoid2JiXzE4WUtKNiJ9";
  script.async = true;
  script.id = 'tutorbird-script';
  document.body.appendChild(script);
  
  // Show the modal
  setTimeout(() => {
    container.style.opacity = '1';
    container.style.pointerEvents = 'auto';
  }, 10);
};

// Hide the TutorBird form
export const hideTutorBirdForm = () => {
  // Ensure we're on the client side
  if (typeof window === 'undefined') return;
  
  // Re-enable body scrolling
  document.body.style.overflow = '';
  
  // Get the modal container
  const container = document.getElementById('global-modal-container');
  if (container) {
    // Hide the modal
    container.style.opacity = '0';
    container.style.pointerEvents = 'none';
    
    // Remove the content after transition
    setTimeout(() => {
      container.innerHTML = '';
    }, 300);
  }
  
  // Remove TutorBird script
  const script = document.getElementById('tutorbird-script');
  if (script && document.body.contains(script)) {
    document.body.removeChild(script);
  }
};
