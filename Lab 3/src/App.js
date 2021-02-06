import React from 'react';
import HomePage from './components/homepage';

function App() {
  const fname = 'Kahn';
  return(
    <HomePage firstName={fname} />
  )
}

export default App;