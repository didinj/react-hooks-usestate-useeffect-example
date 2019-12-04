import React, { useState } from 'react';
import '../App.css';

function BasicState() {
  
  const [title, setTitle] = useState('Getting Started learning a React Hooks');

  return (
    <div className="App">
      <h2>{title}</h2>
      <button onClick={() => setTitle('React Hooks in My Learning Path')}>
        Change Title
      </button>
    </div>
  );
}

export default BasicState;