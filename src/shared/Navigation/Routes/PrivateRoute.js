import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../../context/auth.js';

const PrivateRoute = () => {
  const [auth, setAuth] = useAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get('/current-user', {
        headers: {
          Authorization: auth?.token,
        },
      });
      setIsLoggedIn(true);
    } catch (err) {
      console.log(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    if (auth?.token) getCurrentUser();
  }, [auth?.token]);

  return isLoggedIn ? <Outlet /> : '';
};

export default PrivateRoute;
