import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useAppDispatch } from '../store/hooks';
import { Form } from './Form';
import { setUser } from '../store/features/User/userSlice';

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          // token: user.accessToken,
        }));

        // dispatch(setUser(user));
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // eslint-disable-next-line no-console
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <Form
        title="sign in"
        handleClick={handleLogin}
      />
    </div>
  );
};
