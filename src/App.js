import './App.css';
import { useQuery } from 'react-query';
import { useState } from 'react';

function Button() {
  const { data, error } = useQuery('hello-world', () => {
    return new Promise(resolve => {
      setTimeout(() => resolve(Math.random()), 2000)
    })
  })

  return <button>{data}{error}</button>
}

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {visible && <Button />}
      <button onClick={() => setVisible(visible => !visible)}>click</button>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
