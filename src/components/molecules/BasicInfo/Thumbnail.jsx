import ImageUpload from 'components/atoms/ImageUpload';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Thumbnail({ handleBasicInfo, title }) {
  const [thumbnail, setThumbnail] = useState([]);

  useEffect(() => {
    handleBasicInfo(title, thumbnail);
  }, [thumbnail]);

  return (
    <SettingFramItem title="상품 썸네일">
      <ImageUpload imageFiles={thumbnail} setImageFiles={setThumbnail} type="single" />
    </SettingFramItem>
  );
}

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  handleBasicInfo: PropTypes.func.isRequired,
};

export default Thumbnail;
