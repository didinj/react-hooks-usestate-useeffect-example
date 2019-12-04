import React, { useEffect } from 'react';
import '../App.css';

function ListenerEffect() {

  useEffect(() => {
    const listener = () => {
      console.log(`The screen is clicked`);
    };
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, []);

  return (
    <div className="App">
      <h4>Click the screen to listen the click event</h4>
    </div>
  );
}
        
export default ListenerEffect;