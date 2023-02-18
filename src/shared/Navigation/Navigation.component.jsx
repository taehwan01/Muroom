import { Link } from 'react-router-dom';

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
      <Link className='logo-container' to='/'>
        Muroom
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/places'>
          PLACES
        </Link>
        <Link className='nav-link' to='/map'>
          MAP
        </Link>
        <form className='search-box-container'>
          <input type='text' />
          <button>SEARCH</button>
        </form>
      </div>
    </div>
  );
};

export default Navigation;
