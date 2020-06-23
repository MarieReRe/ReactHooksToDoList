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

  
  return (
    <body>
      <main>
      <h1>DeltaV Daily To-Do's</h1>
      <form className="todo-list">
      
        <ul>
        {todos.map((todo, i) => (
      <div className="todo">
        <div className="checkbox" />
        <input type="text" value={todo.content} onKeyDown = {e => handleKeyDown(e,i)} />
      </div>
    ))}
        </ul>
      </form>
      </main>
    </body>
    
  );
}

export default App;


