import React, { useState, useEffect } from 'react';
import '../App.css';

function BasicEffect() {

  const [title, setTitle] = useState('React Hooks at a Glance');
  const [year, setYear] = useState(2019);

  useEffect(() => {
    setTitle(`The new articles of ${year}`);
  });

  return (
    <div className="App">
      <h2>{title}</h2>
    </div>
  );
}
    
export default BasicEffect;