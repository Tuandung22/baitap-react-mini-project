import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Login() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const isSuccess = await login(username, password);
    if (isSuccess) navigate('/dashboard');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label> <br />
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password:</label> <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: '15px' }}>Đăng Nhập</button>
      </form>
    </div>
  );
}