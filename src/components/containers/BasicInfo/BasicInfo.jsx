import ImageUpload from 'components/atoms/ImageUpload';
import Input from 'components/atoms/Input';
import SettingFrame from 'components/atoms/SettingFrame';
import SettingFramItem from 'components/atoms/SettingFrameItem';
import React from 'react';
import Category from './Category';

function BasicInfo() {
  return (
    <div>
      <SettingFrame title="상품기본정보">
        <SettingFramItem title="카테고리">
          <Category />
        </SettingFramItem>
        <SettingFramItem title="필터 태그">
          <div>dd</div>
        </SettingFramItem>
        <SettingFramItem title="상품명">
          <div>dd</div>
        </SettingFramItem>
        <SettingFramItem title="상품 구성 소개 정보">
          <Input placeholder="상품 구성 소개 정보를 입력해 주세요." />
        </SettingFramItem>
        <SettingFramItem title="상품 썸네일">
          <ImageUpload />
        </SettingFramItem>
        <SettingFramItem title="상품 대표 이미지">
          <ImageUpload />
        </SettingFramItem>
        <SettingFramItem title="상품 총 재고">
          <div>dd</div>
        </SettingFramItem>
      </SettingFrame>
    </div>
  );
}

export default BasicInfo;
