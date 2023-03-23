import { Link } from 'react-router-dom';
import UserLogin from '../../components/UserLogin/UserLogin.component';

const Login = () => {
  return (
    <div>
      <UserLogin>
        <div className='login-contents'>
          <div style={{ marginTop: '-2rem' }}>
            <h1>Login Muroom</h1>
            <form action=''>
              <input
                type='text'
                placeholder='이메일 입력'
                className='login-input'
                required
                autoFocus
              />
              <br />
              <input
                type='password'
                placeholder='비밀번호 입력'
                className='login-input'
                required
              />
              <br />
              <button className='login-button'>로그인하기 !</button>
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
