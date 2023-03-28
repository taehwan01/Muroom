import { Link, NavLink } from 'react-router-dom';
import DropMenu from '../../components/DropMenu/DropMenu';

import { useAuth } from '../../context/auth';

import './Navigation.styles.scss';

const Navigation = () => {
  const [auth, setAuth] = useAuth();

  const loggedIn =
    auth.user !== null && auth.token !== '' && auth.refreshToken !== '';

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
        {loggedIn ? (
          <DropMenu />
        ) : (
          <NavLink className='nav-link' to='/login'>
            LOGIN
          </NavLink>
        )}
        {/* <form className='search-box-container'>
          <input type='text' />
          <button>SEARCH</button>
        </form> */}
      </div>
    </div>
  );
};

export default Navigation;
