import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { SignUp } from '../../components/SignUp';

export const RegisterPage: FunctionComponent = () => {
  return (
    <div>
      <h2>RegisterPage</h2>
      <SignUp />

      or&nbsp;
      <Link to="/Login">
        Login
      </Link>
    </div>
  );
};
