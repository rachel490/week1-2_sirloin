import ImageUpload from 'components/atoms/ImageUpload';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function MainImg({ handleBasicInfo, title }) {
  const [mainImages, setMainImages] = useState([]);
  useEffect(() => {
    // console.log(title, mainImages);
    handleBasicInfo(title, mainImages);
  }, [mainImages]);

  return (
    <SettingFramItem title="상품 대표 이미지">
      <ImageUpload imageFiles={mainImages} setImageFiles={setMainImages} type="multiple" />
    </SettingFramItem>
  );
}

MainImg.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

export default MainImg;
