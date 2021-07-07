import React from 'react';
import data from './data.json';

function App() {
  const shapes = data.map((item) => {
    return (<li>{item.shape}</li>)
  });
  return (
    <ul className="App">
      {shapes}
    </ul>
  );
}

export default App;
