import { atom } from 'recoil';

export const isSavedState = atom({
  key: 'isSavedState',
  default: false,
});

export const registerFormState = atom({
  key: 'registerFormState',
  default: {},
});

export const productOption = atom({
  key: 'productOption',
  default: [],
});

export const totalStockState = atom({
  key: 'totalStockState',
  default: 0,
});

export default isSavedState;
