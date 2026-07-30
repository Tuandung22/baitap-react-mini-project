import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('user')) || null;
  });

  const login = async (username, password) => {
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', { username, password });
      setUser(res.data);
      localStorage.setItem('user', JSON.stringify(res.data)); // Lưu lại vào máy
      return true;
    } catch (err) {
      alert('Tài khoản hoặc mật khẩu không đúng!');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);