// Smooth scroll navigation hook for anchor links
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    // Remove the # if it exists
    const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId;
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      // Fallback for sections that might not be loaded yet
      setTimeout(() => {
        const retryElement = document.getElementById(id);
        if (retryElement) {
          retryElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 100);
    }
  }, []);

  return { scrollToSection };
};