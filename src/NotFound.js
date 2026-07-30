import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>404</h1>
      <h2>Trang không tồn tại!</h2>
      <Link to="/dashboard">Quay lại trang chính</Link>
    </div>
  );
}