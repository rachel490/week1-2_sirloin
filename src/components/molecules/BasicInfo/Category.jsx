import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import SelectCategories from 'components/atoms/SelectCategories';

function Category() {
  return (
    <SettingFramItem title="카테고리">
      <SelectCategories />
    </SettingFramItem>
  );
}

export default Category;
