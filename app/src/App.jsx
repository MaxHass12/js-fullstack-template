import { useState } from 'react';
import { getRoot } from './services/main';

function App() {
  const foo = async () => {
    await getRoot();
  };
  foo();
  return <h1>Hello World</h1>;
}

export default App;
