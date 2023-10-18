import { Link } from './AuthNavStyled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </nav>
  );
};
