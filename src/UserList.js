import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userTodos, setUserTodos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=8').then((res) => setUsers(res.data.users));
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    axios.get(`https://dummyjson.com/todos/user/${user.id}`).then((res) => setUserTodos(res.data.todos));
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Danh Sách Người Dùng</h2>
      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Cột danh sách user */}
        <ul>
          {users.map((u) => (
            <li
              key={u.id}
              style={{ cursor: 'pointer', color: 'blue', marginBottom: '8px' }}
              onClick={() => handleSelectUser(u)}
            >
              👉 {u.firstName} {u.lastName} ({u.email})
            </li>
          ))}
        </ul>

        {/* Cột hiển thị chi tiết khi bấm vào user */}
        {selectedUser && (
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
            <h3>Thông tin: {selectedUser.firstName} {selectedUser.lastName}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Công ty: {selectedUser.company?.name}</p>
            <h4>Công việc của người này:</h4>
            <ul>
              {userTodos.map((t) => (
                <li key={t.id}>{t.completed ? '✅' : '❌'} {t.todo}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}