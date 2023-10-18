// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

import { Link } from '../AuthNav/AuthNavStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
