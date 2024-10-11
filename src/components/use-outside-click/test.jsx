// Import necessary hooks from React
import { useState, useRef } from 'react';
// Import the custom hook for outside click detection
import useOUtsideClick from '.';
// Import the CSS styles
import './style.css';

// Main component definition
export default function UseOnClickOUtsideTest() {
  // State to manage the visibility of the content
  const [showContent, setShowContent] = useState(false);
  // Ref to attach to the content for outside click detection
  const ref = useRef();

  // Use the custom hook to handle clicks outside the specified ref
  useOUtsideClick(ref, () => setShowContent(false));

  return (
    <div className='outside'>
      {
        showContent 
        ? (
            // If showContent is true, render the content
            <div ref={ref}>
              <h1>This is a random content</h1>
              <p>Please click outside of this to close this. It won\'t close if you click inside of this content.</p>
            </div>
          )
        : (
            // If showContent is false, render a button to show the content
            <button onClick={() => setShowContent(true)} className='btn'>Show Case</button>
          )
      }
    </div>
  );
}
