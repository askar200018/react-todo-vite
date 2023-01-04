import { Button } from '@mui/material';
import React, { useState } from 'react';

const TODOS = [
  {
    id: 1,
    description: 'Desc 1'
  },
  {
    id: 2,
    description: 'Desc 2'
  }
];

export function Todo() {
  const [todos, setTodos] = useState(TODOS);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div className="container mx-auto bg-gray-200 rounded pt-12">
      <h1 className="text-2xl font-bold font-mono text-center mb-4">Todo</h1>
      <div>
        <input
          type="text"
          placeholder="Write name"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => {
            setTodos([
              ...todos,
              {
                id: todos.length,
                description: newTodo
              }
            ]);
            setNewTodo('');
          }}
        >
          Save
        </Button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.description}</li>
        ))}
      </ul>
    </div>
  );
}
