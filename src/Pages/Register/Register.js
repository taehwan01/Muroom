import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

import UserLogin from '../../components/UserLogin/UserLogin.component';

// TODO
// 사용자 회원가입도 추가하고
// 사용자 회원가입 및 로그인 시 UI에서 로그인 없애고 사용자 모형으로 바꿔치기

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true); // 사용자 가입 시도 -> 로그인하기 버튼 비활성화
      const { data } = await axios.post(`/pre-register`, { email, password }); // 서버로 사용자 데이터 전송
      if (data?.error) {
        toast.error(data.error); // 서버로부터 받은 에러 메시지 출력
      } else {
        toast.success('회원가입 인증 메일이 이메일로 전송되었습니다.');
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
            <h1>Register Muroom</h1>
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
                {loading ? '메일 전송 중 ...' : '회원가입하기 !'}
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
          <Link className='register-button' to='/login'>
            계정이 이미 있으신가요 ?
          </Link>
        </div>
      </UserLogin>
    </div>
  );
};

export default Register;
