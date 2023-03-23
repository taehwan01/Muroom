import { Link } from 'react-router-dom';
import UserLogin from '../../components/UserLogin/UserLogin.component';

const Register = () => {
  return (
    <div>
      <UserLogin>
        <div className='login-contents'>
          <div style={{ marginTop: '-2rem' }}>
            <h1>Register Muroom</h1>
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
              <button className='login-button'>회원가입하기 !</button>
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
