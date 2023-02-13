import React, { useState } from 'react';

const Form = ({inputText, setInputText, todos, setTodos, filter, setFilter}) => {

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                text: inputText,
                completed: false,
                id: Math.random() * 100
            }
        ]);
        setInputText('');
    }

    const filterHandler = (e) => {
        setFilter(e.target.value);
    }

  return (
    <form>
        <input type="text" className="todo-input" value={inputText} onChange={handleInput} />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo" onChange={filterHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
  )
}

export default Form