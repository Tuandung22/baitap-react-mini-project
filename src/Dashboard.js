import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos?limit=150').then((res) => setTodos(res.data.todos));
    axios.get('https://dummyjson.com/users?limit=1').then((res) => setTotalUsers(res.data.total));
  }, []);

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Bảng Thống Kê (Dashboard)</h2>
      <p>📌 Tổng số công việc: <b>{todos.length}</b></p>
      <p>✅ Công việc đã hoàn thành: <b>{completedCount}</b></p>
      <p>❌ Công việc chưa hoàn thành: <b>{todos.length - completedCount}</b></p>
      <p>👥 Tổng số người dùng: <b>{totalUsers}</b></p>
    </div>
  );
}