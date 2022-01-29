import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React, { useState } from 'react';
import styled from 'styled-components';

function RecommendedImage() {
  const [images, setImages] = useState([]);

  return (
    <Wrap>
      <SettingFrame title="구매자 추천 이미지">
        <ImageUpload imgFiles={images} setImgFiles={setImages} />
      </SettingFrame>
    </Wrap>
  );
}

export default RecommendedImage;

const Wrap = styled.div`
  margin:50px;
`;
