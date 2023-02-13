import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalStreage();
  }, [todos, filter])

  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalStreage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    // if(localStorage.getItem('todos') === null) {
    //   localStorage.setItem('todos', JSON.stringify([]));
    // }
    // else{
    //   const currentTodos = localStorage.getItem('todos');
    //   setTodos(JSON.parse(currentTodos));
    // }
    //console.log(localStorage.getItem('todos'))
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        filter={filter}
        setFilter={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
