import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'; 
import {MdDelete} from 'react-icons/md';


const Crud = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'sleep' },
    { id: 2, text: 'coding' },
    { id: 3, text: 'eat' }
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className='to-do'>
                <div className='to-do-container'>
              <h1 className='mb-3 text-center '>To-Do List</h1>
              <input 
                type="text" 
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} 
                placeholder="Enter new task" 
              />
              <button onClick={handleAddTodo} className='add-btn'>Add</button>
              <ul>
                {todos.map(todo => (
                  <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => handleEditTodo(todo.id, prompt('Edit task:', todo.text))} className='edit-btn'>
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDeleteTodo(todo.id)} className='del-btn'>
                      <MdDelete />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
      </div>
  )
}

export default Crud