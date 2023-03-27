import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/auth';

import './Navigation.styles.scss';

const Navigation = () => {
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: '', refreshToken: '' });
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        Muroom
      </Link>
      <div className='nav-links-container'>
        <NavLink className='nav-link' to='/places'>
          PLACES
        </NavLink>
        <NavLink className='nav-link' to='/map'>
          MAP
        </NavLink>
        <NavLink className='nav-link' to='/login'>
          LOGIN
        </NavLink>
        {/* <form className='search-box-container'>
          <input type='text' />
          <button>SEARCH</button>
        </form> */}
      </div>
    </div>
  );
};

export default Navigation;
