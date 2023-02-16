import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <h1>
        <Link to='/'>Muroom</Link>
      </h1>
      <div>
        <NavLink to='/places' exact='true'>
          ALL PLACES
        </NavLink>
        <br />
        <NavLink to='/map' exact='true'>
          SHOW MAP
        </NavLink>
      </div>
    </>
  );
};

export default Navigation;
