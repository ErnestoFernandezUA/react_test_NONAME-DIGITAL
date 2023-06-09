import { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';
import {
  selectProducts,
  selectProductsError,
  selectProductsStatusLoading,
} from '../../store/features/Products/productsSlice';
import { Card } from '../../components/Card';
import { Product } from '../../type/Product';
import { Loader } from '../../components/Loader';
import { TitleMessage } from '../../components/TitleMassage';
import { selectTotalCount } from '../../store/features/Basket/basketSlice';
import { loadProducts } from '../../store/sagas/sagaActions';
import { useAuth } from '../../hooks/use-auth';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const HomePage: FunctionComponent = () => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();

  if (!isAuth) {
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  }

  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const isLoading = useAppSelector(selectProductsStatusLoading) === 'loading';
  const error = useAppSelector(selectProductsError);
  const isEmptyBasket = useAppSelector(selectTotalCount) === 0;

  useEffect(() => {
    // use button 'Load Products' for start load saga
    // but after sent order products will not reloading
    // and will run default reload if basket is not empty
    // in normal commercial we reload data after each routing on page
    if (!isEmptyBasket && !products.length) {
      dispatch(loadProducts());
    }
  }, []);

  if (error) {
    return <TitleMessage message={error} status="error" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <h2>Homepage</h2>
      <h2>{email ? `Welcome ${email}` : 'You are not autorized'}</h2>

      {products.length > 0 && products.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}
    </Wrapper>
  );
};
