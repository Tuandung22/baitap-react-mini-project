import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <nav style={{ padding: '10px', background: '#e2e8f0', marginBottom: '20px' }}>
      <Link to="/dashboard">Dashboard</Link> | {' '}
      <Link to="/todos">Công Việc</Link> | {' '}
      <Link to="/users">Người Dùng</Link> | {' '}
      <Link to="/profile">Hồ Sơ</Link> | {' '}
      <span>Xin chào, <b>{user.firstName}</b>! </span>
      <button onClick={() => { logout(); navigate('/login'); }}>Đăng xuất</button>
    </nav>
  );
}