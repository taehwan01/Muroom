import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';

import { useAuth } from '../../context/auth';
import './DropMenu.scss';
import { useNavigate } from 'react-router-dom';

const DropMenu = () => {
  const [auth, setAuth] = useAuth();

  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: '', refreshToken: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className='drop-menu' onClick={() => setDropDown(!dropDown)}>
      <FontAwesomeIcon
        icon={faUser}
        className='nav-link'
        style={{ color: '#F8A92E', padding: '0.5rem 1rem 0 1rem' }}
      />
      {dropDown ? (
        <>
          <FontAwesomeIcon
            icon={faCaretUp}
            className='nav-link'
            style={{ color: '#F8A92E', padding: '0.5rem 30px 0 0' }}
          />
          <div className={`drop-items ${dropDown ? 'show' : ''}`}>
            <a href='/'>내 프로필</a>
            <a href='/'>찜 목록</a>
            <a href='/'>대화 내역</a>
            <hr />
            <div className='logout' onClick={logout}>
              로그아웃
            </div>
          </div>
        </>
      ) : (
        <FontAwesomeIcon
          icon={faCaretDown}
          className='nav-link'
          style={{ color: '#F8A92E', padding: '0.5rem 30px 0 0' }}
        />
      )}
    </div>
  );
};

export default DropMenu;
