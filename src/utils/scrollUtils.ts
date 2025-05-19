/**
 * Smooth scrolls to an element on the page
 * 
 * @param targetSelector - CSS selector for the target element
 * @param offset - Additional offset in pixels (default: 0)
 */
export const scrollToElement = (targetSelector: string, offset = 0): void => {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) return;
  
  // Check if Lenis is available on window object
  if (typeof window !== 'undefined') {
    // Access to the Lenis instance in window
    const lenis = (window as Window & { lenis?: unknown }).lenis;
    
    if (lenis && typeof lenis === 'object' && lenis !== null && 'scrollTo' in lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetElement, { offset });
    } else {
      // Fallback to native scrolling if Lenis is not available
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

/**
 * Updates the Lenis instance in the global window object
 * To be called from the SmoothScrollProvider
 * 
 * @param lenisInstance - The Lenis instance
 */
export const setGlobalLenisInstance = (lenisInstance: unknown): void => {
  if (typeof window !== 'undefined') {
    (window as Window & { lenis?: unknown }).lenis = lenisInstance;
  }
}; 