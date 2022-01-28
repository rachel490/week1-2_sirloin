import { atom } from 'recoil';

export const DeadlineState = atom({
  key: 'deadlineState',
  default: {
    '상품 노출 기한': '',
    '상품 판매 기한': '',
  },
});

export const selectedTagState = atom({
  key: 'selectedTagState',
  default: [],
});

export const introImagesState = atom({
  key: 'introImagesState',
  default: [],
});

export const recommendedImagesState = atom({
  key: 'recommendedImagesState',
  default: [],
});
