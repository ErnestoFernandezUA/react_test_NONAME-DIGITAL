import { selectUser } from '../store/features/User/userSlice';
import { useAppSelector } from '../store/hooks';
import { User } from '../type/User';

export const useAuth = () => {
  const user: User | null = useAppSelector(selectUser);

  if (!user) {
    return {
      isAuth: null,
      email: null,
      token: null,
      id: null,
    };
  }

  return {
    isAuth: !!user.email,
    ...user,
  };
};
