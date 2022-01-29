import ImageUpload from 'components/atoms/ImageUpload';
import SettingFrame from 'components/atoms/SettingFrame';
import React from 'react';
import styled from 'styled-components';

function IntroImage() {
  return (
    <Wrap>
      <SettingFrame title="구매자 추천 이미지">
        <ImageUpload />
      </SettingFrame>
    </Wrap>
  );
}

export default IntroImage;

const Wrap = styled.div`
  margin:50px;
`;
