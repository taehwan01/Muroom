import './UserLogin.styles.scss';

const UserLogin = ({ children }) => {
  return (
    <div className='login'>
      <div className='login-box'>
        <div className='side-box'>
          <div
            className='white-box'
            style={{
              borderLeft: '0.1rem solid white',
              borderTop: '0.1rem solid white',
            }}
          ></div>
          <div
            style={{
              borderBottom: '0.1rem solid white',
              borderTop: '0.1rem solid white',
            }}
          ></div>
          <div
            className='white-box'
            style={{
              borderLeft: '0.1rem solid white',
              borderBottom: '0.1rem solid white',
            }}
          ></div>
        </div>
        <div className='side-box'>
          <div
            style={{
              borderLeft: '0.1rem solid white',
              borderRight: '0.1rem solid white',
            }}
          ></div>
          {children}
        </div>
        <div className='side-box'>
          <div
            className='white-box'
            style={{
              borderRight: '0.1rem solid white',
              borderTop: '0.1rem solid white',
            }}
          ></div>
          <div
            style={{
              borderBottom: '0.1rem solid white',
              borderTop: '0.1rem solid white',
            }}
          ></div>
          <div
            className='white-box'
            style={{
              borderRight: '0.1rem solid white',
              borderBottom: '0.1rem solid white',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
