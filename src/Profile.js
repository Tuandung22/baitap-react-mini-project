import { useAuth } from './AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Hồ Sơ Cá Nhân</h2>
      <img src={user.image} alt="Avatar" width="100" style={{ borderRadius: '50%' }} />
      <p><b>Họ và tên:</b> {user.firstName} {user.lastName}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Giới tính:</b> {user.gender}</p>
    </div>
  );
}