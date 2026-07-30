import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/todos?limit=10').then((res) => setTodos(res.data.todos));
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), todo: text, completed: false };
    setTodos([newTodo, ...todos]);
    setText('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const filteredTodos = todos.filter((t) =>
    t.todo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Quản Lý Công Việc</h2>

      {/* Form Thêm */}
      <form onSubmit={handleAdd} style={{ marginBottom: '15px' }}>
        <input
          placeholder="Nhập công việc mới..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Thêm</button>
      </form>

      {/* Ô Tìm Kiếm */}
      <div style={{ marginBottom: '15px' }}>
        🔍 Tìm kiếm: {' '}
        <input
          placeholder="Gõ từ khóa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Danh sách */}
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id} style={{ marginBottom: '8px' }}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none', margin: '0 10px' }}>
              {item.todo}
            </span>
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}