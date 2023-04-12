/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { Product } from '../../../type/Product';

export interface ProductsState {
  storage: Product[];
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  storage: [],
  statusLoading: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state: ProductsState, action: PayloadAction<Product[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: ProductsState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    setError: (state: ProductsState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    resetState: (state: ProductsState) => {
      return { ...state, ...initialState };
    },
  },
});

export default productsSlice.reducer;
export const {
  setProducts,
  setStatus,
  setError,
  resetState,
} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.storage;
export const selectProductsStatusLoading
= (state: RootState) => state.products.statusLoading;
export const selectProductsError = (state: RootState) => state.products.error;
