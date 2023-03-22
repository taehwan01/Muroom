import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './Navigation.styles.scss';

const Navigation = () => {
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
        <form className='search-box-container'>
          <input type='text' />
          <button>SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
