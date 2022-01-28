import ImageUpload from 'components/atoms/ImageUpload';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';

function MainImg() {
  return (
    <SettingFramItem title="상품 대표 이미지">
      <ImageUpload />
    </SettingFramItem>
  );
}

export default MainImg;
