import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

import { useAuth } from '../../context/auth';

const AccountActivate = () => {
  const [auth, setAuth] = useAuth();

  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const requestActivation = async () => {
      try {
        const { data } = await axios.post('/register', { token });
        if (data?.error) {
          toast.error(data.error);
        } else {
          // 이렇게 하면 새로고침하더라도 로그인 상태가 유지된다.
          localStorage.setItem('auth', JSON.stringify(data));

          setAuth(data);
          toast.success('로그인 성공 ! Muroom에 오신 것을 환영합니다.');
          navigate('/');
        }
      } catch (err) {
        console.log(err);
        toast.error(
          '뭔가 잘못 되었습니다. 서버와 브라우저 콘솔을 확인해주세요.',
        );
      }
    };
    if (token) requestActivation();
  }, [token, setAuth, navigate]);

  return (
    <div
      className='display-1 d-flex justify-content-center align-items-center vh-100'
      style={{ marginTop: '-10%' }}
    >
      Please wait...
    </div>
  );
};

export default AccountActivate;
