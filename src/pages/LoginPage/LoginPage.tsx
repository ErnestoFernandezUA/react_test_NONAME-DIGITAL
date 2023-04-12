import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../components/Login';

export const LoginPage: FunctionComponent = () => {
  return (
    <div>
      <h2>LoginPage</h2>
      <Login />

      or&nbsp;
      <Link to="/register">
        Register
      </Link>
    </div>
  );
};
