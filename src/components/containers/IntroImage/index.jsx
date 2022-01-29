/* eslint-disable no-console */
import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React, { useState } from 'react';
import styled from 'styled-components';

function IntroImage() {
  const [images, setImages] = useState([]);
  return (
    <Wrap>
      <SettingFrame title="상품 소개 이미지">
        <ImageUpload imgFiles={images} setImgFiles={setImages} />
      </SettingFrame>
    </Wrap>
  );
}

export default IntroImage;

const Wrap = styled.div`
  margin:50px;
`;
