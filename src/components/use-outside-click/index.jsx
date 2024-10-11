import React, {useEffect} from 'react'

// Custom hook to detect clicks outside of a specified element
export default function useOUtsideClick(ref, handler) {
  // Effect to add and clean up event listeners
  useEffect(() => {
    // Listener function to handle the click events
    function listener(event) {
      // If the click is inside the ref, do nothing
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      // If the click is outside, call the handler
      handler(event);
    }

    // Add event listeners for mouse and touch events
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]); // Dependencies for the effect

  // This component does not render anything
  return (
    <div>index</div>
  );
}
