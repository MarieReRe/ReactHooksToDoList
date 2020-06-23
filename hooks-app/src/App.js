import React, {useState} from 'react';
import useDarkMode from './components/customHook'
import Form from './components/form'

import './App.css';


export default () => {
  const [toDO, setToDo] = useState([
    {text: "Create a GitHub repository"},
    {text: "Clone your repository"},
    {text: "Create your new React app"}
  ]);
  


  return (
    <div className="App">
      <header className="App-header">
      <div className = "todo-list">
      <Form
          key={index}
          index={index}
          todo={todo}
        />
      <div>   </div>
      


      </div>
      </header>
    </div>
  );

}


