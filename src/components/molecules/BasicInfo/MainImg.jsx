import ImageUpload from 'components/atoms/ImageUpload';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function MainImg({ handleBasicInfo, title }) {
  const [mainImages, setMainImages] = useState([]);
  useEffect(() => {
    handleBasicInfo(title, mainImages);
  }, [mainImages]);

  return (
    <SettingFramItem title="상품 대표 이미지">
      <Wrapper>
        <ImageUpload imageFiles={mainImages} setImageFiles={setMainImages} type="multiple" />
      </Wrapper>
    </SettingFramItem>
  );
}

MainImg.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  height: 10rem;
`;

export default MainImg;
