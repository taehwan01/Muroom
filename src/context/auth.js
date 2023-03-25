import { useState, createContext, useContext } from 'react';
import axios from 'axios';

import { API } from '../config';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // 사용자 초기 상태(로그인 전)
  const [auth, setAuth] = useState({
    user: null,
    token: '',
    refreshToken: '',
  });

  axios.defaults.baseURL = API;

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
