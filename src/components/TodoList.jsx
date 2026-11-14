import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { onEdit(todo.id, text); setIsEditing(false); }
    if (e.key === 'Escape') { setText(todo.text); setIsEditing(false); }
  };

  return (
    <div className="list-item">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} aria-label={`toggle-${todo.id}`} />
        {isEditing ? (
          <input className="lab-input" value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyDown} onBlur={() => setIsEditing(false)} autoFocus />
        ) : (
          <span onDoubleClick={() => setIsEditing(true)} style={{ textDecoration: todo.done ? 'line-through' : 'none', color: todo.done ? 'var(--color-muted)' : 'var(--color-white)' }}>
            {todo.text}
          </span>
        )}
      </div>
      <button className="btn btn--small btn--danger" onClick={() => onDelete(todo.id)}>✕</button>
    </div>
  );
}

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  return (
    <div className="lab-card">
      <h2 className="lab-card__title">04 / Todo List</h2>
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <input className="lab-input" value={input} onChange={e => setInput(e.target.value)} placeholder="Нове завдання..." aria-label="new-todo" />
        <button type="submit" className="btn">Додати</button>
      </form>
      <div className="list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} 
            onToggle={(id) => setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))}
            onDelete={(id) => setTodos(todos.filter(t => t.id !== id))}
            onEdit={(id, text) => setTodos(todos.map(t => t.id === id ? { ...t, text } : t))}
          />
        ))}
      </div>
    </div>
  );
}
