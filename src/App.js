import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h2>React Hooks Examples</h2>
      <h3>useState Examples:</h3>
      <p><a href="/hooks-state/basic-state">Basic useState Example</a></p>
      <p><a href="/hooks-state/multiple-state">Multiple useState Example</a></p>
      <h3>useEffect Examples:</h3>
      <p><a href="/hooks-effect/basic-effect">Basic useEffect Example</a></p>
      <p><a href="/hooks-effect/fetch-effect">Fetch useEffect Example</a></p>
      <p><a href="/hooks-effect/axios-effect">Axios useEffect Example</a></p>
      <p><a href="/hooks-effect/listener-effect">Listener useEffect Example</a></p>
      <p><a href="/hooks-effect/resize-effect">Resize useEffect Example</a></p>
    </div>
  );
}

export default App;
