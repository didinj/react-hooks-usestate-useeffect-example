import React, { useState } from 'react';
import '../App.css';

function MultipleState() {
  
  const [title, setTitle] = useState('Getting Started learning a React Hooks');
  const [year, setYear] = useState(2019);
  const [emails, setEmail] = useState([
    {name: 'my name', email: 'myemail@example.com'},
    {name: 'my second name',email: 'myemail@gmail.com'},
    {name: 'my third name',email: 'myemail@yahoo.com'},
    {name: 'my alias name',email: 'myemail@msn.com'}
  ]);

  return (
    <div className="App">
      <h2>{title}</h2>
      <h2>{year}</h2>
      <dl>
        {emails.map((item, idx) => (
          <dd>{item.name}, {item.email}</dd>
        ))}
      </dl>
      <button onClick={() => {
        setTitle('Another React Hooks Book');
        setYear(2020);
        setEmail([
          {name: 'Ian Rush', email: 'ian.rush@example.com'},
          {name: 'Roberto Baggio',email: 'r.baggio@gmail.com'},
          {name: 'Thierry Hendry',email: 't.henry@yahoo.com'},
          {name: 'David Seaman',email: 'd.seaman@msn.com'}
        ]);
      }}>
        Change Title
      </button>
    </div>
  );
}

export default MultipleState;