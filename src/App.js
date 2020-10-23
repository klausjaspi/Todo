import React, {useState, useEffect} from 'react';
import './App.css';
//Importing components
import Form from './components/form'
import TodoList from './components/TodoList';

function App() {
  
  //States
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(()=>{
    const getLocalTodos = () =>{
      if(localStorage.getItem('todos') ===null){
        localStorage.setItem('todos', JSON.stringify([]));
      } else{
        let todoLocal = JSON.parse(localStorage.getItem('todos')); 
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() =>{ 
    const filterHandler = () =>{
    switch(status){
      case'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true));
      break;
      case'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }; 
    const saveLocalTodos = () =>{
        localStorage.setItem('todos', JSON.stringify([]));
      };

  
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);
  
 
 
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
      setStatus={setStatus}
      filteredTodos={filteredTodos}
    />
    <TodoList 
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      filteredTodos={filteredTodos}
    />
    </div>
  );
}

export default App;
