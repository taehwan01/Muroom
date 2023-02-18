import { Link } from 'react-router-dom';

import './Navigation.styles.scss';

const Navigation = () => {
  return (
    // <nav>
    //   <div>
    //     <h1>
    //       <NavLink to='/'>Muroom</NavLink>
    //     </h1>
    //   </div>
    //   <div>
    //     <NavLink to='/places' exact='true'>
    //       ALL PLACES
    //     </NavLink>
    //   </div>
    //   <div>
    //     <NavLink to='/map' exact='true'>
    //       SHOW MAP
    //     </NavLink>
    //   </div>
    // </nav>

    <div className='navigation'>
      <Link className='logo-container' to='/'>
        Muroom
      </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to='/places'>
          ALL PLACES
        </Link>
        <Link className='nav-link' to='/map'>
          SHOW MAP
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
