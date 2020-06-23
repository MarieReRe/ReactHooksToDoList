import React, {useState} from 'react';


import './app.scss';



function App() {


  const [todos, setTodos] = useState([
    {
      content: 'Create a GitHub repository',
      isCompleted: false,
    },
    {
      content: 'Clone your repository',
      isCompleted: false,
    },
    {
      content: 'create your new React app',
      isCompleted: false,
    }
  ]);

 function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
  }
  //creation of todo input box
 function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }
  //Update the ToDo
  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }
  
  return (
    <body>
      <main>
      <h1>DeltaV Daily To-Do's</h1>
      <form className="todo-list">
      
        <ul>
        {todos.map((todo, i) => (
      <div className="todo">
        <div className="checkbox" />
        <input type="text" value={todo.content} onKeyDown = {e => handleKeyDown(e,i)}  onChange={e => updateTodoAtIndex(e, i)}/>
      </div>
    ))}
        </ul>
      </form>
      </main>
    </body>
    
  );
}

export default App;


