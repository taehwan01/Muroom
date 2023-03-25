import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import UserLogin from '../../components/UserLogin/UserLogin.component';
import { useAuth } from '../../context/auth';

const Login = () => {
  const [auth, setAuth] = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true); // 사용자 로그인 시도 -> 로그인하기 버튼 비활성화
      const { data } = await axios.post(`/login`, { email, password }); // 서버로 사용자 데이터 전송
      if (data?.error) {
        toast.error(data.error); // 서버로부터 받은 에러 메시지 출력
      } else {
        setAuth(data);
        toast.success('로그인 성공, 어서오세요 !');
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      toast.error('뭔가 잘못 되었습니다. 서버와 브라우저 콘솔을 확인해주세요.');
    }
    setLoading(false);
  };

  return (
    <div>
      <UserLogin>
        <div className='login-contents'>
          <div style={{ marginTop: '-2rem' }}>
            <h1>Login Muroom</h1>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='이메일 입력'
                className='login-input'
                required
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <input
                type='password'
                placeholder='비밀번호 입력'
                className='login-input'
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <button disabled={loading} className='login-button'>
                {loading ? '로그인 중 ...' : '로그인하기 !'}
              </button>
            </form>
          </div>
        </div>
        <div
          style={{
            borderLeft: '0.1rem solid white',
            borderRight: '0.1rem solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Link className='register-button' to='/register'>
            계정이 없으신가요 ?
          </Link>
        </div>
      </UserLogin>
    </div>
  );
};

export default Login;
