import React, {useState} from 'react';

import './App.css';


export default () => {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
      <div className = "App">
      <div>  count: {count} </div>
      <button onClick ={() => setCount (count + 1)}>ADD</button>
      <button onClick ={() => setCount (count - 1)}>SUBTRACT</button>


      </div>
      </header>
    </div>
  );

}


