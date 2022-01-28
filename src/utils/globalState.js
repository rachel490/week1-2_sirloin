import { atom } from 'recoil';

export const isSavedState = atom({
  key: 'isSavedState',
  default: false,
});

export const registerFormState = atom({
  key: 'registerFormState',
  default: {},
});

export default isSavedState;
