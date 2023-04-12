import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  // UserCredential,
} from 'firebase/auth';

import { Form } from './Form';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/features/User/userSlice';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // const { user } = userCredential;

        // eslint-disable-next-line no-console
        console.log(user);

        dispatch(setUser({
          email: user.email,
          id: user.uid,
          // token: user.accessToken,
        }));

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
        title="Register"
        handleClick={handleRegister}
      />
    </div>
  );
};
