/* eslint-disable no-console */
import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React from 'react';
import styled from 'styled-components';

function ProductImage() {
  return (
    <Wrap>
      <SettingFrame title="상품 소개 이미지">
        <ImageUpload />
      </SettingFrame>
    </Wrap>
  );
}

export default ProductImage;

const Wrap = styled.div`
  margin:50px;
`;
