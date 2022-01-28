import ImageUpload from 'components/atoms/ImageUpload';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';

function Thumbnail() {
  return (
    <SettingFramItem title="상품 썸네일">
      <ImageUpload />
    </SettingFramItem>
  );
}

export default Thumbnail;
