import React, {useState} from 'react';
import './App.css';
//Importing components
import Form from './components/form'
import TodoList from './components/TodoList';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Klaus's Todo List</h1>
    </header>
    <Form 
      inputText={inputText} 
      todos={todos}
      setTodos={setTodos} 
      setInputText={setInputText}
    />
    <TodoList 
    todos={todos}
    setTodos={setTodos}
    />
    </div>
  );
}

export default App;
